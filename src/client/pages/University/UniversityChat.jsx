import React from 'react'
import UniversityNavbar from '../../components/University/UniversityNavbar'
import Sidebar from '../../components/University/Sidebar'
import Chat from './Chat'

const UniversityChat = () => {
  return (
    <div className='bg-[#111111] h-screen'>
    <UniversityNavbar/>
    <div className='flex '>
<Sidebar/>
<Chat/>

</div>

</div>
  )
}

export default UniversityChat
