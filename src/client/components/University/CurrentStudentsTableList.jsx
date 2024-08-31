import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const CurrentStudentsTableList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const tasksPerPage = 5;
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/student/${_id}/students`
        );
        console.log("Fetched Data:", response.data); // Debug line
        setData(response.data.students); // Ensure data is always an array
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    if (_id) {
      fetchData();
    }
  }, [_id]);

  const filteredData =
    filter === "All"
      ? data
      : data.filter((student) => student.currentstudentsdepartment === filter);

  console.log("Filtered Data:", filteredData); // Debug line

  const currentTasks = Array.isArray(filteredData)
    ? filteredData.slice(
        (currentPage - 1) * tasksPerPage,
        currentPage * tasksPerPage
      )
    : []; // Ensure currentTasks is always an array

  console.log("Current Tasks:", currentTasks); // Debug line

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentTasks.length === tasksPerPage) setCurrentPage(currentPage + 1);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/student/delete/${id}`);
      setData(data.filter((student) => student._id !== id));
      toast.success("Student Removed Successfully");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleEdit = (id) => {
    // Replace with the actual edit logic, e.g., navigate to an edit page
    console.log("Edit student with ID:", id);
    // For example, using React Router to navigate to an edit page:
    // navigate(`/edit-student/${id}`);
  };

  const readUploadFile = async (e) => {
    e.preventDefault();
    if (e.target.files) {
      const file = e.target.files[0];
      setSelectedFile(file);

      const formData = new FormData();
      formData.append("file", file);

      try {
        setLoading(true);
        const response = await axios.post(
          `http://localhost:3000/student/addexcelfile/currentstudents/${_id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("File uploaded successfully.");
        setTimeout(() => {
          window.location.reload();
        }, 500);
        setData(response.data.students || []); // Update data with the response data
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error uploading file:", error);
        toast.error("Error uploading file.");
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-[90%]">
        <div className="sm:px-6 w-full mt-7 bg-[#1E1E1E] rounded-2xl h-[85vh]">
          <div className="flex justify-between p-5">
            <h1 className="text-white font-semibold text-4xl uppercase">
              Current Student List
            </h1>
            <i className="fa-solid fa-circle-info text-7xl text-[#CFF80B]"></i>
          </div>

      

          <div className="rounded-2xl py-4 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                {/* Filter buttons */}
                <a href="javascript:void(0)" onClick={() => setFilter("All")}>
                  <div
                    className={`py-2 px-8 ${
                      filter === "All"
                        ? "bg-[#CFF80B] text-black"
                        : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"
                    } rounded-full uppercase `}
                  >
                    <p>All</p>
                  </div>
                </a>
                <a href="javascript:void(0)" onClick={() => setFilter("IT")}>
                  <div
                    className={`py-2 px-8 ${
                      filter === "IT"
                        ? "bg-[#CFF80B] text-black"
                        : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"
                    } rounded-full uppercase ml-4 sm:ml-8`}
                  >
                    <p>IT</p>
                  </div>
                </a>
                <a href="javascript:void(0)" onClick={() => setFilter("CSE")}>
                  <div
                    className={`py-2 px-8 ${
                      filter === "CSE"
                        ? "bg-[#CFF80B] text-black"
                        : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"
                    } rounded-full uppercase ml-4 sm:ml-8`}
                  >
                    <p>CSE</p>
                  </div>
                </a>
                <a href="javascript:void(0)" onClick={() => setFilter("AIDS")}>
                  <div
                    className={`py-2 px-8 ${
                      filter === "AIDS"
                        ? "bg-[#CFF80B] text-black"
                        : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"
                    } rounded-full uppercase ml-4 sm:ml-8`}
                  >
                    <p>AIDS</p>
                  </div>
                </a>
                <a href="javascript:void(0)" onClick={() => setFilter("EEE")}>
                  <div
                    className={`py-2 px-8 ${
                      filter === "EEE"
                        ? "bg-[#CFF80B] text-black"
                        : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"
                    } rounded-full uppercase ml-4 sm:ml-8`}
                  >
                    <p>EEE</p>
                  </div>
                </a>
                <a href="javascript:void(0)" onClick={() => setFilter("MECH")}>
                  <div
                    className={`py-2 px-8 ${
                      filter === "MECH"
                        ? "bg-[#CFF80B] text-black"
                        : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"
                    } rounded-full uppercase ml-4 sm:ml-8`}
                  >
                    <p>MECH</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-7 h-[50vh] overflow-auto">
              <table className="w-full whitespace-nowrap">
                <thead className="text-center">
                  <tr>
                    <th className="text-sm text-white uppercase">Name</th>
                    <th className="text-sm text-white uppercase">Department</th>
                    <th className="text-sm text-white uppercase">
                      Year of Joining
                    </th>
                    <th className="text-sm text-white uppercase">Email</th>
                    <th className="text-sm text-white uppercase">
                      Year of Passing
                    </th>
                    <th className="text-sm text-white uppercase">
                      Mobile Number
                    </th>
                    <th className="text-sm text-white uppercase">
                      Register Number
                    </th>
                    <th className="text-sm text-white uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(currentTasks) && currentTasks.length > 0 ? (
                    currentTasks.map((task) => (
                      <tr className="h-16 border-b" key={task._id}>
                        {/* Render task details */}
                        <td>
                          <div className="flex items-center justify-center">
                            <p className="text-base font-medium leading-none text-gray-300 uppercase mr-2">
                              {task.currentstudentsname}
                            </p>
                          </div>
                        </td>
                        <td className="text-center text-sm text-white uppercase">
                          {task.currentstudentsdepartment}
                        </td>
                        <td className="text-center text-sm text-white uppercase">
                          {task.currentstudentsyearofjoining}
                        </td>
                        <td className="text-center text-sm text-white uppercase">
                          {task.email}
                        </td>
                        <td className="text-center text-sm text-white uppercase">
                          {task.currentstudentsyearofpassing}
                        </td>
                        <td className="text-center text-sm text-white uppercase">
                          {task.currentstudentsmobilenumber}
                        </td>
                        <td className="text-center text-sm text-white uppercase">
                          {task.currentstudentsregisterno}
                        </td>
                        <td className="text-center">
                          <Link
                            to={`/updatecurrentstudents/${task.universityId}/${task._id}`}
                            className="px-4 py-2 ] text-white rounded-full mr-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
                          </Link>
                          <button
                            onClick={() => handleDelete(task._id)}
                            className="px-4 py-2 bg-[#E74C3C] text-white rounded-full"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center text-gray-500">
                        No Data Available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
              <div className="flex justify-between p-5">
            <div className="flex items-center space-x-2 border border-[#B1D609]">
              <input
                id="input"
                name="file"
                type="file"
                onChange={readUploadFile}
                accept=".xlsx, .xls, .csv"
                className="text-white file:bg-[#CFF80B] file:text-black file:px-4 file:py-2 file:rounded-full hover:file:bg-[#B1D609] cursor-pointer"
              />
              <label htmlFor="input" className="text-sm text-[#cff80b]">
                Note: The headers in the Excel file should be as follows: Name,
                Department, Email, Year of Joining, Year of Passing.
              </label>
            </div>
            {loading && <progress style={{ width: "100%" }}></progress>}
          </div>
            
            <div className="flex justify-center space-x-2 items-center mt-1">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-[#B1D609] text-black rounded-full font-bold"
                >
                  <i class="fa-solid text-xl fa-caret-left"></i>
                </button>

              <button
                onClick={nextPage}
                disabled={currentTasks.length < tasksPerPage}
                className="py-1 px-3 bg-[#CFF80B] text-black rounded-full"
              >
                <i class="fa-solid text-xl fa-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentStudentsTableList;
