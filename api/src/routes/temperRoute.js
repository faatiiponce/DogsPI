const { getAllDogs } = require("./toShowApi");
const { Dog, Temper } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");
const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const temperInfo = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );

    const dogInfo = temperInfo.data.map((elem) => {
      let temperamentArray = [];
      if (elem.temperament) {
        temperamentArray = elem.temperament.toString().split(",");
      }

      temperamentArray.forEach((elem) => {
        let elemTemper = elem.trim();
        Temper.findOrCreate({
          where: { name: elemTemper },
        });
      });
    });

    const allTemper = await Temper.findAll();
    res.status(201).send(allTemper);
  } catch (error) {
    res.status(404).send(`Error: ${error}`);
  }
});

module.exports = router;
