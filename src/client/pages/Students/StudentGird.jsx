import React from 'react'

import StudentProfile from './StudentProfile'
import Sidebar from '../../components/Students/Sidebar'

const StudentGrid = () => {
  return (
    <div className="flex p-4 h-[85vh] bg-[#111111] justify-center gap-5 px-14 py-5">
    <div className="relative h-[85vh] w-[8vw] rounded-2xl">
        <Sidebar />
    </div>



    <div className="relative  p-5  h-[85vh] w-[70vw] rounded-2xl bg-[#1E1E1E]">
        <StudentProfile />
    </div>
</div>
  )
}

export default StudentGrid
