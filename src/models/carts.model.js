const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartMaster = mongoose.model('CartMaster', ({
    cartId: {
        required: true,
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
}));

const Carts = mongoose.model('Carts',({
    rfid: {
        required: true,
        type: String,
    },
    product: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    cartId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'CartMaster'
    }
}));

module.exports = { CartMaster, Carts };

// export const CartMaster = mongoose.model('CartMaster', CartMasterSchema);