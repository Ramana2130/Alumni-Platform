import pool from "../config/db.js";

export async function createAlumni(data:any) {
  const sql = `
    INSERT INTO alumni_details (
      name, dob, department, yearOfJoining, yearOfPassing,
      registerNumber, city, email
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.name,
    data.dob,
    data.department,
    data.yearOfJoining,
    data.yearOfPassing,
    data.registerNumber,
    data.city,
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
      dob = ?,
      department = ?,
      yearOfJoining = ?,
      yearOfPassing = ?,
      registerNumber = ?,
      city = ?,
      email = ?
    WHERE id = ?
  `;
  const values = [
    data.name,
    data.dob,
    data.department,
    data.yearOfJoining,
    data.yearOfPassing,
    data.registerNumber,
    data.city,
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
