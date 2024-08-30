import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import UniversitySettingCard from './UniversitySettingCard'

const UniversitySetting = () => {

  return (
    <div className='bg-[#111111] h-screen'>
    <UniversityNavbar/>

           <div className='flex '>
    <Sidebar/>
    <UniversitySettingCard/>

    </div>
    
  </div>
  )
}

export default UniversitySetting
