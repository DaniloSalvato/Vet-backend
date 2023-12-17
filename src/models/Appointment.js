import mongoose from "mongoose";
import { DiagnosisSchema } from "./Diagnosis.js";

const { Schema, model } = mongoose;

const AppointmentSchema = new Schema(
  {
    appointmentDate: { type: Date, required: true },
    reason: { type: String, required: true },
    diagnosis: [{ type: DiagnosisSchema }],
  },
  { versionKey: false }
);

const Appointment = model("Appointment", AppointmentSchema);

export { Appointment, AppointmentSchema };
