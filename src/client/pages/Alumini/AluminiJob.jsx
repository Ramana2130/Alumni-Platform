import React from 'react'
import AlumniNavbar from '../../components/Alumni/AlumniNavbar'
import Sidebar from '../../components/Alumni/Sidebar'
import AluminiJobForm from './AluminiJobForm'



const AluminiJob = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
    <AlumniNavbar/>
    <div className='flex'>
        <Sidebar/>
        <AluminiJobForm/>
      

    </div>

  
</div>
  )
}

export default AluminiJob
