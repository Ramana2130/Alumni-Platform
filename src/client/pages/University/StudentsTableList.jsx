import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import CurrentStudentsTableList from '../../components/University/CurrentStudentsTableList'

const StudentsTableList = () => {
  return (
    <div className='bg-[#111111] h-screen'>

<UniversityNavbar/>
<div className='flex '>
      <Sidebar/>
      {/* <AluminiForm/> */}
      <div className='flex w-full justify-center'>
        
<CurrentStudentsTableList/>
      </div>
      </div>
    </div>
  )
}

export default StudentsTableList
