import { DataTable } from '@/components/alumni/sidebar/data-table'
import React from 'react'
import data from "../../components/data/data.json"
import { Dock } from 'lucide-react'
const StudentsJobApplyPage = () => {
  return (
    <div className='py-5'>
        {/* <div className='py-4 px-8 font-bold text-2xl tracking-tight flex gap-2 items-center'>
            <Dock />
            <h1>Apply Jobs</h1>
        </div> */}
         <DataTable
          data={data.map((item) => ({
            ...item,
            hiringStatus: item.hiringStatus === 'Open' ? 'Open' : 'Closed',
          }))}
        />
    </div>
  )
}

export default StudentsJobApplyPage