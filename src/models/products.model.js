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
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

ProductsSchema.pre('save', (next) => {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Products', ProductsSchema);