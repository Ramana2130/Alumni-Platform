// models/jobPostingModel.js

import pool from "../config/db.js";


export async function createJobPosting(data: any) {
  const sql = `
  INSERT INTO job_postings (
    job_title, department, job_type, location, salary_min, salary_max, overview,
    responsibilities, required_qualifications, preferred_qualifications,
    benefits, application_deadline, contact_email, contact_phone, job_status
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const values = [
  data.jobTitle,
  data.department,
  data.jobType.join(','),
  data.location,
  data.salaryMin,
  data.salaryMax,
  data.overview,
  data.responsibilities,
  data.requiredQualifications,
  data.preferredQualifications,
  data.benefits.join(','),
  data.applicationDeadline,
  data.contactEmail,
  data.contactPhone,
  data.jobStatus || 'active', // default to 'active' if not provided
];

  const [result]: any = await pool.query(sql, values);
  return result.insertId;
}

export async function getAllJobPostings() {
  const [rows] = await pool.query("SELECT * FROM job_postings ORDER BY created_at DESC");
  return rows;
}

export async function getJobPosting(id: number) {
  const [rows]: [any[], any] = await pool.query("SELECT * FROM job_postings WHERE id = ?", [id]);
  return rows[0];
}

export async function getJobPostingById(id: number): Promise<any> {
  const [rows]: [any[], any] = await pool.query('SELECT * FROM job_postings WHERE id = ?', [id]);
  return rows[0];
}

// models/jobPostingModel.ts (or .js)

// Update job posting by id
export async function updateJobPosting(id: number, data: any) {
  const sql = `
  UPDATE job_postings SET
    job_title = ?,
    department = ?,
    job_type = ?,
    location = ?,
    salary_min = ?,
    salary_max = ?,
    overview = ?,
    responsibilities = ?,
    required_qualifications = ?,
    preferred_qualifications = ?,
    benefits = ?,
    application_deadline = ?,
    contact_email = ?,
    contact_phone = ?,
    job_status = ?
  WHERE id = ?
`;

const values = [
  data.jobTitle,
  data.department,
  data.jobType.join(','),
  data.location,
  data.salaryMin,
  data.salaryMax,
  data.overview,
  data.responsibilities,
  data.requiredQualifications,
  data.preferredQualifications,
  data.benefits.join(','),
  data.applicationDeadline,
  data.contactEmail,
  data.contactPhone,
  data.jobStatus,
  id,
];

  const [result]: any = await pool.query(sql, values);
  return result.affectedRows; // number of rows updated (should be 1)
}

// Delete job posting by id
export async function deleteJobPosting(id: number) {
  const sql = `DELETE FROM job_postings WHERE id = ?`;
  const [result]: any = await pool.query(sql, [id]);
  return result.affectedRows; // number of rows deleted (should be 1)
}
