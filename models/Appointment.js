import { DataTypes } from "sequelize";
import sequelize from "../config/Database.js";
import Owner from "./Owner.js";
import Pet from "./Pet.js";
import ConsultationResult from "./ConsultationResult.js";
import { application } from "express";

const Appointment = sequelize.define("appointment", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  petId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  appointmentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING,
  },
});

Appointment.hasOne(ConsultationResult);
ConsultationResult.belongsTo(Appointment);

export default Appointment;
