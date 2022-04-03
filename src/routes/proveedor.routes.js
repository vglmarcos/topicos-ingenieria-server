const { Router } = require('express');
const { 
    obtenerProveedores,
    agregarProveedor,
    editarProveedor,
    eliminarProveedor
} = require('../controllers/proveedor.controller');

const router = Router();

router.get('/obtenerProveedores', obtenerProveedores);

router.post('/agregarProveedor', agregarProveedor);

router.put('/editarProveedor', editarProveedor);

router.delete('/eliminarProveedor', eliminarProveedor);

module.exports = router;