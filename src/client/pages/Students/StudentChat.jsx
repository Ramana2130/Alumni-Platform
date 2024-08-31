import React from 'react'

import Chat from './Chat'
import StudentNavbar from '../../components/Students/StudentNavbar';

import Sidebar from '../../components/Students/Sidebar'

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
