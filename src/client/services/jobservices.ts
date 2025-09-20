// src/services/jobService.js
import axios from "axios";
import dotenv from "dotenv";

// Add Job Posting
export const createJobPosting = async (jobData: any) => {
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/job/add`, jobData);
  return response.data;
};

// Get All Job Postings
export const getAllJobPostings = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/getAll`);
  return response.data;
};

// Get Job Posting by ID
export const getJobPostingById = async (id: number) => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/getById/${id}`);
  return response.data;
};

// Update Job Posting by ID
export const updateJobPosting = async (id: number, jobData: any) => {
  const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/job/updateById/${id}`, jobData);
  return response.data;
};

// Delete Job Posting by ID
export const deleteJobPosting = async (id: any) => {
  const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/job/deleteById/${id}`);
  return response.data;
};
