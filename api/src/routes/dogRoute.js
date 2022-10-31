const {getAllDogs} = require('./toShowApi')
const { Dog, Temper } = require('../db')
const {API_KEY}= process.env
const axios = require('axios')
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const {name} = req.query;
    const allDogs = await getAllDogs();
    // console.log(name)
    if(name) {
        let dog = allDogs.filter((ele) => 
            name.toLowerCase().includes(ele.name.toLowerCase())
        )
       return dog.length
        ? res.status(201).send(dog)
        : res.status(404).send('Perro no encontrado')
    } else {
        return res.status(201).send(allDogs)
    }
    } catch (error) {
        res.status(404).send(`Error: ${error}`)
    }
})

router.get('/:idRaza', async (req,res) => {
    try {const {idRaza} = req.params;
    const allDogs = await getAllDogs();
    let dog = allDogs.filter((elem) => Number(elem.id) === Number(idRaza));
    dog
    ? res.status(201).send(dog)
    : res.status(404).send('Raza no encontrada')
    } catch (error) {
        res.status(404).send(`Error: ${error}`)
    }
})

router.post('/', async (req, res) => {
    try {
        const {name, min_height, max_height, min_weight, max_weight, years, temperaments, image} = req.body
        
        const heightArray = [];
        const minHeight = min_height;
        const maxHeight = max_height;
        heightArray.push(minHeight, maxHeight);

        const weightArray = [];
        const minWeight = min_weight;
        const maxWeight = max_weight;
        weightArray.push(minWeight, maxWeight);

        let perrito = await Dog.create({
            name,
            height: heightArray,
            weight: weightArray,
            years,
            image: image ? image : `https://i.pinimg.com/474x/30/d0/31/30d031cbb901cf4ca083555e10271ee5.jpg`
        })
        let concaTemp = await Temper.findAll({
            where: {name: temperaments}
        })
        perrito.addTemper(concaTemp);
        return res.status(201).send("Perrito creado con éxito")
    } catch (error) {
        res.status(404).send(`Error: ${error}`)
    }
})


router.post('/delete/:name', async (req, res) => {
    try {
        const {name} = req.params;
        const result = await Dog.destroy({
            where: {name:`${name}`}

        })
        res.status(201).send("Perro eliminado con éxito")
    }catch (error){
        res.status(404).send(`Error al eliminar: ${error}`)
    }
})



module.exports = router