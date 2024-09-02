import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const AlumniListTable = () => {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 6;
  const { _id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const universityId = localStorage.getItem("_id");
      setLoading(true);
      const result = await axios.get(
        `http://localhost:3000/alumni/${universityId}/alumnis`
      );
      setData(result.data.alumnis || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
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
        const universityId = localStorage.getItem("_id");
        const response = await axios.post(
          `http://localhost:3000/alumni/addexcelfile/${universityId}`,
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
        }, 100);
        setData(response.data.alumnis || []);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error uploading file:", error);
        toast.error("Error uploading file.");
      }
    }
  };

  const filteredData =
    filter === "All"
      ? data
      : data.filter((alumni) => alumni.department === filter);

  const currentTasks = filteredData.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentTasks.length === tasksPerPage) setCurrentPage(currentPage + 1);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/alumni/delete/${id}`);
      setData(data.filter((alumni) => alumni._id !== id));
      toast.success("Alumni Removed Successfully");
    } catch (error) {
      console.error("Error deleting alumni:", error);
    }
  };

  const handleCopyPassword = (password) => {
    navigator.clipboard.writeText(password);
    toast.success("Email copied to clipboard!");
  };

  return (
    <>
      <div className="flex items-center justify-center w-[90%]">
        <div className="sm:px-6 w-full mt-7 bg-[#1E1E1E] rounded-2xl h-[85vh]">
          <div className="flex justify-between p-5">
            <h1 className="text-white font-semibold text-4xl uppercase">
              Alumni List
            </h1>
            <Fragment>
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
                  Note: The headers in the Excel file should be as follows:
                  Name, Department, Email, Year of Joining, Year of Passing.
                </label>
              </div>
              {loading && <progress style={{ width: "100%" }}></progress>}
            </Fragment>
            <i className="fa-solid fa-circle-info text-7xl text-[#CFF80B]"></i>
          </div>

          <div className="rounded-2xl py-4 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                {["All", "IT", "CSE", "AIDS", "EEE", "MECH"].map(
                  (department) => (
                    <a
                      href="javascript:void(0)"
                      onClick={() => setFilter(department)}
                      key={department}
                    >
                      <div
                        className={`py-2 px-8 ${
                          filter === department
                            ? "bg-[#CFF80B] text-black"
                            : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"
                        } rounded-full uppercase ml-4 sm:ml-8`}
                      >
                        <p>{department}</p>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="mt-7 h-[52vh] overflow-auto">
              <table className="w-full whitespace-nowrap">
                <thead className="text-center ">
                  <tr>
                    <th className="text-sm text-white uppercase py-2 px-4">
                      Name
                    </th>
                    <th className="text-sm text-white uppercase py-2 px-4">
                      Department
                    </th>
                    <th className="text-sm text-white uppercase py-2 px-4">
                      Year of Joining
                    </th>
                    <th className="text-sm text-white uppercase py-2 px-4">
                      Email
                    </th>
                    <th className="text-sm text-white uppercase py-2 px-4">
                      Year of Passing
                    </th>
                    <th className="text-sm text-white uppercase py-2 px-4">
                      Register No
                    </th>
                    <th className="text-sm text-white uppercase py-2 px-4">
                      Mobile Number
                    </th>
                    <th className="text-sm text-white uppercase py-2 px-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentTasks.length > 0 ? (
                    currentTasks.map((task) => (
                      <tr className="h-16 border-b" key={task._id}>
                        <td className="text-center py-2 px-4">
                          <div className="flex items-center justify-center">
                            <p className="text-base font-medium leading-none text-gray-300 uppercase">
                              {task.alumniname}
                            </p>
                          </div>
                        </td>
                        <td className="text-center py-2 px-4">
                          <div className="flex items-center justify-center">
                            <p className="text-base text-[#CFF80B] font-bold">
                              {task.department}
                            </p>
                          </div>
                        </td>
                        <td className="text-center py-2 px-4">
                          <input
                            value={task.yearofjoining}
                            className="text-sm leading-none text-white bg-transparent border-none focus:outline-none"
                            readOnly
                          />
                        </td>
                        <td className="text-center py-2 px-4">
                          <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-white">
                              {task.alumniemail}
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() =>
                                handleCopyPassword(task.alumniemail)
                              }
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-copy text-white cursor-pointer hover:text-indigo-800"
                            >
                              <rect
                                width="14"
                                height="14"
                                x="8"
                                y="8"
                                rx="2"
                                ry="2"
                              />
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                            </svg>
                          </div>
                        </td>
                        <td className="text-center py-2 px-4">
                          <p className="text-base font-bold leading-none text-white">
                            {task.passedoutyear}
                          </p>
                        </td>
                        <td className="text-center py-2 px-4">
                          <p className="text-base font-bold leading-none text-white">
                            {task.alumniregisterno}
                          </p>
                        </td>
                        <td className="text-center py-2 px-4">
                          <p className="text-base font-bold leading-none text-white">
                            {task.alumnimobilenumber}
                          </p>
                        </td>
                        <td className="text-center  ">
                          <Link
                            to={`/updatealumnidetails/${task.universityId}/${task._id}`}
                            className="mr-2 text-white cursor-pointer hover:text-green-400"
                          >
                            <i className="fa-solid fa-edit"></i>
                          </Link>
                          <i
                            className="fa-solid fa-trash text-red-500 cursor-pointer"
                            onClick={() => handleDelete(task._id)}
                          ></i>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center py-4 text-white">
                        No data available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between py-2 px-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="bg-[#CFF80B] text-black py-2 px-4 rounded-lg disabled:bg-gray-600"
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                disabled={currentTasks.length < tasksPerPage}
                className="bg-[#CFF80B] text-black py-2 px-4 rounded-lg disabled:bg-gray-600"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlumniListTable;
