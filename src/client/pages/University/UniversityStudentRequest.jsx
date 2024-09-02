import React from 'react'
import Sidebar from '../../components/University/Sidebar'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import UniversityStudentRequestList from '../../components/University/UniversityStudentRequestList'


const UniversityStudentRequest = () => {
  return (
    <div className='bg-[#111111] h-screen'>
      <UniversityNavbar/>

             <div className='flex '>
      <Sidebar/>
      <div className='flex w-full justify-center'>
        
        <UniversityStudentRequestList/>
              </div>

      </div>
      
    </div>
  )
}

export default UniversityStudentRequest
