import express from "express";
import { createAlumni, deleteAlumni, getAllAlumni, getAlumniById, getAlumniFullProfile, updateAlumni } from "../models/Alumnidetails.js";
import multer from "multer";
import xlsx from "xlsx";
import pool from "../config/db.js";
import { registerUser } from "../models/authschema.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    // 1️⃣ Insert into alumni_details
    const alumniId = await createAlumni(req.body);

    // 2️⃣ Get email + register number
    const { email, registerNumber } = req.body;

    if (email && registerNumber) {
      try {
        // Hash registerNumber before storing as password
        const hashedPassword = await bcrypt.hash(registerNumber.toString(), 10);

        // Insert into users (link with alumniId)
        await pool.query(
          `INSERT INTO users (alumniId, email, password, role) VALUES (?, ?, ?, ?)`,
          [alumniId, email, hashedPassword, "alumni"]
        );
      } catch (err: any) {
        if (err.message.includes("Duplicate entry")) {
          console.log(`⚠️ User ${email} already exists in users table, skipping`);
        } else {
          throw err;
        }
      }
    }

    res
      .status(201)
      .json({ id: alumniId, message: "Alumni details created successfully" });
  } catch (err) {
    console.error("❌ Error in /add:", err);
    res.status(500).json({
      error: err instanceof Error ? err.message : "An unknown error occurred",
    });
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

router.get("/full-details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const alumni = await getAlumniFullProfile(Number(id));

    if (!alumni) {
      return res.status(404).json({ error: "Alumni not found" });
    }

    res.json(alumni);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const upload = multer({ dest: "uploads/" });


router.post("/uploadExcel", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Read excel file
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows: any[] = xlsx.utils.sheet_to_json(sheet);

    for (const row of rows) {
      const {
        alumni_name,
        alumni_dept,
        alumni_reg_no,
        alumni_year_of_joining,
        alumni_year_of_passing,
        alumni_email,
      } = row;

      if (!alumni_name || !alumni_dept || !alumni_reg_no || !alumni_year_of_passing) {
        return res.status(400).json({
          error: `Missing required fields in row: ${JSON.stringify(row)}`,
        });
      }

      // ✅ check duplicate in alumni_details
      const [exists]: any = await pool.query(
        "SELECT id FROM alumni_details WHERE registerNumber = ? OR email = ?",
        [alumni_reg_no, alumni_email]
      );

      if (exists.length > 0) {
        return res.status(400).json({
          error: `Duplicate entry found for RegisterNumber: ${alumni_reg_no} or Email: ${alumni_email}`,
        });
      }

      // ✅ insert into alumni_details and capture alumniId
      const [result]: any = await pool.query(
        `INSERT INTO alumni_details (name, department, registerNumber, yearOfJoining, yearOfPassing, email) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          alumni_name,
          alumni_dept,
          alumni_reg_no,
          alumni_year_of_joining,
          alumni_year_of_passing,
          alumni_email,
        ]
      );
      const alumniId = result.insertId;

      // ✅ insert into users (link with alumniId)
      if (alumni_email && alumni_reg_no) {
        const hashedPassword = await bcrypt.hash(alumni_reg_no.toString(), 10);

        await pool.query(
          `INSERT INTO users (alumniId, username, password, role) VALUES (?, ?, ?, ?)`,
          [alumniId, alumni_email, hashedPassword, "alumni"]
        );
      }
    }

    return res.json({ message: "Excel data uploaded successfully" });
  } catch (error: any) {
    console.error("❌ Error uploading Excel:", error.message, error);
    return res.status(500).json({ error: error.message || "Error processing Excel file" });
  }
});



export default router;
