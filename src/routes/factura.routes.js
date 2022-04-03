const { Router } = require('express');
const { 
    obtenerFacturas,
    agregarFactura,
    editarFactura,
    eliminarFactura
} = require('../controllers/factura.controller');

const router = Router();

router.get('/obtenerFacturas', obtenerFacturas);

router.post('/agregarFactura', agregarFactura);

router.put('/editarFactura', editarFactura);

router.delete('/eliminarFactura', eliminarFactura);

module.exports = router;