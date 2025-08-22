const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staff.controller");

// Inventory Items
router.get("/find-all", staffController.findAllStaff);
router.get("/find-by-id/:id", staffController.findStaffById);
router.post("/create", staffController.createStaff);
router.put("/update/:id", staffController.updateStaff);
router.delete("/delete/:id", staffController.deleteStaff);

module.exports = router;
