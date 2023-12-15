import mongoose from "mongoose";

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  ownerId: { type: Number, required: true }, 
  petId: { type: Number, required: true }, 
  appointmentDate: { type: Date, required: true }, 
  reason: { type: String, required: true }, 
}, { versionKey: false });

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
