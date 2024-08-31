import React from 'react'
import AluminiGrid from './AluminiGrid'
import AlumniNavbar from '../../components/Alumni/AlumniNavbar'
import Sidebar from '../../components/Alumni/Sidebar'

const AluminiDashboard = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
        <AlumniNavbar/>
        <div className='flex'>
          <Sidebar/>
          <div className='w-full flex justify-center'>
        <AluminiGrid/>

          </div>

        </div>
      
    </div>
  )
}

export default AluminiDashboard
