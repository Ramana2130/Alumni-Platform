import pool from "../config/db.js";

export async function createAlumni(data:any) {
  const sql = `
    INSERT INTO alumni_details (
      name, department, yearOfJoining, yearOfPassing,
      registerNumber, email
    ) VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.name,
    data.department,
    data.yearOfJoining,
    data.yearOfPassing,
    data.registerNumber,
    data.email,
  ];
  const [result] = await pool.query(sql, values) as [import('mysql2').ResultSetHeader, any];
  return result.insertId;
}

export async function getAllAlumni() {
  const [rows] = await pool.query("SELECT * FROM alumni_details ORDER BY id DESC");
  return rows;
}

import { RowDataPacket } from "mysql2";

export async function getAlumniById(id: number) {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM alumni_details WHERE id = ?", [id]);
  return (rows as RowDataPacket[])[0];
}

export async function updateAlumni(id: number, data: any) {
  const sql = `
    UPDATE alumni_details SET
      name = ?,
      department = ?,
      yearOfJoining = ?,
      yearOfPassing = ?,
      registerNumber = ?,
      email = ?
    WHERE id = ?
  `;
  const values = [
    data.name,
    data.department,
    data.yearOfJoining,
    data.yearOfPassing,
    data.registerNumber,
    data.email,
    id,
  ];
  const [result] = await pool.query<import('mysql2').ResultSetHeader>(sql, values);
  return result.affectedRows;
}

export async function deleteAlumni(id: number) {
  const sql = `DELETE FROM alumni_details WHERE id = ?`;
  const [result] = await pool.query<import('mysql2').ResultSetHeader>(sql, [id]);
  return result.affectedRows;
}

// Get alumni with their current details
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
      acd.current_status,
      acd.company_name,
      acd.designation,
      acd.job_location,
      acd.success_stories
    FROM alumni_details ad
    LEFT JOIN alumni_current_details acd 
      ON ad.id = acd.alumni_id
    WHERE ad.id = ?
  `;
  const [rows] = await pool.query<RowDataPacket[]>(sql, [id]);
  return (rows as RowDataPacket[])[0];
}

export async function getAlumniByEmail(email: string) {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM alumni_details WHERE email = ?",
    [email]
  );
  return (rows as RowDataPacket[])[0];
}

export async function getAllAlumniFullDetails() {
  const sql = `
    SELECT 
      ad.id AS alumniId,
      ad.name,
      ad.department,
      ad.yearOfJoining,
      ad.yearOfPassing,
      ad.registerNumber,
      ad.email,
      acd.current_status AS currentStatus,
      acd.company_name AS companyName,
      acd.designation,
      acd.job_location AS jobLocation,
      acd.success_stories AS successStories
    FROM alumni_details ad
    LEFT JOIN alumni_current_details acd 
      ON ad.id = acd.alumni_id
  `;
  const [rows] = await pool.query<RowDataPacket[]>(sql);
  return rows as RowDataPacket[];
}
