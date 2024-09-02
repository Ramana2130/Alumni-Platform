import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import AluminiListTable from '../../components/University/AluminiListTable'
import UniversityFullJobPostingList from '../../components/University/UniversityFullJobPostingList'

const UniversityAlumniList = () => {
  return (
    <div className='bg-[#111111] h-screen'>

<UniversityNavbar/>
<div className='flex '>
      <Sidebar/>
      {/* <AluminiForm/> */}
      <div className='flex w-full justify-center '>
        
<UniversityFullJobPostingList/>
      </div>
      </div>
    </div>
  )
}

export default UniversityAlumniList
