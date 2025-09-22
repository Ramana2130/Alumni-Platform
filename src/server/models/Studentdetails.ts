import { RowDataPacket, ResultSetHeader } from "mysql2";
import pool from "../config/db.js";
import bcrypt from "bcryptjs";

// Create student record + user entry
export async function createStudent(data: any) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // 1. Insert into student_details
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
      data.academicYear,
    ];

    const [result] = await conn.query<ResultSetHeader>(sql, values);
    const studentId = result.insertId;

    // 2. Hash the regNo before storing in users
    const hashedPassword = await bcrypt.hash(data.regNo, 10);

    // 3. Insert into users table
    const userSql = `
      INSERT INTO users (email, password, role, studentId)
      VALUES (?, ?, ?, ?)
    `;
    const userValues = [
      data.email,
      hashedPassword,
      "student",
      studentId,
    ];

    await conn.query<ResultSetHeader>(userSql, userValues);

    await conn.commit();
    return studentId;
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
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
    data.academicYear,
    id,
  ];

  const [result] = await pool.query<ResultSetHeader>(sql, values);
  return result.affectedRows;
}

// Delete student by ID (also delete user)
export async function deleteStudent(id: number) {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    // Delete from users table first
    await conn.query(`DELETE FROM users WHERE alumniId = ? AND role = 'student'`, [id]);

    // Delete from student_details
    const [result] = await conn.query<ResultSetHeader>(`DELETE FROM student_details WHERE id = ?`, [id]);

    await conn.commit();
    return result.affectedRows;
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
}
