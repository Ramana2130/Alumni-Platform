import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import AluminiForm from '../../components/University/AluminiForm'

const UniversityAddAlumini = () => {
  return (
    <div className='bg-[#111111] h-screen'>
              <UniversityNavbar/>
              <div className='flex '>
      <Sidebar/>
      <AluminiForm/>

      </div>
   
    </div>
  )
}

export default UniversityAddAlumini
