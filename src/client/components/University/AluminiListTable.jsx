import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

const AlumniListTable = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;

    const { _id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/alumni/${_id}/alumnis`);
                console.log(response.data)
                setData(response.data.alumnis); // Assign the fetched data to `data` state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (_id) {
            fetchData();
        }
    }, [_id]);

    // Ensure `filteredData` is always an array
    const filteredData = Array.isArray(data) && filter === "All"
        ? data
        : Array.isArray(data) && filter !== "All"
        ? data.filter(alumni => alumni.department === filter)
        : [];

    // Paginate the filtered data
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
            setData(data.filter(alumni => alumni._id !== id));
            toast.success("Alumni Removed Successfully");
        } catch (error) {
            console.error("Error deleting alumni:", error);
        }
    };

    const handleCopyPassword = (password) => {
        navigator.clipboard.writeText(password);
        toast.success('Email copied to clipboard!');
    };

    return (
        <>
            <div className="flex items-center justify-center w-[90%]">
                <div className="sm:px-6 w-full mt-7 bg-[#1E1E1E] rounded-2xl h-[85vh]">
                    <div className='flex justify-between p-5'>
                        <h1 className='text-white font-semibold text-4xl uppercase'>Alumni List</h1>
                        <i className="fa-solid fa-circle-info text-7xl text-[#CFF80B]"></i>
                    </div>

                    <div className="rounded-2xl py-4 px-4 md:px-8 xl:px-10">
                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center">
                                {["All", "IT", "CSE", "AIDS", "EEE", "MECH"].map(department => (
                                    <a href="javascript:void(0)" onClick={() => setFilter(department)} key={department}>
                                        <div className={`py-2 px-8 ${filter === department ? "bg-[#CFF80B] text-black" : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"} rounded-full uppercase ml-4 sm:ml-8`}>
                                            <p>{department}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="mt-7 h-[52vh] overflow-auto">
                            <table className="w-full whitespace-nowrap">
                                <thead className="text-center">
                                    <tr>
                                        <th className="text-sm text-white uppercase">Name</th>
                                        <th className="text-sm text-white uppercase">Department</th>
                                        <th className="text-sm text-white uppercase">Year of Joining</th>
                                        <th className="text-sm text-white uppercase">Email</th>
                                        <th className="text-sm text-white uppercase">Year of Passing</th>
                                        <th className="text-sm text-white uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTasks.map((task) => (
                                        <tr className="h-16 border-b" key={task._id}>
                                            <td>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-base font-medium leading-none text-gray-300 uppercase mr-2">{task.alumniname}</p>
                                                </div>
                                            </td>
                                            <td className="overflow-hidden">
                                                <div className="flex items-center justify-center">
                                                    <a className="text-base text-center leading-none text-[#CFF80B] font-bold ml-2 w-96">{task.department}</a>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex ml-20">
                                                    <input
                                                        value={task.yearofjoining}
                                                        className="text-center text-sm leading-none text-white bg-transparent border-none focus:outline-none"
                                                        readOnly
                                                    />
                                                </div>
                                            </td>
                                            <td className="flex justify-evenly mt-5 ml-10">
                                                <div className="flex items-center justify-center">
                                                    <p className="text-sm leading-none text-white">{task.alumniemail}</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleCopyPassword(task.alumniemail)} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy text-white cursor-pointer hover:text-indigo-800">
                                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                                </svg>
                                            </td>
                                            <td>
                                                <p className="text-base font-bold leading-none text-white ml-2">{task.passedoutyear}</p>
                                            </td>
                                            <td>
                                                <div className="flex items-center space-x-5 justify-center ml-5">
                                                    <Link to={`/updatealumnidetails/${task.universityId}/${task._id}`} className="mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-indigo-800 cursor-pointer lucide lucide-settings-2">
                                                            <path d="M20 7h-9" />
                                                            <path d="M14 17H5" />
                                                            <circle cx="17" cy="17" r="3" />
                                                            <circle cx="7" cy="7" r="3" />
                                                        </svg>
                                                    </Link>
                                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleDelete(task._id)} width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-red-700 cursor-pointer lucide lucide-trash-2">
                                                        <path d="M3 6h18" />
                                                        <path d="M19 6l-1.29 12.9A2 2 0 0 1 15.72 21H8.28a2 2 0 0 1-1.99-2.1L5 6" />
                                                        <path d="M10 11v6" />
                                                        <path d="M14 11v6" />
                                                        <rect width="20" height="20" x="2" y="3" rx="2" ry="2" />
                                                    </svg>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-end items-center py-3 space-x-3">
                            <button
                                className="bg-[#CFF80B] text-black px-4 py-2 rounded-full hover:bg-[#B1D609] disabled:bg-gray-500"
                                onClick={prevPage}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span className="text-white">{`Page ${currentPage}`}</span>
                            <button
                                className="bg-[#CFF80B] text-black px-4 py-2 rounded-full hover:bg-[#B1D609] disabled:bg-gray-500"
                                onClick={nextPage}
                                disabled={currentTasks.length < tasksPerPage}
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
