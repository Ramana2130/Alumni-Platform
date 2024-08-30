import React from 'react'
import StudentNavbar from '../../components/Alumni/StudentNavbar'
import StudentGird from './StudentGird'

const StudentDashboard = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
        <StudentNavbar/>
        <StudentGird/>
      
    </div>
  )
}

export default StudentDashboard
