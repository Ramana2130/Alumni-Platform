import express from "express";
import { createJobPosting, deleteJobPosting, getAllJobPostings, getJobPostingById, updateJobPosting } from "../models/JobpostingSchema.js";


const router = express.Router();

router.post("/addjob", async (req, res) => {
  try {
    const id = await createJobPosting(req.body);
    res.status(201).json({ id, message: "Job posting created successfully" });
  } catch (err) {
    if (err instanceof Error) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
});

// Get all job postings
router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await getAllJobPostings();
    res.status(200).json(jobs);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Error in getall jobs routes" });
    }
  }
});

// Get a job posting by ID
router.get("/getjob/:id", async (req, res) => {
  try {
    const jobId = Number(req.params.id);
    if (isNaN(jobId)) return res.status(400).json({ error: "Invalid job ID" });
    const job = await getJobPostingById(jobId);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: "Error in get job by ID route" });
  }
});


// Update a job posting by ID
router.put("/updatejob/:id", async (req, res) => {
  try {
    const jobId = Number(req.params.id);
    if (isNaN(jobId)) return res.status(400).json({ error: "Invalid job ID" });

    const affectedRows = await updateJobPosting(jobId, req.body);
    if (affectedRows === 0) return res.status(404).json({ error: "Job not found or no changes" });

    res.status(200).json({ message: "Job posting updated successfully" });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Error in update job route" });
    }
  }
});

// Delete a job posting by ID
router.delete("/deletejob/:id", async (req, res) => {
  try {
    const jobId = Number(req.params.id);
    if (isNaN(jobId)) return res.status(400).json({ error: "Invalid job ID" });

    const affectedRows = await deleteJobPosting(jobId);
    if (affectedRows === 0) return res.status(404).json({ error: "Job not found" });

    res.status(200).json({ message: "Job posting deleted successfully" });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Error in delete job route" });
    }
  }
});


export default router;