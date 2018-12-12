'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const Inert = require('inert');
const Vision = require('vision');

const mongoDbUri = 'mongodb://localhost:27017/hack';
const productRoutes = require('./src/routes/products.routes');
const inventoryRoutes = require('./src/routes/inventory.routes');
const roleRoutes = require('./src/routes/roles.routes');
const userRoutes = require('./src/routes/users.routes');
const cartRoutes = require('./src/routes/carts.routes');

mongoose.connect(mongoDbUri, {
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log(`App is connected to ${mongoDbUri}`);
});

mongoose.connection.on('error', err => {
    console.log('Error while connecting to mongodb', err);
});

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello, world!';
    }
});

const init = async () => {
    await server.register([
        Inert,
        Vision,
        {
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: false,
            logEvents: ['response', 'onPostStart']
        }
        },{
            plugin: require('hapi-swagger'),
            options: {
                        apiVersion: "0.0.1"
                    }
        }
    ]);
    // await server.register({
    //     plugin: require('hapi-swagger'),
    //     options: {
    //         apiVersion: "0.0.1"
    //     }
    // }, function (err) {
    //     if (err) {
    //         server.log(['error'], 'hapi-swagger load error: ' + err)
    //     } else {
    //         server.log(['start'], 'hapi-swagger interface loaded')
    //     }
    // });

    await server.route(productRoutes);
    await server.route(inventoryRoutes);
    await server.route(roleRoutes);
    await server.route(userRoutes);
    await server.route(cartRoutes);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();