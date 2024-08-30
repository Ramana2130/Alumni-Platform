import React, { useState } from 'react';
import Sidebar from '../../components/Alumni/Sidebar';
import Card from './Card';
import Alumniprofile from '../Alumini/AlumniProfile';
import BentoCard from './BentoCard';
import axios from 'axios';
import toast from 'react-hot-toast';

const StudentGird = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [alumniData, setAlumniData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = async (department) => {
        setSelectedDepartment(department);
        await fetchAlumniData(department);
        setCurrentPage(2); // Move to the alumni list page
    };

    const fetchAlumniData = async (department) => {
        try {
            const universityId = localStorage.getItem("universityId");
            const response = await axios.get(`http://localhost:3000/alumni/${universityId}/alumnis/${department}`);
            const data = response.data;
    
            // Check if the response is an array and is empty
            if (Array.isArray(data) && data.length === 0) {
                toast.info('No Alumni Found for the given department', { icon: '🔔' });
            } else {
                setAlumniData(data);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                // Display the message from the backend
                toast(error.response.data.message,{ icon: '🔔' });
            } else {
                console.error('Error fetching alumni data:', error);
                toast.error('Failed to fetch alumni data',{ icon: '❌' });
            }
        }
    };

    const handleBackButtonClick = () => {
        setCurrentPage(1); // Go back to the BentoCard view
        setAlumniData([]); // Clear alumni data when going back
        setSelectedDepartment(''); // Optionally reset the selected department
    };

    return (
        <div className="flex p-4 h-[85vh] bg-[#111111] justify-center gap-5 px-14 py-5">
            <div className="relative h-[85vh] w-[8vw] rounded-2xl">
                <Sidebar />
            </div>

            <div className="flex-1">
                {currentPage === 1 ? (
                    <div className="relative overflow-x-auto p-5 scrollbar_blue flex h-[85vh] w-full rounded-2xl bg-[#1E1E1E]">
                        <BentoCard handlePageChange={handlePageChange} />
                    </div>
                ) : (
                    <div className="relative p-5 flex flex-col h-[85vh] w-full rounded-2xl bg-[#1E1E1E]">
                        <button
                            onClick={handleBackButtonClick}
                            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md self-start"
                        >
                            Back
                        </button>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {alumniData.map((alumni) => (
                                <Card key={alumni._id} alumni={alumni} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="relative justify-center p-5 flex h-[85vh] w-[20vw] rounded-2xl bg-[#1E1E1E]">
                <Alumniprofile />
            </div>
        </div>
    );
};

export default StudentGird;
