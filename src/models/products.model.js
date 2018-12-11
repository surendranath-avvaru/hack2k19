const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    description: String,
    price: Number,
    discount: Number,
    location: String
});

module.exports = mongoose.model('Products', ProductsSchema);