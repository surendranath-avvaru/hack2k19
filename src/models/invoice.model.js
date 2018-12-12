const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    products: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);