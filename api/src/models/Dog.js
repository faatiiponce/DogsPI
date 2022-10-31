const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    weight: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    years: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING(500),
    }
  });
};


// - ID *
// - Nombre *
// - Altura *
// - Peso *
// - Años de vida