import React from 'react'
import StudentNavbar from '../../components/Students/StudentNavbar';

import StudentDonationForm from './StudentDonationForm'
import Sidebar from '../../components/Students/Sidebar'

const StudentDonation = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
    <StudentNavbar/>
    <div className='flex'>
        <Sidebar/>
        <StudentDonationForm/>

    </div>

  
</div>
  )
}

export default StudentDonation
