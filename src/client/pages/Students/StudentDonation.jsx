import React from 'react'
import Sidebar from '../../components/Alumni/Sidebar'
import StudentNavbar from '../../components/Alumni/StudentNavbar'
import StudentDonationForm from './StudentDonationForm'

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
