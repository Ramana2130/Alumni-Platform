import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import DonationForm from './DonationForm'


const UniversityAcceptDonationForm = () => {
  return (
    <div className='bg-[#111111] h-[100vh]'>
      <UniversityNavbar/>
      <div className='flex '>
      <Sidebar/>
    <div className='flex justify-center w-full'>
       <DonationForm/>
    </div>

      </div>

      
    </div>
  )
}

export default UniversityAcceptDonationForm
