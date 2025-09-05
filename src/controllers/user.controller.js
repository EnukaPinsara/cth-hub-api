const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const SALT_ROUNDS = 10;

// ---------------- CREATE USER ----------------
const createUser = async (req, res) => {
  try {
    const { staff, username, password, role } = req.body;

    if (!staff || !username || !password || !role) {
      return res.status(400).json({ message: "All fields (staff, username, password, role) are required." });
    }

    // Check if this staff already has a user account
    const staffExists = await User.findOne({ staff });
    if (staffExists) {
      return res.status(400).json({ message: "An account is already created for this member." });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists. Choose a different username." });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    let newUser = new User({
      staff,
      username,
      password: hashedPassword,
      role,
      isActive: true,
    });

    await newUser.save();

    // Populate staff + role for response
    newUser = await User.findById(newUser._id)
      .populate("staff", "staffId firstName lastName email")
      .populate("role", "name permissions");

    res.status(201).json({ message: "User created successfully", data: newUser });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Failed to create user", error: err.message });
  }
};

// ---------------- GET ALL USERS ----------------
const findAllUsers = async (_req, res) => {
  try {
    const users = await User.find()
      .populate("staff", "staffId firstName lastName email profileImageUrl")
      .populate("role", "name permissions")
      .sort({ createdAt: -1 });

    res.status(200).json({ message: "Users retrieved successfully", data: users });
  } catch (err) {
    console.error("Error retrieving users:", err);
    res.status(500).json({ message: "Failed to retrieve users", error: err.message });
  }
};

// ---------------- GET USER BY ID ----------------
const findUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("staff", "staffId firstName lastName email profileImageUrl")
      .populate("role", "name permissions");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User retrieved successfully", data: user });
  } catch (err) {
    console.error("Error finding user:", err);
    res.status(500).json({ message: "Failed to find user", error: err.message });
  }
};

// ---------------- UPDATE USER ----------------
const updateUser = async (req, res) => {
  try {
    const { username, password, role, isActive } = req.body;

    const updateData = {};

    if (username) updateData.username = username;
    if (password) updateData.password = await bcrypt.hash(password, SALT_ROUNDS);
    if (role) updateData.role = role;
    if (typeof isActive === "boolean") updateData.isActive = isActive;

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, { new: true })
      .populate("staff", "staffId firstName lastName email profileImageUrl")
      .populate("role", "name permissions");

    if (!updatedUser) return res.status(404).json({ message: "User not found for update" });

    res.status(200).json({ message: "User updated successfully", data: updatedUser });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Failed to update user", error: err.message });
  }
};

// ---------------- DELETE USER ----------------
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) return res.status(404).json({ message: "User not found for deletion" });

    res.status(200).json({ message: "User deleted successfully", data: deletedUser });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Failed to delete user", error: err.message });
  }
};

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
};
