import express from "express";
import { createStudent, deleteStudent, getAllStudents, getStudentById, updateStudent } from "../models/Studentdetails.js";

const router = express.Router();

// Create student
router.post("/add", async (req, res) => {
  try {
    const id = await createStudent(req.body);
    res.status(201).json({ id, message: "Student created successfully" });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "An unknown error occurred" });
  }
});

// Read all students
router.get("/getAll", async (req, res) => {
  try {
    const students = await getAllStudents();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Error fetching students" });
  }
});

// Read student by ID
router.get("/getById/:id", async (req, res) => {
  try {
    const studentId = Number(req.params.id);
    if (isNaN(studentId)) return res.status(400).json({ error: "Invalid student ID" });

    const student = await getStudentById(studentId);
    if (!student) return res.status(404).json({ error: "Student not found" });

    res.status(200).json(student);
  } catch {
    res.status(500).json({ error: "Error fetching student by ID" });
  }
});

// Update student by ID
router.put("/updateById/:id", async (req, res) => {
  try {
    const studentId = Number(req.params.id);
    if (isNaN(studentId)) return res.status(400).json({ error: "Invalid student ID" });

    const affectedRows = await updateStudent(studentId, req.body);
    if (affectedRows === 0) return res.status(404).json({ error: "Student not found or no changes" });

    res.status(200).json({ message: "Student updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Error updating student details" });
  }
});

// Delete student by ID
router.delete("/deleteById/:id", async (req, res) => {
  try {
    const studentId = Number(req.params.id);
    if (isNaN(studentId)) return res.status(400).json({ error: "Invalid student ID" });

    const affectedRows = await deleteStudent(studentId);
    if (affectedRows === 0) return res.status(404).json({ error: "Student not found" });

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Error deleting student details" });
  }
});

export default router;
