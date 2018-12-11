const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var RoleSchema = new Schema({
    name: {
        required: true,
        type: String,
        index: { unique: true }
    }
});

module.exports = mongoose.model('Roles', RoleSchema);