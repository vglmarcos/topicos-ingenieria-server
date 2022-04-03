const { Schema, model } = require('mongoose');

const ProveedorSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    id_lamina: {
        type: Number,
        required: true
    },
    id_producto: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'proveedor'
});

module.exports = model('proveedor', ProveedorSchema);