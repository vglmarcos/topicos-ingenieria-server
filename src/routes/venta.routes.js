const { Router } = require('express');
const { 
    obtenerVentas,
    agregarVenta,
    editarVenta,
    eliminarVenta
} = require('../controllers/venta.controller');

const router = Router();

router.get('/obtenerVentas', obtenerVentas);

router.post('/agregarVenta', agregarVenta);

router.put('/editarVenta', editarVenta);

router.delete('/eliminarVenta', eliminarVenta);

module.exports = router;