const Staff = require("../models/staff.model");
const User = require("../models/user.model");

// ---------------- CREATE STAFF ----------------
const createStaff = async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    await newStaff.save();
    res.status(201).json({ message: "Staff created successfully", data: newStaff });
  } catch (err) {
    res.status(500).json({ message: "Error creating staff", error: err.message });
  }
};

// ---------------- GET ALL STAFF ----------------
const findAllStaff = async (_req, res) => {
  try {
    const staffList = await Staff.find().sort({ createdAt: -1 });
    res.status(200).json(staffList);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving staff", error: err.message });
  }
};

// ---------------- GET STAFF BY ID ----------------
const findStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ message: "Staff not found" });
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json({ message: "Error finding staff", error: err.message });
  }
};

// ---------------- UPDATE STAFF ----------------
const updateStaff = async (req, res) => {
  try {
    const updated = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Staff not found for update" });
    res.status(200).json({ message: "Staff updated", data: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating staff", error: err.message });
  }
};

// ---------------- DELETE STAFF ----------------
const deleteStaff = async (req, res) => {
  try {
    const deleted = await Staff.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Staff not found to delete" });
    res.status(204).json({ message: "Staff deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting staff", error: err.message });
  }
};

module.exports = {
  createStaff,
  findAllStaff,
  findStaffById,
  updateStaff,
  deleteStaff,
};
