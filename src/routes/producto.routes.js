const { Router } = require('express');
const { 
    obtenerProductos,
    agregarProducto,
    editarProducto,
    eliminarProducto
} = require('../controllers/producto.controller');

const router = Router();

router.get('/obtenerProductos', obtenerProductos);

router.post('/agregarProducto', agregarProducto);

router.put('/editarProducto', editarProducto);

router.delete('/eliminarProducto', eliminarProducto);

module.exports = router;