const InDisplay = require('../models/inDisplay.model');

module.exports = {
    create(req, h) {
        const inDisplayData = {
            product: req.payload.product,
            count: req.payload.count
        };
        
        return InDisplay.create(inDisplayData).then((inDisplay) => {
            return { message: "InDisplay created successfully", inDisplay: inDisplay };
        }).catch((err) => {
            return { err: err };
        })
    },

    list(req, h) {
        return InDisplay.find({})
        .populate('product')
        .exec().then((inDisplay) => {
            return { inDisplay: inDisplay };
        }).catch((err) => {
            return { err: err };
        });
    },

    get(req, h) {
        return InDisplay.findById(req.params.id).exec().then((inDisplay) => {
            if(!inDisplay) return { message: 'InDisplay item not Found' };
            return { inDisplayProduct: inDisplay };
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

        return InDisplay.findById(req.params.id).exec().then((inDisplay) => {
          if (!inDisplay) return { err: 'InDisplay item not found' };
          inDisplay.save(attributes);
        }).then((data) => {
            return { message: "Product inDisplay data updated successfully", inDisplay: data };
        }).catch((err) => {
            return { err: err };
        });
    },
    
    remove(req, h) {
        return InDisplay.findById(req.params.id).exec().then((inDisplay) => {
            if (!inDisplay) return { err: 'InDisplay item not found' };
            inDisplay.remove();
          }).then((res) => {
            return { message: "InDisplay data deleted successfully", success: true };
        }).catch((err) => {
            return { err: err };
        });
    }
};