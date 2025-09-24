import bcrypt from "bcryptjs";
import { RowDataPacket } from "mysql2";
import pool from "../config/db.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // keep safe

export async function registerUser(
  email: string,
  password: string,
  role: string,
  alumniId?: number | null
) {
  // check if user exists
  const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (rows.length > 0) {
    throw new Error("User already exists with this email");
  }

  // validate alumniId depending on role
  if (role === "admin") {
    alumniId = null; // force null for admins
  } else if (role === "alumni") {
    if (!alumniId) {
      throw new Error("alumniId is required for alumni role");
    }
  }

  // hash the password
  const hashedPassword = await bcrypt.hash(password.toString(), 10);

  // insert into users
  const [result] = await pool.query(
    "INSERT INTO users (alumniId, email, password, role) VALUES (?, ?, ?, ?)",
    [alumniId, email, hashedPassword, role]
  );

  return (result as any).insertId;
}

//login
export async function loginUser(email: string, password: string) {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  const user = rows[0];
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user.id, role: user.role, email: user.email },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { token, user };
}
