import { ResultSetHeader } from "mysql2";
import pool from "../config/db.js";

// Create event
export async function createEvent(data: any) {
  const sql = `
    INSERT INTO events_posting 
      (title, date, time, description, speaker_name, speaker_bio, registration_link, category, send_notification)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.title,
    data.date,
    data.time,
    data.description || null,
    data.speaker_name || null,
    data.speaker_bio || null,
    data.registration_link || null,
    data.category,
    data.send_notification ? 1 : 0,
  ];
  const [result]: any = await pool.query(sql, values);
  return result.insertId;
}

// Get all events
export async function getAllEvents() {
  const [rows] = await pool.query(
    "SELECT * FROM events_posting ORDER BY created_at DESC"
  );
  return rows;
}

// Get event by id
export async function getEventById(id: number) {
  const [rows]: [any[], any] = await pool.query(
    "SELECT * FROM events_posting WHERE id = ?",
    [id]
  );
  return rows[0];
}

// Update event by id
export async function updateEvent(id: number, data: any) {
  const sql = `
    UPDATE events_posting SET
      title = ?,
      date = ?,
      time = ?,
      description = ?,
      speaker_name = ?,
      speaker_bio = ?,
      registration_link = ?,
      category = ?,
      send_notification = ?
    WHERE id = ?
  `;
  const values = [
    data.title,
    data.date,
    data.time,
    data.description || null,
    data.speaker_name || null,
    data.speaker_bio || null,
    data.registration_link || null,
    data.category,
    data.send_notification ? 1 : 0,
    id,
  ];
  const [result] = await pool.query<ResultSetHeader>(sql, values);
  return result.affectedRows;
}

// Delete event by id
export async function deleteEvent(id: number): Promise<number> {
  const [result]: [ResultSetHeader, any] = await pool.query(
    "DELETE FROM events_posting WHERE id = ?",
    [id]
  );
  return result.affectedRows;
}
