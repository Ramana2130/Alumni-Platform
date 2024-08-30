import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import UpdateAluminiForm from '../../components/University/UpdateAlumniForm'

const UpdateAlumnidetails = () => {
  return (
    <div className='bg-[#111111] h-screen'>

<UniversityNavbar/>
<div className='flex '>
      <Sidebar/>
      {/* <AluminiForm/> */}
      <div className='flex w-full justify-center'>
        
<UpdateAluminiForm/>
      </div>
      </div>
    </div>
  )
}

export default UpdateAlumnidetails
