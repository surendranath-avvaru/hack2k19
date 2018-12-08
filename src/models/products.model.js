const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    description: String,
    price: Number,
    discount: Number
});

module.exports = mongoose.model('Products', ProductsSchema);