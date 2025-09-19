import express from "express";
import { loginUser, registerUser } from "../models/authschema.js";
import { blacklistedTokens } from "../models/blacklist.js";
import bcrypt from "bcryptjs";
import pool from "../config/db.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const {  email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await registerUser( email, password, role);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : "Registration failed" });
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
    res.status(401).json({ error: err instanceof Error ? err.message : "Login failed" });
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
export default router;
