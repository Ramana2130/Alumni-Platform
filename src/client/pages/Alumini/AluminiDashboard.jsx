import React from 'react'
import AluminiGrid from './AluminiGrid'
import AlumniNavbar from '../../components/Alumni/AlumniNavbar'

const AluminiDashboard = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
        <AlumniNavbar/>
        <AluminiGrid/>
      
    </div>
  )
}

export default AluminiDashboard
