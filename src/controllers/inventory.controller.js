const Inventory = require('../models/inventory.model');

module.exports = {
    create(req, h) {
        const inventoryData = {
            product: req.payload.product,
            count: req.payload.price,
            trend: req.payload.trend
        };
        
        return Inventory.create(inventoryData).then((inventory) => {
            return { message: "Inventory created successfully", inventory: inventory };
        }).catch((err) => {
            return { err: err };
        })
    },

    list(req, h) {
        return Inventory.find({})
        .populate('product')
        .exec().then((inventory) => {
            return { inventory: inventory };
        }).catch((err) => {
            return { err: err };
        });
    },

    get(req, h) {
        return Inventory.findById(req.params.id).exec().then((inventory) => {
            if(!inventory) return { message: 'Inventory item not Found' };
            return { inventoryProduct: inventory };
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

        return Inventory.findById(req.params.id).exec().then((inventory) => {
          if (!inventory) return { err: 'Inventory item not found' };
          inventory.save(attributes);
        }).then((data) => {
            return { message: "Product inventory data updated successfully", inventory: data };
        }).catch((err) => {
            return { err: err };
        });
    },
    
    remove(req, h) {
        return Inventory.findById(req.params.id).exec().then((inventory) => {
            if (!inventory) return { err: 'Inventory item not found' };
            inventory.remove();
          }).then((res) => {
            return { message: "Product inventory data deleted successfully", success: true };
        }).catch((err) => {
            return { err: err };
        });
    }
};