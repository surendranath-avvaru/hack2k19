'use strict'

const RolesController = require('../controllers/roles.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string()
});

module.exports = [
    {
        path: '/api/role',
        method: 'POST',
        handler: RolesController.create,
        config: {
            validate: {
                payload: schema
            }
        }
    },

    {
        path: '/api/role',
        method: 'GET',
        handler: RolesController.list
    },

    {
        path: '/api/role/{id}',
        method: 'GET',
        handler: RolesController.get
    },

    {
        path: '/api/role/{id}',
        method: 'PUT',
        handler: RolesController.update
    },

    {
        path: '/api/role/{id}',
        method: 'DELETE',
        handler: RolesController.remove
    },
];