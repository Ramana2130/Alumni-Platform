import React from 'react'
import AlumniNavbar from '../../components/Alumni/AlumniNavbar'
import Sidebar from '../../components/Alumni/Sidebar'
import AluminiDonationForm from './AluminiDonationForm'

const AluminiDonation = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
    <AlumniNavbar/>
    <div className='flex'>
        <Sidebar/>
        <AluminiDonationForm/>

    </div>

  
</div>
  )
}

export default AluminiDonation
