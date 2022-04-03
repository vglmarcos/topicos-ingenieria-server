const { Router } = require('express');
const { 
    obtenerReportes,
    agregarReporte,
    editarReporte,
    eliminarReporte
} = require('../controllers/reporte.controller');

const router = Router();

router.get('/obtenerReportes', obtenerReportes);

router.post('/agregarReporte', agregarReporte);

router.put('/editarReporte', editarReporte);

router.delete('/eliminarReporte', eliminarReporte);

module.exports = router;