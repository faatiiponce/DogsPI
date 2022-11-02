//const { Router } = require('express');
const { API_KEY } = process.env;
const { Dog, Temper } = require("../db");
const axios = require("axios");
const express = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const router = Router();

const urlDogs = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
const getDoguesito = async () => {
  const dogData = await axios.get(urlDogs);

  const dogInfo = await dogData.data.map((elem) => {
    let temperamentArray = [];
    if (elem.temperament) {
      temperamentArray = elem.temperament.split(", ");
    }

    let heightArray = [];
    if (elem.height) {
      heightArray = elem.height.metric.split(" - ");
    }

    let weightArray = [];
    if (elem.weight) {
      weightArray = elem.weight.metric.split(" - ");
    }
    return {
      id: elem.id,
      name: elem.name,
      height: heightArray,
      weight: weightArray,
      years: elem.life_span,
      temperaments: temperamentArray,
      image: elem.image.url,
    };
  });
  return dogInfo;
};

const getDogTemperDB = async () => {
  return await Dog.findAll({
    include: {
      model: Temper,
      attributes: ["name"],
      trough: {
        attributes: [],
      },
    },
  });
};

const getAllDogs = async () => {
  const infoApi = await getDoguesito();
  const infoDB = await getDogTemperDB();
  const infoDBApi = [...infoApi, ...infoDB];
  return infoDBApi;
};

module.exports = { getAllDogs };
