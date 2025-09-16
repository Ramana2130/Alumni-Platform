import JobApplyForm from '@/components/alumni/job-posting/JobApplyForm'
import { DataTable } from '@/components/alumni/sidebar/data-table'
import React from 'react'
import data from '../../components/data/data.json'

const JobPostingPage = () => {
  return (
    <div className='py-6'>
        {/* <JobApplyForm /> */}
        <DataTable
          data={data.map((item) => ({
            ...item,
            hiringStatus: item.hiringStatus === 'Open' ? 'Open' : 'Closed',
          }))}
        />
    </div>
  )
}

export default JobPostingPage