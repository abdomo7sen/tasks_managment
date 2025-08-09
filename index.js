import express, { json } from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";
import { default as sequelize } from "./config/database.js";
import { globalError } from "./src/middleware/globalError.js";

const app = express();
require("dotenv").config();

app.use(cors());
app.use(json());
app.use(globalError);
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Sync Database and Start Server
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
