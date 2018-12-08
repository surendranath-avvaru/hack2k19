'use strict';

const Hapi = require('hapi');
const mongoose = require('mongoose');
const mongoDbUri = 'mongodb://localhost:27017/hack2k18';
const productRoutes = require('./src/routes/products.routes');

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
    await server.register({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: false,
            logEvents: ['response', 'onPostStart']
        }
    });

    await server.route(productRoutes);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();