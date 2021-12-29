
const mongoose = require('mongoose');

const schema = new mongoose.Schema( {
    title: String,
    type: Object,
    required: Array,
    properties: Object,
    updated_at: { type: Date, default: Date.now }
} );


module.exports = mongoose.model('Schema', schema, 'schema');