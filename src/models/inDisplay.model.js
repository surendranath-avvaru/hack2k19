const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InDisplaySchema = new Schema({
    product: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    count: Number
});

module.exports = mongoose.model('InDisplay', InDisplaySchema);