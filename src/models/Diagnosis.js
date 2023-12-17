import mongoose from "mongoose";

const { Schema, model } = mongoose;

const DiagnosisSchema = new Schema(
  {
    appointmentId: { type: String, required: true },
    diagnosis: { type: String, required: true },
    treatment: { type: String, required: true },
    medications: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Diagnosis = model("Diagnosis", DiagnosisSchema);

export { Diagnosis, DiagnosisSchema };
