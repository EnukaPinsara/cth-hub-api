const Inventory = require("../models/inventory.model");
const ItemCategory = require("../models/inventory-category.model");

// ********** INVENTORY ITEMS **********

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

// ********** ITEM CATEGORIES **********

// Create new item category
const createCategory = async (req, res) => {
  try {
    const newCategoryItem = new ItemCategory(req.body);
    await newCategoryItem.save();
    res.status(201).json({ message: "Category created successfully", data: newCategoryItem });
  } catch (err) {
    res.status(500).json({ message: "Error creating catgeory", error: err.message });
  }
};

// Get all item categories
const findAllCategories = async (_req, res) => {
  try {
    const categories = await ItemCategory.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving categories", error: err.message });
  }
};

// Get single category by ID
const findCategoryById = async (req, res) => {
  try {
    const category = await ItemCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: "Error finding category", error: err.message });
  }
};

// Update category by ID
const updateCategory = async (req, res) => {
  try {
    const updated = await ItemCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Category not found for update" });
    res.status(200).json({ message: "Category updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating category", error: err.message });
  }
};

// Delete category by ID
const deleteCategory = async (req, res) => {
  try {
    const deleted = await ItemCategory.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Category not found to delete" });
    res.status(204).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting category", error: err.message });
  }
};

module.exports = {
  createItem,
  findAllItems,
  findItemById,
  updateItem,
  deleteItem,
  createCategory,
  findAllCategories,
  findCategoryById,
  updateCategory,
  deleteCategory,
};
