const { Router } = require('express');
const { 
    obtenerCotizaciones,
    agregarCotizacion,
    editarCotizacion,
    eliminarCotizacion
} = require('../controllers/cotizacion.controller');

const router = Router();

router.get('/obtenerCotizaciones', obtenerCotizaciones);

router.post('/agregarCotizacion', agregarCotizacion);

router.put('/editarCotizacion', editarCotizacion);

router.delete('/eliminarCotizacion', eliminarCotizacion);

module.exports = router;