const TravelAgent = require("../models/travel-agent.model");

// Create single travel agent record
const createTravelAgent = async (req, res) => {
  try {
    const newTravelAgent = new TravelAgent(req.body);
    await newTravelAgent.save();
    res.status(201).json({ message: "Record created successfully", data: newTravelAgent });
  } catch (err) {
    res.status(500).json({ message: "Error creating record", error: err.message });
  }
};

// Create bulk travel agent records
const createMultipleTravelAgents = async (req, res) => {
  try {
    const travelAgents = req.body;

    if (!Array.isArray(travelAgents)) {
      return res.status(400).json({ message: "Invalid data format. Expected an array." });
    }

    const failedRecords = [];
    const newRecords = [];

    for (const agent of travelAgents) {
      const exists = await TravelAgent.findOne({
        $or: [
          { name: agent.name },
          { registrationNumber: agent.registrationNumber },
          { email: agent.email },
          { phone: agent.phone },
        ],
      });

      if (exists) {
        failedRecords.push(agent);
      } else {
        newRecords.push(agent);
      }
    }

    let createdAgents = [];
    if (newRecords.length > 0) {
      createdAgents = await TravelAgent.insertMany(newRecords);
    }

    res.status(201).json({
      message: "Bulk upload completed",
      successCount: createdAgents.length,
      failedRecords,
      createdRecords: createdAgents,
    });
  } catch (err) {
    console.error("Bulk create error:", err);
    res.status(500).json({ message: "Error creating records", error: err.message });
  }
};

// Get all travel agents
const findAllTravelAgents = async (_req, res) => {
  try {
    const travelAgents = await TravelAgent.find().sort({ createdAt: -1 });
    res.status(200).json(travelAgents);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving record", error: err.message });
  }
};

// Get travel agent by ID
const findTravelAgentById = async (req, res) => {
  try {
    const travelAgent = await TravelAgent.findById(req.params.id);
    if (!travelAgent) return res.status(404).json({ message: "Record not found" });
    res.status(200).json(travelAgent);
  } catch (err) {
    res.status(500).json({ message: "Error finding record", error: err.message });
  }
};

// Update travel agent by ID
const updateTravelAgent = async (req, res) => {
  try {
    const updated = await TravelAgent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Record not found for update" });
    res.status(200).json({ message: "Record updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating record", error: err.message });
  }
};

// Delete travel agent by ID
const deleteTravelAgent = async (req, res) => {
  try {
    const deleted = await TravelAgent.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Record not found to delete" });
    res.status(204).json({ message: "Record deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting record", error: err.message });
  }
};

module.exports = {
  createTravelAgent,
  createMultipleTravelAgents,
  findAllTravelAgents,
  findTravelAgentById,
  updateTravelAgent,
  deleteTravelAgent,
};
