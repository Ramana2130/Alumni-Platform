import { ResultSetHeader } from "mysql2";
import pool from "../config/db.js";

// Create alumni detail
export async function createAlumni(data :any) {
  const sql = `
    INSERT INTO alumni_current_details 
      (alumni_id, fullname, current_location, current_status, company_name, designation, job_location, success_stories)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.alumniId,
    data.fullname,
    data.currentLocation || null,
    data.currentStatus,
    data.companyName || null,
    data.designation || null,
    data.jobLocation || null,
    data.successStories || null,
  ];
  const [result] = await pool.query(sql, values);
  return (result as any).insertId;
}

// Get all alumni details
export async function getAllAlumni() {
  const [rows] = await pool.query("SELECT * FROM alumni_current_details ORDER BY created_at DESC");
  return rows;
}

// Get alumni detail by id
import { RowDataPacket } from "mysql2";

export async function getAlumniById(id: number) {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM alumni_current_details WHERE id = ?", [id]);
  return (rows as RowDataPacket[])[0];
}

// Update alumni detail by id
export async function updateAlumni(id: number, data: any) {
  const sql = `
    UPDATE alumni_current_details SET
      fullname = ?,
      current_location = ?,
      current_status = ?,
      company_name = ?,
      designation = ?,
      job_location = ?,
      success_stories = ?
    WHERE id = ?
  `;
  const values = [
    data.fullname,
    data.currentLocation || null,
    data.currentStatus,
    data.companyName || null,
    data.designation || null,
    data.jobLocation || null,
    data.successStories || null,
    id,
  ];
  const [result] = await pool.query<ResultSetHeader>(sql, values);
  return result.affectedRows;
}

// Delete alumni detail by id

export async function deleteAlumni(id: number) {
  const [result] = await pool.query<ResultSetHeader>("DELETE FROM alumni_current_details WHERE id = ?", [id]);
  return result.affectedRows;
}

export async function getCurrentDetailsByAlumniId(alumniId: number) {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM alumni_current_details WHERE alumni_id = ?", [alumniId]
  );
  return (rows as RowDataPacket[])[0];
}

export async function getAlumniFullProfile(id: number) {
  const sql = `
    SELECT 
      ad.id AS alumniId,
      ad.name,
      ad.department,
      ad.yearOfJoining,
      ad.yearOfPassing,
      ad.registerNumber,
      ad.email,
      acd.fullname,
      acd.current_location AS currentLocation,
      acd.current_status AS currentStatus,
      acd.company_name AS companyName,
      acd.designation,
      acd.job_location AS jobLocation,
      acd.success_stories AS successStories
    FROM alumni_details ad
    LEFT JOIN alumni_current_details acd 
      ON ad.id = acd.alumni_id
    WHERE ad.id = ?
  `;
  const [rows] = await pool.query<RowDataPacket[]>(sql, [id]);
  return (rows as RowDataPacket[])[0];
}