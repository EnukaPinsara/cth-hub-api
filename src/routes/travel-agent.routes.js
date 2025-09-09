const express = require("express");
const router = express.Router();
const travelAgentController = require("../controllers/travel-agent.controller");

router.get("/find-all", travelAgentController.findAllTravelAgents);
router.get("/find-by-id/:id", travelAgentController.findTravelAgentById);
router.post("/create", travelAgentController.createTravelAgent);
router.post("/bulk-create", travelAgentController.createMultipleTravelAgents);
router.put("/update/:id", travelAgentController.updateTravelAgent);
router.delete("/delete/:id", travelAgentController.deleteTravelAgent);

module.exports = router;
