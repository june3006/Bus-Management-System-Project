import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { sequelize } from "./models/index.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import { busInfoRoutes } from "./routes/busInfoRoutes.js";
import { passengerRoutes } from "./routes/passengerRoutes.js";
import { paymentRoutes } from "./routes/paymentRoutes.js";
import routeInfoRoutes from "./routes/routeInfoRoutes.js";
import schedulesRoutes from "./routes/schedulesRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config(); // Ensure this is called before accessing any env variables

// Apply middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "frontend/build")));

// Setup routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/businfo", busInfoRoutes);
app.use("/api/passengers", passengerRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/routeinfo", routeInfoRoutes);
app.use("/api/schedules", schedulesRoutes);
app.use("/api/users", userRoutes);

// Serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

// Sync database and start server
sequelize
  .authenticate()
  .then(() => {
    console.log("Database synchronized");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database synchronization error:", err);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
