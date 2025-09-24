import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/student-details`;

// ✅ Add Student
export async function addStudent(data: any) {
  const res = await axios.post(`${BASE_URL}/add`, data);
  return res.data;
}

// ✅ Get All Students
export async function getAllStudents() {
  const res = await axios.get(`${BASE_URL}/getAll`);
  return res.data;
}

// ✅ Get Student By ID
export async function getStudentById(id: number) {
  const res = await axios.get(`${BASE_URL}/getById/${id}`);
  return res.data;
}

// ✅ Update Student
export async function updateStudent(id: number, data: any) {
  const res = await axios.put(`${BASE_URL}/updateById/${id}`, data);
  return res.data;
}

// ✅ Delete Student
export async function deleteStudent(id: number) {
  const res = await axios.delete(`${BASE_URL}/deleteById/${id}`);
  return res.data;
}

// ✅ Upload Students Excel
export async function uploadStudentExcel(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(
    `${BASE_URL}/uploadExcel`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return res.data;
}

export async function getStudentByEmail(email: string) {
  const res = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/by-email/${email}`
  );
  return res.data;
}