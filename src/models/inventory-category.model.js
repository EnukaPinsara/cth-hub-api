const mongoose = require("mongoose");

const inventoryCategorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    note: { type: String, trim: true },
    imageUrl: { type: String },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Inventory-Category", inventoryCategorySchema);
