// const { Router } = require('express');
// const { Op } = require('sequelize')
// const { Dog, Temper } = require('../db')
// const axios = require('axios')
// const router = Router();



// router.get('/',  (req, res, next) => {
//     let name = req.query.name;
//     let dogApi 
//     let dogDB 
//     if (name) {
//         dogApi = axios.get('https://api.thedogapi.com/v1/breeds/search?q={raza_perro}')
//         dogDB = Dog.findAll({
//             include: Temper,
//             where: {
//                 name: {
//                     [Op.iLike]: '%' + name + '%'
//                 }
//             },
//             order: [
//                 ['name', 'ASC']
//             ]
//         })
//     } else {
//         dogApi = axios.get('https://api.thedogapi.com/v1/breeds')
//         dogDB = Dog.findAll({
//             include: Temper
//         })
//     }
//     // Promise.all([
//     //     dogApi, dogDB
//     // ])
//     // .then((respuesta) => {
//     //     const [dogApi, dogDB] = respuesta

//     //     let filteredDogApi = dogApi.data.results.map((dog) => {
//     //         return {
//     //             name: dog.name,
//     //             image: dog.image,
//     //             temperament: dog.temperament,
//     //             weight: dog.weight, 
//     //             height: dog.height,
//     //             years_life: dog.years_life
//     //         }
//     //     })
//     //     let allDogs = [...filteredDogApi, ...dogDB]
//     //     res.send(allDogs);
//     // })
//     // .catch(error => next(error))
// })

// router.post('/', async (req, res) => {
//     try {
//         const {id, name, temperament, weight, height, image} = req.body;
//         const newDog = await Dog.create({
//             id, 
//             name, 
//             temperament, 
//             weight, 
//             height,
//             image
//         })
//         res.send(newDog)
//     } catch(error){
//         res.status(404).send('Error')
//     }
// })

// router.get('/:id', async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         let dog 
//         if (typeof id === 'string' && id.length > 8) {
//             dog = await Dog.findByPk(id)
//         } else {
//             response = await axios.get('https://api.thedogapi.com/v1/breeds' + id)
//             dog = response.data
//         }
//         return res.send(dog)
//     } catch(error) {
//         next(error)
//     }
// })

// module.exports = router;
