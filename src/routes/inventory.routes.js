'use strict'

const InventoryController = require('../controllers/inventory.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    product: Joi.string(),
    count: Joi.number(),
    trend: Joi.number()
});

module.exports = [
    {
        path: '/api/inventory',
        method: 'POST',
        handler: InventoryController.create,
        config: {
            validate: {
                payload: schema
            }
        }
    },

    {
        path: '/api/inventory',
        method: 'GET',
        handler: InventoryController.list
    },

    {
        path: '/api/inventory/{id}',
        method: 'GET',
        handler: InventoryController.get
    },

    {
        path: '/api/inventory/{id}',
        method: 'PUT',
        handler: InventoryController.update
    },

    {
        path: '/api/inventory/{id}',
        method: 'DELETE',
        handler: InventoryController.remove
    },
];