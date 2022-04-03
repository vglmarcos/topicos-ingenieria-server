const Cliente = require('../models/Cliente');

const ClienteController = {};

ClienteController.obtenerClientes = async (req, res) => {
    const clientes = await Cliente.find({});
    res.json(clientes);
}

ClienteController.agregarCliente = async (req, res) => {
    const { 
        nombre,
        telefono,
        correo,
        direccion
    } = req.body;
    const clientes = await Cliente.find({});
    let mayor = 0;
    for(let i = 0; i < clientes.length; i++) {
        if(mayor < clientes[i].id) {
            mayor = clientes[i].id;
        }
    }
    const nuevaID = mayor + 1;
    const nuevoCliente = new Cliente({
        id: nuevaID,
        nombre,
        telefono,
        correo,
        direccion
    });
    await nuevoCliente.save();
    res.json({
        res: "Cliente agregado con exito.",
        id: nuevaID
    });
}

ClienteController.editarCliente = async (req, res) => {
    const { 
        _id,
        id,
        nombre,
        telefono,
        correo,
        direccion
    } = req.body;
    console.log(_id)
    await Cliente.findByIdAndUpdate(_id, {
        id,
        nombre,
        telefono,
        correo,
        direccion
    });
    res.json({
        res: "Cliente editado con exito."
    });
}

ClienteController.eliminarCliente = async (req, res) => {
    const { _id } = req.body;
    await Cliente.findByIdAndDelete(_id);
    res.json({
        res: "Cliente eliminado con exito."
    });
}

module.exports = ClienteController;