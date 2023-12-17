import mongoose from "mongoose";
import { petSchema } from "./Pet.js";

const { Schema, model } = mongoose;

const ownerSchema = new Schema(
  {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    pets: [{ type: petSchema }]
  },
  { versionKey: false }
);

const Owner = model("Owner", ownerSchema);

export default Owner;
