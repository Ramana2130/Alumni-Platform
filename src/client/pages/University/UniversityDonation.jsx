import React from 'react'
import Sidebar from '../../components/University/Sidebar'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import DonationDashboard from './DonationDashboard'


const UniversityDonation = () => {
  return (
    <div className='bg-[#111111] h-screen'>
      <UniversityNavbar/>

             <div className='flex '>
      <Sidebar/>
     <DonationDashboard/>

      </div>
      
    </div>
  )
}

export default UniversityDonation
