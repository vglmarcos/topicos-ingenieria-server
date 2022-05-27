const { Schema, model } = require('mongoose');

const ClienteSchema = new Schema({
    id: {
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
    correo: {
        type: String,
        required: true
    },
    direccion: {
        calle: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        colonia: {
            type: String,
            required: true
        },
        cod_postal: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true,
    collection: 'cliente'
});

module.exports = model('cliente', ClienteSchema);