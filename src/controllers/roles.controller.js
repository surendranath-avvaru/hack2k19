const Roles = require('../models/roles.model');

module.exports = {
    create(req, h) {
        const roleData = {
            name: req.payload.name
        };
        
        return Roles.create(roleData).then((role) => {
            return { message: "Role created successfully", role: role };
        }).catch((err) => {
            return { err: err };
        })
    },

    list(req, h) {
        return Roles.find({})
        .then((roles) => {
            return { roles: roles };
        }).catch((err) => {
            return { err: err };
        });
    },

    get(req, h) {
        return Roles.findById(req.params.id).exec().then((role) => {
            if(!role) return { message: 'Roles item not Found' };
            return { inventoryProduct: role };
        }).catch((err) => {
            return { err: err };
        });
    },

    update(req, h) {
        let attributes = {};

        if (req.payload.count) {
            attributes.count = req.payload.count;
        }
        if (req.payload.trend) {
            attributes.trend = req.payload.trend;
        }

        return Roles.findById(req.params.id).exec().then((role) => {
          if (!role) return { err: 'Roles item not found' };
          role.save(attributes);
        }).then((data) => {
            return { message: "Product role data updated successfully", role: data };
        }).catch((err) => {
            return { err: err };
        });
    },
    
    remove(req, h) {
        return Roles.findById(req.params.id).exec().then((role) => {
            if (!role) return { err: 'Roles item not found' };
            role.remove();
          }).then((res) => {
            return { message: "Product role data deleted successfully", success: true };
        }).catch((err) => {
            return { err: err };
        });
    }
};