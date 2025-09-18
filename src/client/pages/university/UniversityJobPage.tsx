import { DataTable } from '@/components/university/sidebar/data-table'
import data from '../../components/data/data.json'

import React from 'react'
import { UniversityJobList } from '@/components/university/UniversityJobList'

const UniversityJobPage = () => {
  return (
    <div className='py-6 bg-gray-100'>
        <div className='pb-4 px-8 text-2xl font-bold tracking-tight text-emerald-700'>
            <h1>Job Listings</h1>
        </div>
         {/* <DataTable
          data={data.map((item) => ({
            ...item,
            hiringStatus: item.hiringStatus === 'Open' ? 'Open' : 'Closed',
          }))}
        /> */}
        <div className=''>
          <UniversityJobList />
        </div>
    </div>
  )
}

export default UniversityJobPage