const Venta = require('../models/Venta');
const Cotizacion = require('../models/Cotizacion');
const Lamina = require('../models/Lamina');
const Producto = require('../models/Producto');

const VentaController = {};

VentaController.obtenerVentas = async (req, res) => {
    const ventas = await Venta.find({});
    res.json(ventas);
}

VentaController.agregarVenta = async (req, res) => {
    const { 
        id_cotizacion,
        estado
    } = req.body;
    const nuevaID = await Venta.countDocuments();
    const nuevaVenta = new Venta({
        id: nuevaID + 1,
        id_cotizacion,
        estado
    });
    await nuevaVenta.save();
    res.json({
        res: "Venta agregada con exito."
    });
}

VentaController.editarVenta = async (req, res) => {
    const { 
        _id,
        id,
        id_cotizacion,
        estado
    } = req.body;
    await Venta.findByIdAndUpdate(_id, {
        id,
        id_cotizacion,
        estado
    });
    res.json({
        res: "Venta editada con exito."
    });
    if(estado === "Cancelada") {
        let cotizacion = await Cotizacion.findOne({id: id_cotizacion});
        for(let i = 0; i < cotizacion.carrito.length; i++) {
            let producto = await Producto.findOne({id: cotizacion.carrito[i].id_producto});
            let lamina = await Lamina.findOne({nombre: producto.tipo});
            await Lamina.findOneAndUpdate({nombre: producto.tipo}, {$set: { cantidad: lamina.cantidad + cotizacion.carrito[i].cantidad }});
        }
    }
}

VentaController.eliminarVenta = async (req, res) => {
    const { _id } = req.body;
    await Venta.findByIdAndDelete(_id);
    res.json({
        res: "Venta eliminada con exito."
    });
}

module.exports = VentaController;