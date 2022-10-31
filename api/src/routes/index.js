const { Router } = require('express');
const dogRouter = require('./dogRoute');
const temperRouter = require('./temperRoute');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.use('/dogs', dogRouter)
router.use('/temperaments', temperRouter)



module.exports = router;

