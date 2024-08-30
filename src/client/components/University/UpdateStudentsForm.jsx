import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import UpdateCurrentStudentsForm from '../../pages/University/UpdateCurrentStudentsForm'

const UpdateStudentsForm = () => {
  return (
    <div className='bg-[#111111] h-screen'>

<UniversityNavbar/>
<div className='flex '>
      <Sidebar/>
      {/* <AluminiForm/> */}
      <div className='flex w-full justify-center'>
        
<UpdateCurrentStudentsForm/>
      </div>
      </div>
    </div>
  )
}

export default UpdateStudentsForm;
