const Usuario = require('../models/Usuario');

const UsuarioController = {};

UsuarioController.obtenerUsuarios = async (req, res) => {
    const usuarios = await Usuario.find({});
    res.json(usuarios);
}

UsuarioController.agregarUsuario = async (req, res) => {
    const { 
        nombre,
        tipo,
        correo,
        telefono,
        usuario,
        contra
    } = req.body;
    const nuevaID = await Usuario.countDocuments();
    const nuevoUsuario = new Usuario({
        id: nuevaID + 1,
        nombre,
        tipo,
        correo,
        telefono,
        usuario,
        contra,
        estado: false
    });
    await nuevoUsuario.save();
    res.json({
        res: "Usuario agregado con exito."
    });
}

UsuarioController.editarUsuario = async (req, res) => {
    const { 
        _id,
        id,
        nombre,
        tipo,
        correo,
        telefono,
        usuario,
        contra,
        estado
    } = req.body;
    await Usuario.findByIdAndUpdate(_id, {
        id,
        nombre,
        tipo,
        correo,
        telefono,
        usuario,
        contra,
        estado
    });
    res.json({
        res: "Usuario editado con exito."
    });
}

UsuarioController.eliminarUsuario = async (req, res) => {
    const { _id } = req.body;
    await Usuario.findByIdAndDelete(_id);
    res.json({
        res: "Usuario eliminado con exito."
    });
}

module.exports = UsuarioController;