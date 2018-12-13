'use strict'

const InDisplayController = require('../controllers/inDisplay.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    product: Joi.string(),
    count: Joi.number(),
    trend: Joi.number()
});

module.exports = [
    {
        path: '/api/inDisplay',
        method: 'POST',
        handler: InDisplayController.create,
        config: {
            validate: {
                payload: schema
            }
        }
    },

    {
        path: '/api/inDisplay',
        method: 'GET',
        handler: InDisplayController.list
    },

    {
        path: '/api/inDisplay/{id}',
        method: 'GET',
        handler: InDisplayController.get
    },

    {
        path: '/api/inDisplay/{id}',
        method: 'PUT',
        handler: InDisplayController.update
    },

    {
        path: '/api/inDisplay/{id}',
        method: 'DELETE',
        handler: InDisplayController.remove
    },
];