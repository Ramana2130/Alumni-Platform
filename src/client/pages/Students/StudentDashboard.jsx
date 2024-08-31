import React from 'react'
import StudentNavbar from '../../components/Students/StudentNavbar';

import StudentGird from './StudentGird'
import StudentHome from './StudentHome'

const StudentDashboard = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
        <StudentNavbar/>
        <div className=''>

        <StudentHome/>
      
    </div>
    </div>

  )
}

export default StudentDashboard
