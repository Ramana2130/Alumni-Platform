import { DataTable } from '@/components/alumni/sidebar/data-table'
import React from 'react'
import data from '../../components/data/data.json'
import { JobPostingChart } from '@/components/alumni/job-posting/JobPostingChart'
import { JobApplyForm } from '@/components/alumni/job-posting/JobApplyForm'

const JobPostingPage = () => {
  return (
    <div className='py-6'>
        {/* <JobApplyForm /> */}
        <div className='px-4 pb-12'>
        {/* <JobPostingChart /> */}
        <JobApplyForm />
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

export default JobPostingPage