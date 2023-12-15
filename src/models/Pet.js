import mongoose from "mongoose";

const { Schema } = mongoose;

const petSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    species: {
      type: String,
      enum: ["dog", "cat", "bird", "rodent", "other"],
      required: [true, "Species is required"],
    },
    age: { type: Number, min: 0, default: 0 },
  },
  { versionKey: false }
);

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
