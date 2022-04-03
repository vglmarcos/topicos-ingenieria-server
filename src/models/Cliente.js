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
        type: String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'cliente'
});

module.exports = model('cliente', ClienteSchema);