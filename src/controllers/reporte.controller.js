const Reporte = require('../models/Reporte');

const ReporteController = {};

ReporteController.obtenerReportes = async (req, res) => {
    const reportes = await Reporte.find({});
    res.json(reportes);
}

ReporteController.agregarReporte = async (req, res) => {
    const { 
        nombre,
        periodo
    } = req.body;
    const nuevaID = await Reporte.countDocuments();
    const nuevoReporte = new Recibo({
        id: nuevaID + 1,
        nombre,
        periodo
    });
    await nuevoReporte.save();
    res.json({
        res: "Reporte agregado con exito."
    });
}

ReporteController.editarReporte = async (req, res) => {
    const { 
        _id,
        id,
        nombre,
        periodo
    } = req.body;
    await Reporte.findByIdAndUpdate(_id, {
        id,
        nombre,
        periodo
    });
    res.json({
        res: "Reporte editado con exito."
    });
}

ReporteController.eliminarReporte = async (req, res) => {
    const { _id } = req.body;
    await Reporte.findByIdAndDelete(_id);
    res.json({
        res: "Reporte eliminado con exito."
    });
}

module.exports = ReporteController;