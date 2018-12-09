const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    product: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    count: Number,
    trend: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

InventorySchema.pre('save', (next) => {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Inventory', InventorySchema);