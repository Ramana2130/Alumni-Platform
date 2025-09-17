import { DataTable } from '@/components/university/sidebar/data-table'
import data from '../../components/data/data.json'

import React from 'react'

const UniversityJobPage = () => {
  return (
    <div className='py-6'>
        <div className='py-3 px-8 text-2xl font-bold tracking-tight'>
            <h1>Job Listings</h1>
        </div>
         <DataTable
          data={data.map((item) => ({
            ...item,
            hiringStatus: item.hiringStatus === 'Open' ? 'Open' : 'Closed',
          }))}
        />
    </div>
  )
}

export default UniversityJobPage