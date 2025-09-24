import express from "express";
import {
  createAlumni,
  deleteAlumni,
  getAllAlumni,
  getAlumniById,
  getCurrentDetailsByAlumniId,
  updateAlumni,
} from "../models/Alumnicurrentdetails.js";
import pool from "../config/db.js";

const router = express.Router();

// Create alumni detail
router.post("/add", async (req, res) => {
  try {
    const id = await createAlumni(req.body);
    res.status(201).json({ id, message: "Alumni detail created successfully" });
  } catch (err) {
    console.error("❌ Error inserting alumni_current_details:", err);
    res.status(500).json({ error: "Failed to create alumni detail" });
  }
});

// Get all alumni details
router.get("/getAll", async (req, res) => {
  try {
    const alumni = await getAllAlumni();
    res.status(200).json(alumni);
  } catch (err) {
    res.status(500).json({ error: "Failed to get alumni details" });
  }
});

// Get alumni detail by ID
router.get("/getById/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid alumni ID" });
    const alumni = await getAlumniById(id);
    if (!alumni)
      return res.status(404).json({ error: "Alumni detail not found" });
    res.status(200).json(alumni);
  } catch (err) {
    res.status(500).json({ error: "Failed to get alumni detail" });
  }
});

// Update alumni detail by ID
router.put("/updateById/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid alumni ID" });
    const affectedRows = await updateAlumni(id, req.body);
    if (affectedRows === 0)
      return res
        .status(404)
        .json({ error: "Alumni detail not found or no changes" });
    res.status(200).json({ message: "Alumni detail updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update alumni detail" });
  }
});

// Delete alumni detail by ID
router.delete("/deleteById/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid alumni ID" });
    const affectedRows = await deleteAlumni(id);
    if (affectedRows === 0)
      return res.status(404).json({ error: "Alumni detail not found" });
    res.status(200).json({ message: "Alumni detail deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete alumni detail" });
  }
});

// Get current details by alumni_id
router.get("/getCurrentDetailsByAlumniId/:id", async (req, res) => {
  try {
    const alumniId = Number(req.params.id);
    if (isNaN(alumniId))
      return res.status(400).json({ error: "Invalid alumni ID" });
    const currentDetails = await getCurrentDetailsByAlumniId(alumniId);
    if (!currentDetails)
      return res.status(404).json({ error: "Current details not found" });
    res.status(200).json(currentDetails);
  } catch (err) {
    res.status(500).json({ error: "Failed to get current details" });
  }
});
export default router;

router.get("/counts", async (req, res) => {
  try {
    // Query all counts in parallel
    const [[eventsResult], [connectionsResult], [jobsResult], [fundResult]] =
      await Promise.all([
        pool.query("SELECT COUNT(*) AS totalEvents FROM events_posting"),
        pool.query("SELECT COUNT(*) AS totalConnections FROM alumni_details"),
        pool.query("SELECT COUNT(*) AS totalJobPostings FROM job_postings"),
        pool.query("SELECT COUNT(*) AS totalFundDonated FROM fund_requests"),
      ]);

    const eventsRows = eventsResult as any[];
    const connectionsRows = connectionsResult as any[];
    const jobsRows = jobsResult as any[];
    const fundRows = fundResult as any[];

    res.json({
      totalEvents: eventsRows[0]?.totalEvents ?? 0,
      totalConnections: connectionsRows[0]?.totalConnections ?? 0,
      totalJobPostings: jobsRows[0]?.totalJobPostings ?? 0,
      totalFundDonated: fundRows[0]?.totalFundDonated ?? 0,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dashboard counts" });
    console.log("failed count: ", err);
  }
});
