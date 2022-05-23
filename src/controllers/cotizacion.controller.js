const Cotizacion = require('../models/Cotizacion');
const Lamina = require('../models/Lamina');
const Producto = require('../models/Producto');

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
    for(let i = 0; i < carrito.length; i++) {
        let producto = await Producto.findOne({id: carrito[i].id_producto});
        let lamina = await Lamina.findOne({nombre: producto.tipo});
        await Lamina.updateOne({nombre: producto.tipo}, {$set: {cantidad: lamina.cantidad - carrito[i].cantidad}});
    }
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
    let cotizacion_anterior = await Cotizacion.findById(_id);
    await Cotizacion.findByIdAndUpdate(_id, {
        id,
        id_usuario,
        id_cliente,
        carrito,
        subtotal,
        total,
        estado
    });
    let cotizacion_actual = await Cotizacion.findById(_id);
    res.json({
        res: "Cotizacion editada con exito.",
        id: id
    });
    for(let i = 0; i < cotizacion_anterior.carrito.length; i++) {
        let producto_anterior = cotizacion_anterior.carrito[i];
        let producto_actual = cotizacion_actual.carrito.find(e => e._id === producto_anterior._id);
        if(!producto_actual) {
            let producto = await Producto.findOne({id: producto_anterior.id_producto});
            let lamina = await Lamina.findOne({nombre: producto.tipo});
            await Lamina.findOneAndUpdate({nombre: producto.tipo}, {$set: {cantidad: lamina.cantidad + producto_anterior.cantidad}});
        }
    }

    for(let i = 0; i < cotizacion_actual.carrito.length; i++) {
        let producto_actual = cotizacion_actual.carrito[i];
        let producto_anterior = cotizacion_anterior.carrito.find(e => e._id === producto_actual._id);
        if(!producto_anterior){
            let producto = await Producto.findOne({id: producto_actual.id_producto});
            let lamina = await Lamina.findOne({nombre: producto.tipo});
            await Lamina.findOneAndUpdate({nombre: producto.tipo}, {$set: {cantidad: lamina.cantidad - producto_actual.cantidad}});
        }
    }
}

CotizacionController.eliminarCotizacion = async (req, res) => {
    const { _id } = req.body;
    let cotizacion = await Cotizacion.findById(_id);
    if(cotizacion.estado === "Pendiente") {
        for(let i = 0; i < cotizacion.carrito.length; i++) {
            let producto = await Producto.findOne({id: cotizacion.carrito[i].id_producto});
            let lamina = await Lamina.findOne({nombre: producto.tipo});
            await Lamina.findOneAndUpdate({nombre: producto.tipo}, {$set: { cantidad: lamina.cantidad + cotizacion.carrito[i].cantidad }});
        }
    }
    await Cotizacion.findByIdAndDelete(_id);
    res.json({
        res: "Cotizacion eliminada con exito."
    });
}

module.exports = CotizacionController;