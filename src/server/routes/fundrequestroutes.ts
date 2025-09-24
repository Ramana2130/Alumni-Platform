import express from "express";
import {
  createFundRequest,
  deleteFundRequest,
  getAllFundRequests,
  getFundRequestById,
  updateFundRequestStatus,
} from "../models/fundrequestschema.js";

const router = express.Router();

// Student → Create fund request
router.post("/add", async (req, res) => {
  try {
    const id = await createFundRequest(req.body);
    res
      .status(201)
      .json({ id, message: "Fund request submitted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({
        error:
          err instanceof Error ? err.message : "Error creating fund request",
      });
  }
});

// University/Admin → Get all fund requests
router.get("/getAll", async (_req, res) => {
  try {
    const requests = await getAllFundRequests();
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ error: "Error fetching fund requests" });
  }
});

// Get request by ID
router.get("/getById/:id", async (req, res) => {
  try {
    const requestId = Number(req.params.id);
    if (isNaN(requestId))
      return res.status(400).json({ error: "Invalid request ID" });

    const request = await getFundRequestById(requestId);
    if (!request)
      return res.status(404).json({ error: "Fund request not found" });

    res.status(200).json(request);
  } catch {
    res.status(500).json({ error: "Error fetching fund request by ID" });
  }
});

// University → Update status (approve/reject)
router.put("/updateStatus/:id", async (req, res) => {
  try {
    const requestId = Number(req.params.id);
    const { status } = req.body;
    if (isNaN(requestId))
      return res.status(400).json({ error: "Invalid request ID" });

    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const affectedRows = await updateFundRequestStatus(requestId, status);
    if (affectedRows === 0)
      return res.status(404).json({ error: "Fund request not found" });

    res.status(200).json({ message: `Fund request ${status} successfully` });
  } catch (err) {
    res.status(500).json({ error: "Error updating fund request status" });
  }
});

// Delete request
router.delete("/deleteById/:id", async (req, res) => {
  try {
    const requestId = Number(req.params.id);
    if (isNaN(requestId))
      return res.status(400).json({ error: "Invalid request ID" });

    const affectedRows = await deleteFundRequest(requestId);
    if (affectedRows === 0)
      return res.status(404).json({ error: "Fund request not found" });

    res.status(200).json({ message: "Fund request deleted successfully" });
  } catch {
    res.status(500).json({ error: "Error deleting fund request" });
  }
});

export default router;
