import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UniversityDonationFullStatement = () => {
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 7;

    const mockTasks = [
        { name: 'Ramana', year: 'II', department: 'CSE', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },

    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },

    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },

    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },

    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },

    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },
    { name: 'Ramana', year: 'II', department: 'IT', amount: 5000,date:'01/02/2018', },

        // Add more mock tasks as needed
    ];

    const currentTasks = mockTasks.slice(
        (currentPage - 1) * tasksPerPage,
        currentPage * tasksPerPage
    );

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentTasks.length === tasksPerPage) setCurrentPage(currentPage + 1);
    };

    const handleCopyPassword = (password) => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    const handleDelete = (id) => {
        alert(`Task with id ${id} would be deleted.`);
        // Add deletion logic here if needed
    };

    return (
        <>
            <div className="flex items-center justify-center w-[90%] ">
                <div className="sm:px-6 w-full mt-7  bg-[#1E1E1E] h-[85vh]">
                <div className='flex justify-between p-5'>

<h1 className='text-white font-semibold text-4xl  uppercase'>donation History</h1>
<i class="fa-solid fa-clock-rotate-left text-5xl text-[#CFF80B]"></i>
    </div>
                    <div className="rounded-2xl py-4  px-4 md:px-8 xl:px-10">
                        <div className="sm:flex items-center justify-end">
                            <div className="flex items-center">
                                <a href="javascript:void(0)" onClick={() => setFilter("All")}>
                                    <div className={`py-2 px-8 ${filter === "All" ? "bg-[#CFF80B] text-black" : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"} rounded-full uppercase `}>
                                        <p>All</p>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" onClick={() => setFilter("IT")}>
                                    <div className={`py-2 px-8 ${filter === "Pending" ? "bg-[#CFF80B] text-black" : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"} rounded-full uppercase ml-4 sm:ml-8`}>
                                        <p>IT</p>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" onClick={() => setFilter("CSE")}>
                                    <div className={`py-2 px-8 ${filter === "Done" ? "bg-[#CFF80B] text-black" : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"} rounded-full uppercase ml-4 sm:ml-8`}>
                                        <p>CSE</p>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" onClick={() => setFilter("EEE")}>
                                    <div className={`py-2 px-8 ${filter === "Done" ? "bg-[#CFF80B] text-black" : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"} rounded-full uppercase ml-4 sm:ml-8`}>
                                        <p>EEE</p>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" onClick={() => setFilter("MECH")}>
                                    <div className={`py-2 px-8 ${filter === "Done" ? "bg-[#CFF80B] text-black" : "border-[#CFF80B] border text-white hover:text-black hover:bg-[#CFF80B]"} rounded-full uppercase ml-4 sm:ml-8`}>
                                        <p>MECH</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-7 h-[52vh] overflow-auto">
                            <table className="w-full whitespace-nowrap">
                                <thead className="text-center">
                                    <tr>
                                        {/* <th></th> */}
                                        <th className="text-lg font-semibold text-white uppercase">Name</th>
                                        <th className="text-lg font-semibold text-white uppercase">Department</th>
                                        <th className="text-lg font-semibold text-white uppercase">Year</th>
                                        <th className="text-lg font-semibold text-white uppercase">Amount</th>
                                        <th className="text-lg font-semibold text-white uppercase">date/time</th>
                                        {/* <th className="text-sm text-white uppercase">Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTasks.map((task) => (
                                        <tr className="h-16 border-b" key={task._id}>
                                      
                                            <td>
                                                <div className="flex items-center justify-center">
                                                    <p className="text-base  leading-none font-bold text-gray-300 uppercase mr-2">{task.name}</p>
                                                </div>
                                            </td>
                                            <td className="overflow-hidden">
                                                <div className="flex items-center justify-center">
                                                    <a className="text-base text-center leading-none text-[#CFF80B] font-bold ml-2 " >{task.department}</a>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-base font-bold text-center leading-none  text-white ml-2">{task.year}</p>
                                            </td>
                                 
                                            <td  className="flex justify-evenly mt-5 ml-10">
                                                <div className="flex items-center justify-center">
                                                    <p className="text-sm leading-none font-bold text-center text-white">{task.amount}</p>
                                                </div>
                                               
                                            </td>
                                            <td>
                                                <div className="flex  justify-center">
                                                <p className="text-sm leading-none font-bold text-center text-white">{task.date}</p>
                                                </div>
                                            </td>
                                           
                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="sm:flex items-center justify-center mt-5">
                            <div className="flex items-center space-x-2" >
                                <button className={`text-sm ${currentPage === 1 ? 'text-white rounded-full   bg-[#CFF80B]/50' : ' bg-[#CFF80B] rounded-full text-white hover:text-indigo-800'} size-8`} onClick={prevPage} disabled={currentPage === 1}>
                                <i class="fa-solid fa-caret-left text-black text-2xl"></i>
                                </button>
                                <button className={`text-sm ${currentTasks.length < tasksPerPage ? 'text-white rounded-full   bg-[#CFF80B]/50' : 'bg-[#CFF80B] rounded-full text-white hover:text-indigo-800'} size-8`} onClick={nextPage} disabled={currentTasks.length < tasksPerPage}>
                                <i class="fa-solid fa-caret-right text-black text-2xl"></i>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default UniversityDonationFullStatement;
