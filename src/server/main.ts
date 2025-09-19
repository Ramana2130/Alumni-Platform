import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import pool from "./config/db.js";
dotenv.config();
import jobRoutes from "./routes/Jobpostingroutes.js";
import eventRoutes from "./routes/Eventpostingroutes.js";
import currentalumnidetailsRoutes from "./routes/Alumnicurrentdetailsroutes.js"

const app = express();
app.use(express.json());

(async () => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    console.log("✅ Database connected successfully:", rows);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
})();

app.use("/api", jobRoutes);
app.use("/api", eventRoutes);
app.use("/api", currentalumnidetailsRoutes);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
