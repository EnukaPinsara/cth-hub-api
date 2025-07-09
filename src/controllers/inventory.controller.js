// const Inventory = require("../models/inventory.model");

// const createItem = async (req, res) => {
//   try {
//     const newItem = new Inventory(req.body);
//     await newItem.save();
//     res.status(201).json({ message: "Item created successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Error creating item", error: err });
//   }
// };

// const findAllItems = async (req, res) => {
//   try {
//     const items = await Inventory.find();
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ message: "Error retrieving items", error: err });
//   }
// };

// const findItemById = async (req, res) => {
//   try {
//     const item = await Inventory.findById(req.params.id);
//     if (!item) return res.status(404).json({ message: "Item not found" });
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ message: "Error finding item", error: err });
//   }
// };

// const updateItem = async (req, res) => {
//   try {
//     const updated = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json({ message: "Item updated", updated });
//   } catch (err) {
//     res.status(500).json({ message: "Error updating item", error: err });
//   }
// };

// const deleteItem = async (req, res) => {
//   try {
//     await Inventory.findByIdAndDelete(req.params.id);
//     res.status(204).json({ message: "Item deleted" });
//   } catch (err) {
//     res.status(500).json({ message: "Error deleting item", error: err });
//   }
// };

// module.exports = {
//   createItem,
//   findAllItems,
//   findItemById,
//   updateItem,
//   deleteItem,
// };
