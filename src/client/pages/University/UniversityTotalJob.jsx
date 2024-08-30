import React from 'react'
import radio from '../../assets/radio.svg'
const UniversityTotalJob = () => {
  return (
    <div className='h-[200px]  '>
        <div className='mt-5'>
            <h1 className='text-white font-semibold text-2xl uppercase'>Jobs</h1>
            <h1 className='text-[#87888C] font-semibold text-sm uppercase'>Total jobs</h1>
            <div className='flex justify-between w-[450px]'>
            <h1 className='text-white font-semibold text-7xl uppercase'>550 <i class="fa-solid fa-computer text-4xl"></i></h1>
            <i class="fa-solid fa-compass text-7xl text-[#CFF80B]"></i>
            </div>
            <h1 className='text-white font-semibold text-xl uppercase'>Years</h1>
            <div className='flex justify-between w-3/4'>
            <h1>1994</h1>
            <h1>2024</h1>


            </div>
            <img src={radio} alt="" className='w-3/4' />

        </div>
    </div>
  )
}

export default UniversityTotalJob
