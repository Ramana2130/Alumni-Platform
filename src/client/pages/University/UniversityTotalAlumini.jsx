import React from 'react'
import radio from '../../assets/radio.svg'
import { useNavigate } from 'react-router-dom'
const UniversityTotalAlumini = ({id}) => {
  const navigate=useNavigate()
  const alumni=()=>{
    navigate(`/aluminilist/${id}`)
  }
  
  return (
    <div className='h-[200px]  '>
        <div className='mt-5'>
          <div className='flex  justify-between'>
            <h1 className='text-white font-semibold text-2xl uppercase'>Aluminis</h1>
            <button
            onClick={alumni}
                  className="bg-[#CFF80B] text-black active:bg-[#505050] text-sm font-bold uppercase px-5 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
          </div>
            <h1 className='text-[#87888C] font-semibold text-sm uppercase'>Total Alumini</h1>
            <div className='flex justify-between w-[450px]'>
            <h1 className='text-white font-semibold text-7xl uppercase'>175 <i class="fa-solid fa-users text-4xl"></i></h1>
            <i class="fa-solid fa-people-group text-7xl text-[#CFF80B]"></i>
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

export default UniversityTotalAlumini
