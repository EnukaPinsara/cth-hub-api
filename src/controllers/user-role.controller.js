const Role = require("../models/user-role.model");

// ---------------- CREATE USER ROLE ----------------
const createRole = async (req, res) => {
  try {
    const newRole = new Role(req.body);
    await newRole.save();
    res.status(201).json({ message: "User role created successfully", data: newRole });
  } catch (err) {
    res.status(500).json({ message: "Error creating role", error: err.message });
  }
};

// ---------------- GET ALL USER ROLES ----------------
const findAllRoles = async (_req, res) => {
  try {
    const roles = await Role.find().sort({ createdAt: -1 });
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user roles", error: err.message });
  }
};

// ---------------- GET USER ROLE BY ID ----------------
const findRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: "User role not found" });
    res.status(200).json(role);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user role", error: err.message });
  }
};

// ---------------- UPDATE USER ROLE ----------------
const updateRole = async (req, res) => {
  try {
    const updatedRole = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRole) return res.status(404).json({ message: "User role not found for update" });
    res.status(200).json({ message: "User role updated successfully", data: updatedRole });
  } catch (err) {
    res.status(500).json({ message: "Error updating user role", error: err.message });
  }
};

// ---------------- DELETE USER ROLE ----------------
const deleteRole = async (req, res) => {
  try {
    const deletedRole = await Role.findByIdAndDelete(req.params.id);
    if (!deletedRole) return res.status(404).json({ message: "User role not found for deletion" });
    res.status(200).json({ message: "User role deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user role", error: err.message });
  }
};

module.exports = {
  createRole,
  findAllRoles,
  findRoleById,
  updateRole,
  deleteRole,
};
