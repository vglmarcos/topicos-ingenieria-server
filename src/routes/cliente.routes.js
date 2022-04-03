const { Router } = require('express');
const { 
    obtenerClientes, 
    agregarCliente,
    editarCliente,
    eliminarCliente
} = require('../controllers/cliente.controller');

const router = Router();

router.get('/obtenerClientes', obtenerClientes);

router.post('/agregarCliente', agregarCliente);

router.put('/editarCliente', editarCliente);

router.delete('/eliminarCliente', eliminarCliente);

module.exports = router;