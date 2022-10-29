const { Router } = require('express');
const dogRoute = require('./dog')
const temperRoute = require('./temper')
const { dogApi }= require('./dogapi')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/dogs', dogRoute)
// router.use('//temperaments', temperRoute)


dogApi()
module.exports = router;
