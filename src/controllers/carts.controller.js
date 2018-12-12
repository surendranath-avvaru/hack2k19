const Carts = require('../models/carts.model');
// const CartMaster = require('../models/carts.model');

module.exports = {
    createCartMaster(req, h) {
        const cartData = {
            cartId: req.payload.cartId
        };
        
        return Carts.CartMaster.create(cartData).then((cart)=> {
            return { message: "Cart Master added successfully", cart: cart };
        }).catch((err) => {
            return { err: err };
        })
    },

    listCartMaster(req, h) {
        return Carts.CartMaster.find()
        .then((carts) => {
            return { carts: carts };
        }).catch((err) => {
            return { err: err };
        });
    },

    createCart(req, h) {
        const cartData = {
            rfid: req.payload.cartId,
            cartId: req.payload.cartId,
            product: req.payload.product
        };
        
        return Carts.Carts.create(cartData).then((cart)=> {
            return { message: "Product added successfully", cart: cart };
        }).catch((err) => {
            return { err: err };
        })
    },

    listCarts(req, h) {
        return Carts.Carts.find()
        .then((carts) => {
            return { carts: carts };
        }).catch((err) => {
            return { err: err };
        });
    }
};