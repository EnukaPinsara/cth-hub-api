const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
    },
    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },
    purchaseDate: {
      type: Date,
    },
    warrantyExpiryDate: {
      type: Date,
    },
    assignedTo: {
      type: String,
    },
    assignedDate: {
      type: Date,
    },
    status: {
      type: String,
      required: true,
      default: "Available",
    },
    note: { type: String, trim: true },
    imageUrl: { type: String },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Inventory", inventorySchema);
