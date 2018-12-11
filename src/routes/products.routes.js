'use strict'

const ProductController = require('../controllers/products.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().max(100).required(),
    description: Joi.string().max(500),
    price: Joi.number(),
    discount: Joi.number(),
    location: Joi.string().max(100).required()
});

module.exports = [
    {
        path: '/api/products',
        method: 'POST',
        handler: ProductController.create,
        config: {
            validate: {
                payload: schema
            }
        }
    },

    {
        path: '/api/products',
        method: 'GET',
        handler: ProductController.list
    }
];