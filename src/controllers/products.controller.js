const Product = require('../models/products.model');

module.exports = {
    create(req, h) {
        const productData = {
            name: req.payload.name,
            description: req.payload.description,
            price: req.payload.price,
            discount: req.payload.discount,
            location: req.payload.location
        };
        
        return Product.create(productData).then((product)=> {
            return { message: "Product created successfully", product: product };
        }).catch((err) => {
            return { err: err };
        })
    },

    list(req, h) {
        return Product.find()
        .then((products) => {
            return { products: products };
        }).catch((err) => {
            return { err: err };
        });
    },
};