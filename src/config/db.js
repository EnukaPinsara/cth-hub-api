const mongoose = require("mongoose");
const logger = require("./logger");

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    logger.error("❌ MONGODB_URI not set in environment variables");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    logger.info("✅ Connected to MongoDB successfully");
  } catch (error) {
    logger.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
