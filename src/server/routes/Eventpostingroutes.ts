import express from "express";
import { createEvent, deleteEvent, getAllEvents, getEventById, updateEvent } from "../models/Eventpostingschema.js";

const router = express.Router();

// Create event
router.post("/addevent", async (req, res) => {
  try {
    const id = await createEvent(req.body);
    res.status(201).json({ id, message: "Event created successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to create event", err });
  }
});

// Get all events
router.get("/getallevent", async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error:  "Failed to get events" });
  }
});

// Get event by ID
router.get("/getevent/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid event ID" });
    const event = await getEventById(id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error:  "Failed to get event" });
  }
});

// Update event by ID
router.put("/getevent/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid event ID" });
    const affectedRows = await updateEvent(id, req.body);
    if (affectedRows === 0) return res.status(404).json({ error: "Event not found or no changes" });
    res.status(200).json({ message: "Event updated successfully" });
  } catch (err) {
    res.status(500).json({ error:  "Failed to update event" });
  }
});

// Delete event by ID
router.delete("/deleteevent/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "Invalid event ID" });
    const affectedRows = await deleteEvent(id);
    if (affectedRows === 0) return res.status(404).json({ error: "Event not found" });
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ error:  "Failed to delete event", err });
  }
});

export default router;
