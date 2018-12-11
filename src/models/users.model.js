const mongoose = require('mongoose');
require('mongoose-type-email');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        required: true,
        type: String,
        ref: 'Roles'
    },
    lastName: {
        required: true,
        type: String,
        ref: 'Roles'
    },
    phone: String,
    address: String,
    email: {
        required: true,
        type: mongoose.SchemaTypes.Email,
        index: { unique: true }
    },
    password: {
        required: true,
        type: String
    },
    role: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Roles'
    }
});

module.exports = mongoose.model('Users', UserSchema);