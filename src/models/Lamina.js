const { Schema, model } = require('mongoose');

const LaminaSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    id_proveedor: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    ultima_fecha: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    collection: 'lamina'
});

module.exports = model('lamina', LaminaSchema);