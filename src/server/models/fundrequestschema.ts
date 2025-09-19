import { RowDataPacket, ResultSetHeader } from "mysql2";
import pool from "../config/db.js";

// Create fund request
export async function createFundRequest(data: any) {
  const sql = `
    INSERT INTO fund_requests (student_id, request_amount, fund_type, request_description)
    VALUES (?, ?, ?, ?)
  `;
  const values = [
    data.studentId,
    data.requestAmount,
    data.fundType,
    data.requestDescription,
  ];

  const [result] = await pool.query<ResultSetHeader>(sql, values);
  return result.insertId;
}

// Get all fund requests
export async function getAllFundRequests() {
  const [rows] = await pool.query<RowDataPacket[]>(`
    SELECT fr.*, s.student_name, s.reg_no, s.department 
    FROM fund_requests fr
    JOIN student_details s ON fr.student_id = s.id
    ORDER BY fr.created_at DESC
  `);
  return rows;
}

// Get fund request by ID
export async function getFundRequestById(id: number) {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM fund_requests WHERE id = ?", [id]
  );
  return rows[0];
}

// Update fund request status (for university)
export async function updateFundRequestStatus(id: number, status: string) {
  const sql = `UPDATE fund_requests SET status = ? WHERE id = ?`;
  const [result] = await pool.query<ResultSetHeader>(sql, [status, id]);
  return result.affectedRows;
}

// Delete fund request
export async function deleteFundRequest(id: number) {
  const sql = `DELETE FROM fund_requests WHERE id = ?`;
  const [result] = await pool.query<ResultSetHeader>(sql, [id]);
  return result.affectedRows;
}
