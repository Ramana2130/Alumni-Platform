import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import CurrentstudentsForm from '../../components/University/CurrentStudentsForm'

const UniversityAddCurrentStudent = () => {
  return (
    <div className='bg-[#111111] h-screen'>
              <UniversityNavbar/>
              <div className='flex '>
      <Sidebar/>
      <CurrentstudentsForm/>

      </div>
   
    </div>
  )
}

export default UniversityAddCurrentStudent;
