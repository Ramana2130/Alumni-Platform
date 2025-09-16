import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import pool from "./config/db.js";
dotenv.config();

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

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
