import React, { useState } from 'react';
import Sidebar from '../../components/Students/Sidebar';
import StudentNavbar from '../../components/Students/StudentNavbar';
import AluminiProfile from './AluminiProfile';

const StudentAluminiProfile = () => {
    return (<div className='bg-[#111111] h-[100vh] overflow-hidden'>
        <StudentNavbar/>
    <div className="flex p-4 h-[85vh] justify-center gap-5 px-14 py-5 ">
    <div className="relative h-[85vh] w-[8vw] rounded-2xl">
        <Sidebar />
    </div>

 <div className="relative  p-5  h-[85vh] w-[70vw] scrollbar_yellow overflow-x-auto rounded-2xl bg-[#1E1E1E]">
       
    {/* <div className='w-full'>
      
      <div className='flex'>
          <div className='w-1/2'>
            <div className='p-3'>
              <h1 className='text-[#EAB308] text-2xl font-semibold'>Personal Details</h1>
              <div className='mt-5 flex'>
                <img src={women} alt="Profile" className='size-80 rounded-2xl'/>
                <div className='mx-5 mt-5 w-full'>
                  <h1 className='text-[#87888C] font-bold text-sm uppercase'>Name</h1>
                  <p className='text-white font-medium uppercase text-lg'>kabi krishna</p>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Gender</h1>
                  <p className='text-white font-medium uppercase text-lg'>Male</p>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Date of birth</h1>
                  <p className='text-white font-medium uppercase text-lg'>08/03/2005</p>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Nationality</h1>
                  <p className='text-white font-medium uppercase text-lg'>India</p>
                </div>
              </div>
              <div className='mt-5 flex space-x-10'>
                <div className='w-1/2'>
                  <h1 className='text-[#EAB308] text-2xl font-semibold'>Address</h1>
                  <div className='mx-5 mt-5 w-full'>
                    <h1 className='text-[#87888C] font-bold text-sm uppercase'>Address Line</h1>
                    <p className='text-white font-medium uppercase text-lg'>9/196A Annamalai nagar street</p>
                    <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>City</h1>
                    <p className='text-white font-medium uppercase text-lg'>Udumalpet</p>
                    <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>State</h1>
                    <p className='text-white font-medium uppercase text-lg'>Tamil Nadu</p>
                    <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Country</h1>
                    <p className='text-white font-medium uppercase text-lg'>India</p>
                  </div>
                </div>
                <div className='w-1/2'>
                  <h1 className='text-[#EAB308] text-2xl font-semibold'>Contact Details</h1>
                  <div className='mt-5 w-full'>
                    <div className='mx-5'>
                      <h1 className='text-[#87888C] font-bold text-sm uppercase'>Phone Number</h1>
                      <p className='text-white font-medium uppercase text-lg'>1234567890</p>
                      <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Email</h1>
                      <p className='text-white font-medium uppercase text-lg'>kabikrishna@gmail.com</p>
                    </div>
                    <h1 className='text-white mt-5 text-2xl font-semibold'>Skills</h1>
                    <div className='mx-5'>
                      <ul className='mt-5 space-y-3 font-medium'>
                        <li className='flex items-start mt-5 lg:col-span-1 lg:mt-0'>
                          <div className='flex-shrink-0'>
                            <svg className='w-5 h-5 text-[#EAB308]' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
                            </svg>
                          </div>
                          <p className='ml-3 leading-5 text-white'>Node Js</p>
                        </li>
                        <li className='flex items-start mt-5 lg:col-span-1 lg:mt-0'>
                          <div className='flex-shrink-0'>
                            <svg className='w-5 h-5 text-[#EAB308]' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
                            </svg>
                          </div>
                          <p className='ml-3 leading-5 text-white'>React Js</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

        <div className='w-1/2'>
          <div className='p-3'>
            <div className='flex justify-between'>
              <h1 className='text-[#EAB308] text-2xl font-semibold'>University Details</h1>
         
            </div>

            <div className='mx-5 mt-5 w-full'>
              <h1 className='text-[#87888C] font-bold text-sm uppercase'>University Name</h1>
              <p className='text-white font-medium uppercase text-lg'>Sri Krishna Enginnering College</p>
              <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Department</h1>
              <p className='text-white font-medium uppercase text-lg'>Information Technology</p>
              <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Location</h1>
              <p className='text-white font-medium uppercase text-lg'>Coimbatore</p>
              <div className='flex space-x-10'>
                <div>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Join In</h1>
                  <p className='text-white font-medium uppercase text-lg'>2018</p>
                </div>
                <div>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Pass Out</h1>
                  <p className='text-white font-medium uppercase text-lg'>2022</p>
                </div>
              </div>
            </div>
            <h1 className='text-[#EAB308] mt-10 text-2xl font-semibold'>Your Stories</h1>

            <div className='mx-5 mt-5 w-full'>
              <h1 className='text-[#87888C] font-bold text-sm uppercase'>Tell Your Story</h1>
              <textarea
                className='border-[#87888C] rounded-lg border-2 shadow-lg placeholder:text-base outline-none mb-2 bg-transparent text-[#87888C] w-[580px]'
                name='story'
                rows={7}
                id='story'
                readOnly
              />
              <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Tips</h1>
              <textarea
                className='border-[#87888C] rounded-lg border-2 shadow-lg placeholder:text-base outline-none mb-2 bg-transparent text-[#87888C] w-[580px]'
                name='tips'
                rows={3}
                id='tips'
                readOnly
              />
            </div>
     
          </div>
        </div>
      </div>
       



    </div> */}
    <AluminiProfile/>
    </div>

</div>
</div>

  )
}
export default StudentAluminiProfile;
