import React from 'react'

const CaseStudies = () => {
  return (
    <div className=" p-5">
        <div>
        <div className="mx-40 flex">
          <button className="mb-6 text-xl  font-extrabold text-center bg-yellow-500 text-black p-2  md:text-4xl lg:text-5xl">
            Case Studies <span className="text-yel"></span>{" "}
          </button>
          <p className="text-grey ml-10 pt-5 font-medium  w-[45%]  text-white">
          Real-Life Impact of the Alumni Association Platform
          </p>
        </div>
        <div className='mx-40 p-2'>
            <div className='p-3 grid grid-cols-3 gap-10 rounded-md py-8 bg-yellow-500'>
                    <div className='border-r-2 border-black p-3'>
                        <h1 className='text-2xl  font-extrabold'>Empowering Students Through Alumni Guidance</h1>
                        <p className='font-medium pt-5'>Student, a Computer Science student, connected with alumni at top tech firms through our platform. Their advice and job links helped her land an internship, showcasing the value of alumni mentorship.</p>
                    </div>
                    <div className='border-r-2 border-black p-3'>
                        <h1 className='text-2xl  font-extrabold'>Financial Support for Students in Need</h1>
                        <p className='font-medium pt-5'>Student, an engineering student facing financial hardships, received crucial support from alumni through our donation feature, covering his tuition and living expenses, and keeping him on track for graduation.</p>
                    </div>
                    <div className='border-r-2 border-black p-3'>
                        <h1 className='text-2xl  font-extrabold'>Streamlined Account Management</h1>
                        <p className='font-medium pt-5'>Student, an engineering student facing financial hardships, received crucial support from alumni through our donation feature, covering his tuition and living expenses, and keeping him on track for graduation.</p>
                    </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default CaseStudies
