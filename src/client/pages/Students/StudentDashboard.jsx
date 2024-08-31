import React from 'react'
import StudentNavbar from '../../components/Students/StudentNavbar';

import StudentGird from './StudentGird'
import StudentHome from './StudentHome'
import Sidebar from '../../components/Students/Sidebar';

const StudentDashboard = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
        <StudentNavbar/>
        <div className='flex'>
        <Sidebar/>
        <div className='w-full flex justify-center '>

        <StudentHome/>
        </div>
      
    </div>
    </div>

  )
}

export default StudentDashboard
