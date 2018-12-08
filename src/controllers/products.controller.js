const Product = require('../models/products.model');

module.exports = {
    create(req, h) {
        const productData = {
            name: req.payload.name,
            description: req.payload.description,
            price: req.payload.price,
            discount: req.payload.discount
        };
        
        return Product.create(productData).then((product)=> {
            return { message: "Product created successfully", product: product };
        }).catch((err) => {
            return { err: err };
        })
    }
};