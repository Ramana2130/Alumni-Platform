import React from 'react'
import graduate from '../assets/graduate.svg'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Payment from './Payment'
const Homepage = () => {
  const navigate=useNavigate();
  const page=()=>{
        navigate('/aluminiloginpage')
  }
  const learnmore=()=>{
    navigate('/aboutpage')
}
  return (
    <div className='overflow-hidden h-[100vh]'>
      <Navbar/>
      {/* <Payment/> */}
      <div className=' h-[90vh] relative '>
            <img src={graduate} alt="" className='h-full mx-auto w-full'  />
            <div className="absolute left-[830px] bottom-64">
				<button  onClick={page} type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-black hover:bg-yellow-500 text-white">Get started</button>
				<button onClick={learnmore} type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded hover:bg-yellow-500 hover:border-yellow-500 hover:text-white border-black border-2">Learn more</button>
			</div>
      </div>
    </div>
  )
}

export default Homepage
