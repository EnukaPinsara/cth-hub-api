const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory.controller");

router.get("/find-all", inventoryController.findAllItems);
router.get("/find-by-id/:id", inventoryController.findItemById);
router.post("/create", inventoryController.createItem);
router.put("/update/:id", inventoryController.updateItem);
router.delete("/delete/:id", inventoryController.deleteItem);

module.exports = router;
