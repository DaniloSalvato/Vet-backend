import express from "express";
import AppointmentController from "../controllers/AppointmentController.js";

const router = express.Router();

router.get("/appointments", AppointmentController.getAllAppointments);
router.get("/appointments/:id", AppointmentController.getAppointmentById);
router.post("/appointments", AppointmentController.createAppointment);
router.put("/appointments/:id", AppointmentController.updateAppointment);
router.delete("/appointments/:id", AppointmentController.deleteAppointment);

export default router;
