const { Dog } = require("../db");
const axios = require("axios");

module.exports = {
  dogApi: async () => {
    try {
      dogApi = await axios.get("https://api.thedogapi.com/v1/breeds");
      const urlDogInfo = dogApi.data.map(dog => {
        return {
                id: dog.id,
                name: dog.name,
                image: dog.image,
                temperament: dog.temperament,
                weight: dog.weight.toString(), 
                height: dog.height.toString(),
                years_life: dog.years_life
        }
      })
      urlDogInfo.forEach(async (element) => {
        await Dog.create(element);
      });
    } catch (error) {
        console.log(error)
    }
  },
};
