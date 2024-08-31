import React, { useState } from 'react';
import Sidebar from '../../components/Students/Sidebar';
import Card from './Card';
import BentoCard from './BentoCard';
import axios from 'axios';
import toast from 'react-hot-toast';
import Alumniprofile from '../Alumini/AlumniProfile';

const StudentHome = () => {
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
          

            <div className="flex justify-center">
                {currentPage === 1 ? (
                       <div className="relative  p-5  h-[85vh] w-[70vw] rounded-2xl bg-[#1E1E1E] scrollbar_yellow overflow-x-auto">
                                        <h1 className='text-white font-semibold text-4xl uppercase mb-10 mt-5'>Catergory</h1>

                        <BentoCard handlePageChange={handlePageChange} />
                    </div>
                ) : (
                    <div className="relative  p-5  h-[85vh] w-[70vw] rounded-2xl bg-[#1E1E1E] scrollbar_yellow overflow-x-auto">

                        <button
                            onClick={handleBackButtonClick}
                            className="mb-4 px-4 py-2 bg-[#FDE047] text-white rounded-md self-start"
                        >
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        {/* <div className="relative  p-5  h-[85vh] w-[75vw] rounded-2xl bg-[#1E1E1E] scrollbar_yellow overflow-x-auto"> */}
                  <h1 className='text-white font-semibold text-4xl uppercase mb-5'>Alumni List</h1>
<div className='grid grid-cols-3'>

                            
                            {alumniData.map((alumni) => (
                                
                                <Card key={alumni._id} alumni={alumni} />
                            ))}
                            </div>
                        </div>
                    // </div>
                )}
            </div>

        </div>
    );
};

export default StudentHome;
