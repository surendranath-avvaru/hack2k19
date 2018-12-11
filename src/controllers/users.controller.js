const Users = require('../models/users.model');

module.exports = {
    create(req, h) {
        const userData = {
            firstName: req.payload.firstName,
            lastName: req.payload.lastName,
            phone: req.payload.phone,
            address: req.payload.address,
            email: req.payload.email,
            password: req.payload.password,
            role: req.payload.role
        };
        
        return Users.create(userData).then((user) => {
            return { message: "User created successfully", user: user };
        }).catch((err) => {
            return { err: err };
        })
    },

    list(req, h) {
        return Users.find({})
        .populate('role')
        .exec().then((user) => {
            return { user: user };
        }).catch((err) => {
            return { err: err };
        });
    },

    get(req, h) {
        return Users.findById(req.params.id).exec().then((user) => {
            if(!user) return { message: 'User not Found' };
            return { user: user };
        }).catch((err) => {
            return { err: err };
        });
    },

    update(req, h) {
        let attributes = {};
        if (req.payload.firstName) {
            attributes.firstName = req.payload.firstName;
        }
        if (req.payload.lastName) {
            attributes.lastName = req.payload.lastName;
        }
        if (req.payload.phone) {
            attributes.phone = req.payload.phone;
        }
        if (req.payload.address) {
            attributes.address = req.payload.address;
        }

        return Users.findById(req.params.id).exec().then((user) => {
          if (!user) return { err: 'User not found' };
          user.save(attributes);
        }).then((data) => {
            return { message: "User data updated successfully", user: data };
        }).catch((err) => {
            return { err: err };
        });
    },
    
    remove(req, h) {
        return Users.findById(req.params.id).exec().then((user) => {
            if (!user) return { err: 'User not found' };
            user.remove();
          }).then((res) => {
            return { message: "User data deleted successfully", success: true };
        }).catch((err) => {
            return { err: err };
        });
    }
};