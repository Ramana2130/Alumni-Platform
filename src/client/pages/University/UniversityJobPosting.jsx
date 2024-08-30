import React from 'react'
import UniversityJobPostingTable from '../../components/University/UniversityJobPostingTable'

const UniversityJobPosting = () => {
  return (
    <div className='p-2  h-[20vh]'>
        <div className='flex w-72 justify-between'>
            <h1 className='text-white font-semibold text-4xl uppercase'>Job Hire</h1>
            <i class="fa-solid fa-bolt text-4xl text-[#CFF80B]"></i>

        </div>
            <h1 className='text-[#87888C] font-semibold text-sm uppercase'>Details</h1>
      <UniversityJobPostingTable/>
    </div>
  )
}

export default UniversityJobPosting
