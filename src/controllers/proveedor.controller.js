const Proveedor = require('../models/Proveedor');

const ProveedorController = {};

ProveedorController.obtenerProveedores = async (req, res) => {
    const proveedores = await Proveedor.find({});
    res.json(proveedores);
}

ProveedorController.agregarProveedor = async (req, res) => {
    const { 
        id_lamina,
        id_producto,
        nombre,
        telefono,
        ubicacion
    } = req.body;
    const nuevaID = await Proveedor.countDocuments();
    const nuevoProveedor = new Proveedor({
        id: nuevaID + 1,
        id_lamina,
        id_producto,
        nombre,
        telefono,
        ubicacion
    });
    await nuevoProveedor.save();
    res.json({
        res: "Proveedor agregado con exito."
    });
}

ProveedorController.editarProveedor = async (req, res) => {
    const { 
        _id,
        id,
        id_lamina,
        id_producto,
        nombre,
        telefono,
        ubicacion
    } = req.body;
    await Proveedor.findByIdAndUpdate(_id, {
        id,
        id_lamina,
        id_producto,
        nombre,
        telefono,
        ubicacion
    });
    res.json({
        res: "Proveedor editado con exito."
    });
}

ProveedorController.eliminarProveedor = async (req, res) => {
    const { _id } = req.body;
    await Proveedor.findByIdAndDelete(_id);
    res.json({
        res: "Proveedor eliminado con exito."
    });
}

module.exports = ProveedorController;