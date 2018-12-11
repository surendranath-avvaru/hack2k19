'use strict'

const UsersController = require('../controllers/users.controller');
const Joi = require('joi');

const schema = Joi.object().keys({
    firstName: Joi.string(),
    lastName: Joi.string(),
    phone: Joi.string(),
    address: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    role: Joi.string()
});

module.exports = [
    {
        path: '/api/user',
        method: 'POST',
        handler: UsersController.create,
        config: {
            validate: {
                payload: schema
            }
        }
    },

    {
        path: '/api/user',
        method: 'GET',
        handler: UsersController.list
    },

    {
        path: '/api/user/{id}',
        method: 'GET',
        handler: UsersController.get
    },

    {
        path: '/api/user/{id}',
        method: 'PUT',
        handler: UsersController.update
    },

    {
        path: '/api/user/{id}',
        method: 'DELETE',
        handler: UsersController.remove
    },
];