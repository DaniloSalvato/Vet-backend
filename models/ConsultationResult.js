import { DataTypes } from "sequelize";
import sequelize from "../config/Database.js";
import Appointment from "./Appointment.js";

const ConsultationResult = sequelize.define("ConsultationResult", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  appointmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  diagnosis: {
    type: DataTypes.STRING,
  },
  treatment: {
    type: DataTypes.STRING,
  },
  medications: {
    type: DataTypes.TEXT,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default ConsultationResult;
