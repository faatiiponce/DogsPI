const { Router } = require('express');
const axios = require('axios')
const { Temper } = require('../db')


const router = Router();

router.get('/', (req, res, next) => {
    return Temper.findAll()
    .then((Temper) => {
        res.send(Temper)
    })
    .catch((error) => {
        next(error)
    })
})

module.exports = router;