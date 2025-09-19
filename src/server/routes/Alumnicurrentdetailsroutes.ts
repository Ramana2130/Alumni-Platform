import express from "express";
import { createAlumni, deleteAlumni, getAllAlumni, getAlumniById, updateAlumni } from "../models/Alumnicurrentdetails.js";


const router = express.Router();

// Create alumni detail
router.post("/add", async (req, res) => {
  try {
    const id = await createAlumni(req.body);
    res.status(201).json({ id, message: "Alumni detail created successfully" });
  } catch (err) {
    res.status(500).json({ error:  "Failed to create alumni detail" });
  }
});

// Get all alumni details
router.get("/getAll", async (req, res) => {
  try {
    const alumni = await getAllAlumni();
    res.status(200).json(alumni);
  } catch (err) {
    res.status(500).json({ error:  "Failed to get alumni details" });
  }
});

// Get alumni detail by ID
router.get("/getById/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid alumni ID" });
    const alumni = await getAlumniById(id);
    if (!alumni) return res.status(404).json({ error: "Alumni detail not found" });
    res.status(200).json(alumni);
  } catch (err) {
    res.status(500).json({ error:  "Failed to get alumni detail" });
  }
});

// Update alumni detail by ID
router.put("/updateById/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid alumni ID" });
    const affectedRows = await updateAlumni(id, req.body);
    if (affectedRows === 0) return res.status(404).json({ error: "Alumni detail not found or no changes" });
    res.status(200).json({ message: "Alumni detail updated successfully" });
  } catch (err) {
    res.status(500).json({ error:  "Failed to update alumni detail" });
  }
});

// Delete alumni detail by ID
router.delete("/deleteById/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid alumni ID" });
    const affectedRows = await deleteAlumni(id);
    if (affectedRows === 0) return res.status(404).json({ error: "Alumni detail not found" });
    res.status(200).json({ message: "Alumni detail deleted successfully" });
  } catch (err) {
    res.status(500).json({ error:  "Failed to delete alumni detail" });
  }
});

export default router;
