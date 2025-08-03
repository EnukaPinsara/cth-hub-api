const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory.controller");

// Inventory Items
router.get("/find-all", inventoryController.findAllItems);
router.get("/find-by-id/:id", inventoryController.findItemById);
router.post("/create", inventoryController.createItem);
router.put("/update/:id", inventoryController.updateItem);
router.delete("/delete/:id", inventoryController.deleteItem);

// Inventory Item Categories
router.get("/find-all-categories", inventoryController.findAllCategories);
router.get("/find-category-by-id/:id", inventoryController.findCategoryById);
router.post("/create-category", inventoryController.createCategory);
router.put("/update-category/:id", inventoryController.updateCategory);
router.delete("/delete-category/:id", inventoryController.deleteCategory);

module.exports = router;
