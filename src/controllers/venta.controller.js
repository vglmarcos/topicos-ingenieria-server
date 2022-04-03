const Venta = require('../models/Venta');

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
}

VentaController.eliminarVenta = async (req, res) => {
    const { _id } = req.body;
    await Venta.findByIdAndDelete(_id);
    res.json({
        res: "Venta eliminada con exito."
    });
}

module.exports = VentaController;