const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    product: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    count: Number,
    trend: Number
});

module.exports = mongoose.model('Inventory', InventorySchema);