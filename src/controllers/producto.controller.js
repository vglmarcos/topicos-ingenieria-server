const Producto = require('../models/Producto');

const ProductoController = {};

ProductoController.obtenerProductos = async (req, res) => {
    const productos = await Producto.find({});
    res.json(productos);
}

ProductoController.agregarProducto = async (req, res) => {
    const { 
        nombre,
        tipo,
        precio
    } = req.body;
    const productos = await Producto.find({});
    let mayor = 0;
    for(let i = 0; i < productos.length; i++) {
        if(mayor < productos[i].id) {
            mayor = productos[i].id;
        }
    }
    const nuevoProducto = new Producto({
        id: mayor + 1,
        nombre,
        tipo,
        precio
    });
    await nuevoProducto.save();
    res.json({
        res: "Producto agregado con exito."
    });
}

ProductoController.editarProducto = async (req, res) => {
    const { 
        _id,
        id,
        nombre,
        tipo,
        precio
    } = req.body;
    await Producto.findByIdAndUpdate(_id, {
        id,
        nombre,
        tipo,
        precio
    });
    res.json({
        res: "Producto editado con exito."
    });
}

ProductoController.eliminarProducto = async (req, res) => {
    const { _id } = req.body;
    await Producto.findByIdAndDelete(_id);
    res.json({
        res: "Producto eliminado con exito."
    });
}

module.exports = ProductoController;