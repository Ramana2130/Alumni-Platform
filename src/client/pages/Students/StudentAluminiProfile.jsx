import React, { useState } from 'react';
import Sidebar from '../../components/Students/Sidebar';
import StudentNavbar from '../../components/Students/StudentNavbar';
import AluminiProfile from './AluminiProfile';
import { useNavigate } from 'react-router-dom';
const StudentAluminiProfile = () => {
  const navigate=useNavigate()
  const back=()=>{
    navigate('/')
  }
    return (<div className='bg-[#111111] h-[100vh] overflow-hidden'>
        <StudentNavbar/>
    <div className="flex p-4 h-[85vh] justify-center gap-5 px-14 py-5 ">
    <div className="relative h-[85vh] w-[8vw] rounded-2xl">
        <Sidebar />
    </div>

 <div className="relative  p-5  h-[85vh] w-[70vw] scrollbar_yellow overflow-x-auto rounded-2xl bg-[#1E1E1E]">
       
 <button
              // onClick={handleBackButtonClick}
              className="mb-4 px-4 py-2 bg-yellow-500 text-white rounded-md self-start"
            >
              <i class="fa-solid fa-chevron-left"></i>
            </button>
    <AluminiProfile/>
    </div>

</div>
</div>

  )
}
export default StudentAluminiProfile;
