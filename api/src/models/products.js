import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true, unique: true },
  stock: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  category: {
    type: String,
    enum: ["Home", "Technology", "Clothes", "Cleanliness", "Groceries", "Other"],
    message: "{value} is not supported",
    default: "Other",
  },
  description: {
    type: String,
    required: true,
    maxlength: 100,
    message: "Must be a maximum of 100 characters",
  },
});

export default model("Product", ProductSchema);
