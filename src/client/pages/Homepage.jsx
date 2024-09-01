import React from 'react'
import graduate from '../assets/graduate.svg'
import Navbar from '../components/Navbar'
import box from '../assets/box.png'
import arrow from '../assets/arrow.svg'
import { useNavigate } from 'react-router-dom'
import card from '../assets/card.svg'
import OurTeam from './OurTeam'
import ServicePage from './ServicePage'
import CaseStudies from './CaseStudies'
import AboutPage from './AboutPage'
import FooterPage from './FooterPage'
const Homepage = () => {
  const navigate=useNavigate();
  const page=()=>{
        navigate('/studentloginpage')
  }
  const learnmore=()=>{
    navigate('/aboutpage')
}
  return (
    <div className='scrollbar_yellow'>

    <div className=' relative black '>
      <Navbar/>
      <div className='absolute blur-sm top-96 right-44' style={{ transform: 'rotate(15deg)' }}>
            <img src={card} alt="" />
        </div>
        <div className='absolute blur-sm top-72 z-50 left-44' style={{ transform: 'rotate(-25deg)' }}>
   <img src={card} alt="" />
        </div>
        <div className='absolute blur-sm bottom-52 z-50 left-[1100px]' style={{ transform: 'rotate(-25deg)' }}>
   <img src={card} alt="" />
        </div>
        <div className='absolute blur-sm -top-10 z-50 left-[700px]' style={{ transform: 'rotate(-25deg)' }}>
   <img src={card} alt="" />
        </div>
      {/* <Payment/> */}
      <div className=' h-[90vh] relative '>
        <div className='text-center h-[40vh]  relative pt-36'>

      <h1 className='text-6xl font-thin sans text-white z'>From    <span className='text-yellow-500'>Alumni </span>Dreams to Your Reality</h1>
      <h1 className='text-6xl font-thin sans text-white mt-5'> Shape Your<span className='text-yellow-500'>Future</span> .</h1>
      <p className='text-lg font-medium  text-white mt-8 '>Your dream job is out there  let us help you discover it.</p>
      <div className='absolute left-[500px] top-[500px]'>
      <img src={arrow} alt="" className='h-28' />
      </div>
        </div>

            <div className="absolute left-[780px] mt-5">
				<button  onClick={page} type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-yellow-500 hover:bg-white hover:text-black text-white">Get started</button>
				<button onClick={learnmore} type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded text-yellow-500 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white border-yellow-500 border-2">Learn more</button>
			</div>
          <div className='absolute -bottom-24'>
                <img src={box} alt="" className='h-[220px] w-screen'/>                

          </div>
      </div>
    <div className='mt-10 pt-20 bg-black'>
      <ServicePage/>
      <CaseStudies/>
      <AboutPage/>
      <OurTeam/>
      <FooterPage/>

    </div>
    </div>
    </div>

  )
}

export default Homepage
