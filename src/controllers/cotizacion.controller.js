const Cotizacion = require('../models/Cotizacion');

const CotizacionController = {};

CotizacionController.obtenerCotizaciones = async (req, res) => {
    const cotizaciones = await Cotizacion.find({});
    res.json(cotizaciones);
}

CotizacionController.agregarCotizacion = async (req, res) => {
    const { 
        id_usuario,
        id_cliente,
        carrito,
        subtotal,
        total,
        estado
    } = req.body;
    const cotizaciones = await Cotizacion.find({});
    let mayor = 0;
    for(let i = 0; i < cotizaciones.length; i++) {
        if(mayor < cotizaciones[i].id) {
            mayor = cotizaciones[i].id;
        }
    }
    const nuevaCotizacion = new Cotizacion({
        id: mayor + 1,
        id_usuario,
        id_cliente,
        carrito,
        subtotal,
        total,
        estado
    });
    await nuevaCotizacion.save();
    res.json({
        res: "Cotizacion agregado con exito.",
        id: nuevaCotizacion.id
    });
}

CotizacionController.editarCotizacion = async (req, res) => {
    const { 
        _id,
        id,
        id_usuario,
        id_cliente,
        carrito,
        subtotal,
        total,
        estado
    } = req.body;
    await Cotizacion.findByIdAndUpdate(_id, {
        id,
        id_usuario,
        id_cliente,
        carrito,
        subtotal,
        total,
        estado
    });
    res.json({
        res: "Cotizacion editada con exito."
    });
}

CotizacionController.eliminarCotizacion = async (req, res) => {
    const { _id } = req.body;
    await Cotizacion.findByIdAndDelete(_id);
    res.json({
        res: "Cotizacion eliminada con exito."
    });
}

module.exports = CotizacionController;