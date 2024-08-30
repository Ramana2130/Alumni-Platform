import React from 'react'
import AlumniNavbar from '../../components/Alumni/StudentNavbar'
import Sidebar from '../../components/Alumni/Sidebar'
import AluminiSettingCard from './AluminiSettingCard'

const AluminiSetting = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
    <AlumniNavbar/>
    <div className='flex'>
        <Sidebar/>
        <AluminiSettingCard/>

    </div>

  
</div>
  )
}

export default AluminiSetting
