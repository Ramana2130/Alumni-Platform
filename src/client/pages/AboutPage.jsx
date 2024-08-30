import React from 'react'
import flowchart from '../assets/flowchart.png'
import Navbar from '../components/Navbar'
const AboutPage = () => {
  return (
    <div className='container mx-auto'>
        <Navbar/>
        <div className="mt-24 text-center ">
          <h2 className="mb-6 text-xl text-grey font-extrabold md:text-4xl lg:text-7xl">About Us</h2>
          <p className="text-grey font-medium text-xl">
          The solution is a comprehensive Alumni Association platform designed for the Government Engineering College, featuring both web and mobile applications. This platform aims to enhance alumni engagement by offering user-friendly registration, a secure donation portal, a networking hub, job search and posting features, an alumni directory, success story tracking, event management, and feedback channels. By prioritizing user experience, security, and scalability, the platform will foster stronger connections, encourage philanthropic support, promote career advancement, and build a vibrant alumni community, ultimately enriching the institution's legacy and educational experience.
          </p>
        </div>
<div className='flex justify-center'>

      <img src={flowchart} alt="" className='h-[55vh] flex justify-center' />
</div>
    </div>
  )
}

export default AboutPage
