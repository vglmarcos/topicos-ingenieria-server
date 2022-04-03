const { Router } = require('express');
const { 
    obtenerUsuarios,
    agregarUsuario,
    editarUsuario,
    eliminarUsuario
} = require('../controllers/usuario.controller');

const router = Router();

router.get('/obtenerUsuarios', obtenerUsuarios);

router.post('/agregarUsuario', agregarUsuario);

router.put('/editarUsuario', editarUsuario);

router.delete('/eliminarUsuario', eliminarUsuario);

module.exports = router;