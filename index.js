const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("./src/config/db");
const logger = require("./src/config/logger");

const inventoryRoutes = require("./src/routes/inventory.routes"); // ✅ Uncomment this

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 👇 Make sure this uses process.env.API_URL
app.use(`/${process.env.API_URL}/inventory`, inventoryRoutes);

app.get("/", (req, res) => res.send("CTH Hub API Running..."));

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    logger.info(`🚀 Server running on http://localhost:${PORT}`);
  });
});
