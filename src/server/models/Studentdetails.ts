import {  RowDataPacket } from "mysql2";
import { ResultSetHeader } from "mysql2";
import pool from "../config/db.js";

// Create student record
export async function createStudent(data: any) {
  const sql = `
    INSERT INTO student_details (
      student_name, reg_no, department, email, year_of_joining, year_of_passing, academic_year
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.studentName,
    data.regNo,
    data.department,
    data.email,
    data.yearOfJoining,
    data.yearOfPassing,
    data.academicYear, // <-- new column
  ];

  const [result] = await pool.query<ResultSetHeader>(sql, values);
  return result.insertId;
}


// Get all students
export async function getAllStudents() {
  const [rows] = await pool.query("SELECT * FROM student_details ORDER BY id DESC");
  return rows;
}

// Get student by ID

export async function getStudentById(id: number) {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM student_details WHERE id = ?", [id]);
  return (rows as RowDataPacket[])[0];
}

// Update student by ID
export async function updateStudent(id: number, data: any) {
  const sql = `
    UPDATE student_details SET
      student_name = ?,
      reg_no = ?,
      department = ?,
      email = ?,
      year_of_joining = ?,
      year_of_passing = ?,
      academic_year = ?
    WHERE id = ?
  `;
  const values = [
    data.studentName,
    data.regNo,
    data.department,
    data.email,
    data.yearOfJoining,
    data.yearOfPassing,
    data.academicYear, // <-- new column
    id,
  ];
  const [result] = await pool.query<ResultSetHeader>(sql, values);
  return result.affectedRows;
}

// Delete student by ID
export async function deleteStudent(id: number) {
  const sql = `DELETE FROM student_details WHERE id = ?`;
  const [result] = await pool.query<ResultSetHeader>(sql, [id]);
  return result.affectedRows;
}
