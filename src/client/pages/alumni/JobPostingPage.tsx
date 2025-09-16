import JobApplyForm from '@/components/alumni/job-posting/JobApplyForm'
import { DataTable } from '@/components/alumni/sidebar/data-table'
import React from 'react'
import data from '../../components/data/data.json'
import { JobPostingChart } from '@/components/alumni/job-posting/JobPostingChart'

const JobPostingPage = () => {
  return (
    <div className='py-6'>
        {/* <JobApplyForm /> */}
        <div className='px-4 lg:px-6 mb-6'>
        <JobPostingChart />
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