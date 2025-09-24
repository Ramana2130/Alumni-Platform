import express from "express";
import multer from "multer";
import xlsx from "xlsx";
import { createStudent, deleteStudent, getAllStudents, getStudentByEmail, getStudentById, updateStudent } from "../models/Studentdetails.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });


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

// Excel Upload
router.post("/uploadExcel", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const insertedIds: number[] = [];

    for (const row of sheet) {
      const typedRow = row as {
          studentName: string;
  regNo: string;
  department: string;
  email: string;
  yearOfJoining: string;
  yearOfPassing: string;
  academicYear?: string | null;
      };

      const studentData = {
        studentName: typedRow.studentName,
        regNo: typedRow.regNo,
        department: typedRow.department,
        email: typedRow.email,
        yearOfJoining: typedRow.yearOfJoining,
        yearOfPassing: typedRow.yearOfPassing,
        academicYear: typedRow.academicYear,
      };

      const id = await createStudent(studentData);
      insertedIds.push(id);
    }

    res.status(201).json({ message: "Excel processed successfully", insertedIds });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Error processing Excel" });
  }
});

router.get("/by-email/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const student = await getStudentByEmail(email);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
export default router;
