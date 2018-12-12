const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WalletSchema = new Schema({
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    balance: {
        required: true,
        type: Number
    },
});

module.exports = mongoose.model('Wallet', WalletSchema);