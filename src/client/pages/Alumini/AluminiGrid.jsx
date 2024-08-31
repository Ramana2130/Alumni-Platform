import React, { useState } from 'react';
import Sidebar from '../../components/Alumni/Sidebar';
import Card from './Card';
import Alumniprofile from './AlumniProfile';
import BentoCard from './BentoCard';

const AluminiGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = () => {
        setCurrentPage(2);
    };

    return (
        <div className="flex p-4 h-[85vh] bg-[#111111] justify-center gap-5 px-14 py-5">
        

      

            <div className="relative  p-5  h-[85vh] w-[70vw] rounded-2xl bg-[#1E1E1E]">
                <Alumniprofile />
            </div>
        </div>
    );
};

export default AluminiGrid;
