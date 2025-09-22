import axios from "axios";


// Add Alumni
export async function addAlumni(data: any) {
  const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/alumni-details/add`, data);
  return res.data;
}

// Get All Alumni
export async function getAllAlumni() {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/alumni-details/getAll`);
  return res.data;
}

// Get Alumni By ID
export async function getAlumniById(id: number) {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/alumni-details/getById/${id}`);
  return res.data;
}

// Update Alumni
export async function updateAlumni(id: number, data: any) {
  const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/alumni-details/updateById/${id}`, data);
  return res.data;
}

// Delete Alumni
export async function deleteAlumni(id: number) {
  const res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/alumni-details/deleteById/${id}`);
  return res.data;
}

// Get Alumni Full Profile (with current details)
export async function getAlumniFullProfile(id: number) {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/alumni-details/full-details/${id}`
  );
  return res.data;
}

export async function uploadAlumniExcel(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/alumni-details/uploadExcel`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return res.data;
}
