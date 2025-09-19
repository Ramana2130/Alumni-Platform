import express from "express";
import { createAlumni, deleteAlumni, getAllAlumni, getAlumniById, updateAlumni } from "../models/Alumnidetails.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const id = await createAlumni(req.body);
    res.status(201).json({ id, message: "Alumni details created successfully" });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "An unknown error occurred" });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const alumni = await getAllAlumni();
    res.status(200).json(alumni);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Error fetching alumni details" });
  }
});

router.get("/getById/:id", async (req, res) => {
  try {
    const alumniId = Number(req.params.id);
    if (isNaN(alumniId)) return res.status(400).json({ error: "Invalid alumni ID" });

    const alumni = await getAlumniById(alumniId);
    if (!alumni) return res.status(404).json({ error: "Alumni not found" });

    res.status(200).json(alumni);
  } catch {
    res.status(500).json({ error: "Error fetching alumni by ID" });
  }
});

router.put("/updateById/:id", async (req, res) => {
  try {
    const alumniId = Number(req.params.id);
    if (isNaN(alumniId)) return res.status(400).json({ error: "Invalid alumni ID" });

    const affectedRows = await updateAlumni(alumniId, req.body);
    if (affectedRows === 0) return res.status(404).json({ error: "Alumni not found or no changes" });

    res.status(200).json({ message: "Alumni details updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Error updating alumni details" });
  }
});

router.delete("/deleteById/:id", async (req, res) => {
  try {
    const alumniId = Number(req.params.id);
    if (isNaN(alumniId)) return res.status(400).json({ error: "Invalid alumni ID" });

    const affectedRows = await deleteAlumni(alumniId);
    if (affectedRows === 0) return res.status(404).json({ error: "Alumni not found" });

    res.status(200).json({ message: "Alumni details deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Error deleting alumni details" });
  }
});

export default router;
