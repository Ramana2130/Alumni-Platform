import express from "express";
import { loginUser, registerUser } from "../models/authschema.js";
import { blacklistedTokens } from "../models/blacklist.js";
import bcrypt from "bcryptjs";
import pool from "../config/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

router.post("/register", async (req, res) => {
  try {
    const { email, registerNumber, role } = req.body;

    if (!email || !registerNumber || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await registerUser(email, registerNumber, role);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res
      .status(400)
      .json({
        error: err instanceof Error ? err.message : "Registration failed",
      });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const { token, user } = await loginUser(email, password);
    res.json({ token, user });
  } catch (err) {
    res
      .status(401)
      .json({ error: err instanceof Error ? err.message : "Login failed" });
  }
});

router.post("/logout", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(400).json({ error: "No token provided" });
  }

  blacklistedTokens.push(token); // save to blacklist
  res.json({ message: "Logged out successfully" });
});

router.get("/me", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token" });

  const token = authHeader.split(" ")[1];
  if (blacklistedTokens.includes(token)) {
    return res.status(401).json({ error: "Token expired or logged out" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
    const [rows] = (await pool.query(
      "SELECT id, email, password, role FROM users WHERE id = ?",
      [decoded.id]
    )) as [any[], any];
    const user = rows[0];
    if (!user) return res.status(404).json({ error: "User not found" });

    const { password, ...userData } = user;
    res.json(userData);
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});
export default router;
