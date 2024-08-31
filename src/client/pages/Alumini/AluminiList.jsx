import React from 'react'
import AlumniNavbar from '../../components/Alumni/AlumniNavbar'
import Sidebar from '../../components/Alumni/Sidebar'
import AluminiStoryForm from './AluminiStoryForm'
import AluminiCardList from './AluminiCardList'

const AluminiList = () => {
  return (
    <div className='bg-[#111111] h-[100vh] overflow-hidden'>
    <AlumniNavbar/>
    <div className='flex'>
        <Sidebar/>
        <AluminiCardList/>

    </div>

  
</div>
  )
}

export default AluminiList
