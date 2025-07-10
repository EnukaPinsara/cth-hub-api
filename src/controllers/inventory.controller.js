const Inventory = require("../models/inventory.model");

// Create new inventory item
const createItem = async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.status(201).json({ message: "Item created successfully", data: newItem });
  } catch (err) {
    res.status(500).json({ message: "Error creating item", error: err.message });
  }
};

// Get all inventory items
const findAllItems = async (_req, res) => {
  try {
    const items = await Inventory.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving items", error: err.message });
  }
};

// Get single item by ID
const findItemById = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: "Error finding item", error: err.message });
  }
};

// Update item by ID
const updateItem = async (req, res) => {
  try {
    const updated = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Item not found for update" });
    res.status(200).json({ message: "Item updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating item", error: err.message });
  }
};

// Delete item by ID
const deleteItem = async (req, res) => {
  try {
    const deleted = await Inventory.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Item not found to delete" });
    res.status(204).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting item", error: err.message });
  }
};

module.exports = {
  createItem,
  findAllItems,
  findItemById,
  updateItem,
  deleteItem,
};
