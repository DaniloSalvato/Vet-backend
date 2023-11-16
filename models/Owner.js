import { DataTypes } from "sequelize";
import sequelize from "../config/Database.js";
import Pet from "./Pet.js";

const Owner = sequelize.define("owner", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

Owner.hasMany(Pet);
Pet.belongsTo(Owner);

export default Owner;
