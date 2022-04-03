const { Router } = require('express');

const router = Router();

router.use('/usuario', require('./usuario.routes'));
router.use('/cliente', require('./cliente.routes'));
router.use('/producto', require('./producto.routes'));
router.use('/cotizacion', require('./cotizacion.routes'));
router.use('/venta', require('./venta.routes'));
router.use('/reporte', require('./reporte.routes'));
router.use('/factura', require('./factura.routes'));
router.use('/proveedor', require('./proveedor.routes'));
router.use('/lamina', require('./lamina.routes'));

module.exports = router;