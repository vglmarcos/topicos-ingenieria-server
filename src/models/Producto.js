const { Schema, model } = require('mongoose');

const ProductoSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    collection: 'producto'
});

module.exports = model('producto', ProductoSchema);