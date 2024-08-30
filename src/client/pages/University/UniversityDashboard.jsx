import React from 'react'
import Sidebar from '../../components/University/Sidebar'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import UniversityFund from './UniversityFund'

const UniversityDashboard = () => {
  return (
    <div className='bg-[#111111] h-[100vh]'>
      <UniversityNavbar/>
      <div className='flex '>
      <Sidebar/>
      <UniversityFund/>

      </div>
    </div>
  )
}

export default UniversityDashboard
