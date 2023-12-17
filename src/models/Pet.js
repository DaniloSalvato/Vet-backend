import mongoose from "mongoose";
import { AppointmentSchema } from "./Appointment.js";

const { Schema, model } = mongoose;

const petSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    species: {
      type: String,
      enum: ["dog", "cat", "bird", "rodent", "other"],
      required: [true, "Species is required"],
    },
    age: { type: Number, min: 0, default: 0 },
    appointment: [{ type: AppointmentSchema }],
  },
  { versionKey: false }
);

const Pet = model("Pet", petSchema);

export { Pet, petSchema };
