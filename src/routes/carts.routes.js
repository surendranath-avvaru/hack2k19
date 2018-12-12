'use strict'

const CartController = require('../controllers/carts.controller');
const Joi = require('joi');

const cartMasterSchema = Joi.object().keys({
    cartId: Joi.string().required()
});

const cartSchema = Joi.object().keys({
    rfid: Joi.string().required(),
    cartId: Joi.string().required(),
    product: Joi.string().required()
});

module.exports = [
    {
        path: '/api/cartMaster',
        method: 'POST',
        handler: CartController.createCartMaster,
        config: {
            validate: {
                payload: cartMasterSchema
            }
        }
    },

    {
        path: '/api/cartMaster',
        method: 'GET',
        handler: CartController.listCartMaster
    },

    {
        path: '/api/carts',
        method: 'POST',
        handler: CartController.createCart,
        config: {
            validate: {
                payload: cartSchema
            }
        }
    },

    {
        path: '/api/carts',
        method: 'GET',
        handler: CartController.listCarts
    }
];