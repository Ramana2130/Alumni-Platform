import React from 'react'
import AlumniNavbar from '../../components/Alumni/AlumniNavbar'
import Sidebar from '../../components/Alumni/Sidebar'
import Chat from './Chat'

const AluminiChat = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
    <AlumniNavbar/>
    <div className='flex'>
        <Sidebar/>
        <Chat/>

    </div>

  
</div>
  )
}

export default AluminiChat
