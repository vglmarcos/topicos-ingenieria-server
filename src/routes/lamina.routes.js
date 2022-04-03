const { Router } = require('express');
const { 
    obtenerLaminas,
    agregarLamina,
    editarLamina,
    eliminarLamina
} = require('../controllers/lamina.controller');

const router = Router();

router.get('/obtenerLaminas', obtenerLaminas);

router.post('/agregarLamina', agregarLamina);

router.put('/editarLamina', editarLamina);

router.delete('/eliminarLamina', eliminarLamina);

module.exports = router;