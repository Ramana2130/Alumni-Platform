import React from 'react'
import UniversityJobPostingTable from '../../components/University/UniversityJobPostingTable'
import { useNavigate } from 'react-router-dom'
const UniversityJobPosting = () => {
  const navigate=useNavigate()
  const alumni=()=>{
    navigate('/alumnijobposting')
  }
  return (
    <div className='p-5  h-[20vh]'>
        <div className='flex  justify-between'>
            <h1 className='text-white font-semibold text-4xl uppercase'>Job Hire</h1>
            <button
            onClick={alumni}
                  className="bg-[#CFF80B] text-black active:bg-[#505050] text-sm font-bold uppercase px-5 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>

        </div>
            <h1 className='text-[#87888C] font-semibold text-sm uppercase'>Details</h1>
      <UniversityJobPostingTable/>
    </div>
  )
}

export default UniversityJobPosting
