const Lamina = require('../models/Lamina');

const LaminaController = {};

LaminaController.obtenerLaminas = async (req, res) => {
    const laminas = await Lamina.find({});
    res.json(laminas);
}

LaminaController.agregarLamina = async (req, res) => {
    const { 
        id_proveedor,
        nombre,
        cantidad,
        ultima_fecha
    } = req.body;
    const nuevaID = await Lamina.countDocuments();
    const nuevaLamina = new Lamina({
        id: nuevaID + 1,
        id_proveedor,
        nombre,
        cantidad,
        ultima_fecha
    });
    await nuevaLamina.save();
    res.json({
        res: "Lamina agregada con exito."
    });
}

LaminaController.editarLamina = async (req, res) => {
    const { 
        _id,
        id,
        id_proveedor,
        nombre,
        cantidad,
        ultima_fecha
    } = req.body;
    await Lamina.findByIdAndUpdate(_id, {
        id,
        id_proveedor,
        nombre,
        cantidad,
        ultima_fecha
    });
    res.json({
        res: "Lamina editada con exito."
    });
}

LaminaController.eliminarLamina = async (req, res) => {
    const { _id } = req.body;
    await Lamina.findByIdAndDelete(_id);
    res.json({
        res: "Lamina eliminada con exito."
    });
}

module.exports = LaminaController;