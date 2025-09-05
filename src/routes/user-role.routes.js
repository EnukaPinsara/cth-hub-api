const express = require("express");
const router = express.Router();
const userRoleController = require("../controllers/user-role.controller");

router.post("/create", userRoleController.createRole);
router.get("/find-all", userRoleController.findAllRoles);
router.get("/find-by-id/:id", userRoleController.findRoleById);
router.put("/update/:id", userRoleController.updateRole);
router.delete("/delete/:id", userRoleController.deleteRole);

module.exports = router;
