import { DataTypes } from "sequelize";
import sequelize from "../config/Database.js";

const Pet = sequelize.define("Pet", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Pet;
