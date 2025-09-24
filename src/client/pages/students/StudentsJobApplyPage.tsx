import { DataTable } from '@/components/alumni/sidebar/data-table'
import React from 'react'
import data from "../../components/data/data.json"
import { Dock } from 'lucide-react'
import { StudentJobList } from '@/components/students/StudentJobList'
const StudentsJobApplyPage = () => {
  return (
    <div className='py-2 bg-gray-100'>
      {/* <h1 className="px-8 font-bold text-2xl tracking-tight py-2 text-[#e7000b]">Job List</h1> */}
        <StudentJobList />
    </div>
  )
}

export default StudentsJobApplyPage