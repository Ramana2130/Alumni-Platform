import React from 'react'
import about from '../assets/about.svg'
import Navbar from '../components/Navbar'
const AboutPage = () => {
  return (
    <div className='mt-10 mx-auto'>
        <div className="mx-44 ">
          <div className='flex'>
        <button className="mb-6 text-xl  font-extrabold text-center bg-yellow-500 text-black p-2  md:text-4xl lg:text-5xl">
            About <span className="text-yel"></span>{" "}
          </button>
          <p className="text-grey ml-10 pt-5 font-medium  w-[45%]  text-white">
          Real-Life Impact of the Alumni Association Platform
          </p>
          </div>
          <div className=' flex'>
            <div className='w-[50%] rounded-lg flex items-center'>
              <div className='text-black text-xl font-medium bg-yellow-500 py-10 rounded-lg px-5'>
                <h1>Welcome to the Alumni Association platform, a dynamic space designed to bridge the gap between current students and successful alumni. Our mission is to empower students by connecting them with experienced professionals who can provide invaluable guidance, mentorship, and support.
                </h1>
                <h1 className='pt-5'>Through our platform, alumni share their personal and professional journeys, offering insights that inspire and guide students in their academic and career paths. Additionally, our donation feature allows alumni to contribute financially to students in need, ensuring that financial barriers do not hinder educational success.</h1>
</div>
            </div>
            <div className='w-[50%] flex justify-center'>
              <img src={about} alt="" />
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default AboutPage
