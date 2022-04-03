const { Schema, model } = require('mongoose');

const VentaSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    id_cotizacion: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'venta'
});

module.exports = model('venta', VentaSchema);