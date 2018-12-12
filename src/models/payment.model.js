const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    invoice: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Invoice'
    },
    amount: {
        required: true,
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Payment', PaymentSchema);