const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
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
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    contra: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true,
    collection: 'usuario'
});

module.exports = model('usuario', UsuarioSchema);