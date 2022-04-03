const { Schema, model } = require('mongoose');

const CotizacionSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    id_usuario: {
        type: Number,
        required: true
    },
    id_cliente: {
        type: Number,
        required: true
    },
    carrito: [{
        id_producto: {
            type: Number,
            required: true
        },
        dimensiones: {
            ancho: {
                type: Number,
                required: true
            },
            largo: {
                type: Number,
                required: true
            }
        },
        cantidad: {
            type: Number,
            required: true
        },
        subtotal: {
            type: Number,
            required: true
        }
    }],
    subtotal: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'cotizacion'
});

module.exports = model('cotizacion', CotizacionSchema);