const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("./src/config/db");
const logger = require("./src/config/logger");

const inventoryRoutes = require("./src/routes/inventory.routes");
const staffRoutes = require("./src/routes/staff.routes");
const userRoutes = require("./src/routes/user.routes");
const userRoleRoutes = require("./src/routes/user-role.routes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(`/${process.env.API_URL}/inventory`, inventoryRoutes);
app.use(`/${process.env.API_URL}/staff`, staffRoutes);
app.use(`/${process.env.API_URL}/users`, userRoutes);
app.use(`/${process.env.API_URL}/user-roles`, userRoleRoutes);

app.get("/", (req, res) => res.send("CTH Hub API Running..."));

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    logger.info(`🚀 Server running on http://localhost:${PORT}`);
  });
});
