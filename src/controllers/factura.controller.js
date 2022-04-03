const Factura = require('../models/Factura');

const FacturaController = {};

FacturaController.obtenerFacturas = async (req, res) => {
    const facturas = await Factura.find({});
    res.json(facturas);
}

FacturaController.agregarFactura = async (req, res) => {
    const { 
        id_venta
    } = req.body;
    const nuevaID = await Factura.countDocuments();
    const nuevaFactura = new Factura({
        id: nuevaID + 1,
        id_venta
    });
    await nuevaFactura.save();
    res.json({
        res: "Factura agregada con exito."
    });
}

FacturaController.editarFactura = async (req, res) => {
    const { 
        _id,
        id,
        id_venta
    } = req.body;
    await Factura.findByIdAndUpdate(_id, {
        id,
        id_venta
    });
    res.json({
        res: "Factura editada con exito."
    });
}

FacturaController.eliminarFactura = async (req, res) => {
    const { _id } = req.body;
    await Factura.findByIdAndDelete(_id);
    res.json({
        res: "Factura eliminada con exito."
    });
}

module.exports = FacturaController;