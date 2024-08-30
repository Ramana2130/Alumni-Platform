import React from 'react'
import Sidebar from '../../components/Alumni/Sidebar'
import Chat from './Chat'
import StudentNavbar from '../../components/Alumni/StudentNavbar'

const StudentChat = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
    <StudentNavbar/>
    <div className='flex'>
        <Sidebar/>
        <Chat/>

    </div>

  
</div>
  )
}

export default StudentChat
