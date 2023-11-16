import express from "express";
import Pet from "./PetRoutes.js";
import Owner from "./OwnerRoutes.js";
import Appointment from "./AppointmentRoutes.js";
import ConsultationResult from "./ConsultationResultRoutes.js";

const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send({ Title: "API - Vet" }));

  app.use(express.json(), Pet, Owner, Appointment, ConsultationResult);
};

export default routes;
