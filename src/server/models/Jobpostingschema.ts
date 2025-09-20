// models/jobPostingModel.js

import pool from "../config/db.js";

// Create job posting
export async function createJobPosting(data: any) {
  const sql = `
  INSERT INTO job_postings (
    job_title, department, job_type, location, salary_package, overview,
    responsibilities, required_qualifications, preferred_qualifications,
    benefits, application_deadline, contact_email, contact_phone, job_status, application_number
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

  const values = [
    data.jobTitle,
    data.department,
    data.jobType.join(','),   // array → string
    data.location,
    data.salaryPackage,       // new field
    data.overview,
    data.responsibilities,
    data.requiredQualifications,
    data.preferredQualifications,
    data.benefits.join(','),  // array → string
    data.applicationDeadline,
    data.contactEmail,
    data.contactPhone,
    data.jobStatus || 'active', // default to 'active'
    data.applicationNumber || 0 // default 0 applications
  ];

  const [result]: any = await pool.query(sql, values);
  return result.insertId;
}

// Get all jobs
export async function getAllJobPostings() {
  const [rows] = await pool.query("SELECT * FROM job_postings ORDER BY created_at DESC");
  return rows;
}

// Get job by id
export async function getJobPosting(id: number) {
  const [rows]: [any[], any] = await pool.query("SELECT * FROM job_postings WHERE id = ?", [id]);
  return rows[0];
}

export async function getJobPostingById(id: number): Promise<any> {
  const [rows]: [any[], any] = await pool.query("SELECT * FROM job_postings WHERE id = ?", [id]);
  return rows[0];
}

// Update job posting
export async function updateJobPosting(id: number, data: any) {
  const sql = `
  UPDATE job_postings SET
    job_title = ?,
    department = ?,
    job_type = ?,
    location = ?,
    salary_package = ?,
    overview = ?,
    responsibilities = ?,
    required_qualifications = ?,
    preferred_qualifications = ?,
    benefits = ?,
    application_deadline = ?,
    contact_email = ?,
    contact_phone = ?,
    job_status = ?,
    application_number = ?
  WHERE id = ?
`;

  const values = [
    data.jobTitle,
    data.department,
    data.jobType.join(','),
    data.location,
    data.salaryPackage,       // updated
    data.overview,
    data.responsibilities,
    data.requiredQualifications,
    data.preferredQualifications,
    data.benefits.join(','),
    data.applicationDeadline,
    data.contactEmail,
    data.contactPhone,
    data.jobStatus,
    data.applicationNumber,
    id,
  ];

  const [result]: any = await pool.query(sql, values);
  return result.affectedRows;
}

// Delete job posting
export async function deleteJobPosting(id: number) {
  const sql = `DELETE FROM job_postings WHERE id = ?`;
  const [result]: any = await pool.query(sql, [id]);
  return result.affectedRows;
}
