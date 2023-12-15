import mongoose from "mongoose";

const { Schema } = mongoose;

const ownerSchema = new Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
}, { versionKey: false });

const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;
