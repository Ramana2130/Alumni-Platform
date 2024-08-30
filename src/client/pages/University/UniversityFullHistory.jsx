import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import UniversityDonationFullStatement from '../../components/University/UniversityDonationFullStatement'

const UniversityFullHistory = () => {
  return (
    <div className='bg-[#111111] h-screen'>
    <UniversityNavbar/>

           <div className='flex '>
    <Sidebar/>
 <UniversityDonationFullStatement/>

    </div>
    
  </div>
  )
}

export default UniversityFullHistory
