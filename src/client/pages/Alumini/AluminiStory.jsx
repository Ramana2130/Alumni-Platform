import React from 'react'
import AlumniNavbar from '../../components/Alumni/StudentNavbar'
import Sidebar from '../../components/Alumni/Sidebar'
import AluminiStoryForm from './AluminiStoryForm'

const AluminiStory = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
        <AlumniNavbar/>
        <div className='flex'>
            <Sidebar/>
            <AluminiStoryForm/>

        </div>

      
    </div>
  )
}

export default AluminiStory
