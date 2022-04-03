const { Schema, model } = require('mongoose');

const FacturaSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    id_venta: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    collection: 'factura'
});

module.exports = model('factura', FacturaSchema);