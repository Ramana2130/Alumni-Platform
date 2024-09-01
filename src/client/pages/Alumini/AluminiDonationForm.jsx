import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import add from '../../assets/money1.svg'
const AluminiDonationForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const firstpage = () => {
    setStep((prevStep) => 1);
  };
  const navigate = useNavigate()
  const dashboard = ()=>{
      navigate('/aluminidashboard')
  }

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6">
      <div className="flex mx-auto bg-[#1E1E1E] p-16 rounded-2xl justify-center items-center">
        <div className="relative w-[35%]">
          <div className="h-[700px] w-[500px] p-5">
            <h1 className="text-white font-semibold text-4xl w-[500px] uppercase">
 
              Let's Donation University <span className='text-[#2596be]'>Account!</span> 
            </h1>
            <div className='mt-24'>

            <img src={add} alt="" className='h-[300px]' />
            </div>
 
          </div>
        </div>
         
        <div id="back-div" className="w-[65%] flex justify-center rounded-[26px]">

          {/* Top Navigation Buttons */}

          {step === 1 && (
            <div className="h-[700px] bg-[#111111]  relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div>
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Donation Form
                </h1>

                <form action="#" method="post" className="space-y-4 w-[400px]">
                  <div className="mt-10 ">
                    <label htmlFor="alumniName" className="text-sm font-semibold text-[#87888C]">
                      Your Name
                    </label>
                    <input
                      id="StudentName"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="your name"
                      required
                    />
                    {/* <div className="grid">
                      <label htmlFor="department" className="text-sm font-semibold text-[#87888C]">
                        Department
                      </label>
                      <input
                      id="department"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="department"
                      required
                    />
                    </div>
                    <label htmlFor="passout" className="text-sm font-semibold text-[#87888C]">
                       Year
                    </label>
                    <input
                      id="passout"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="number"
                      placeholder="year"
                      required
                    /> */}
                     <label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                      Mobile No
                    </label>
                    <input
                      id="mobileno"
                      
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="number"
                      placeholder=" mobile no"
                      required
                    />
                     <button
                  className="bg-[#2596be] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                  type="submit"
                  onClick={handleNext}
                >
                  Verify the correct details
                </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div>
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Donation Form
                </h1>
                <button
                className="bg-[#2596be] mt-5 px-5 py-2 shadow-lg p-2 text-black font-semibold rounded-lg hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                onClick={handlePrev}
                type="button"
              >
               <i class="fa-solid fa-arrow-left text-xl"></i>
              </button>

                <form action="#" method="post" className="w-[400px]">
                  <div className="mt-10 ">
                   
                    <label htmlFor="password" className="text-sm font-semibold text-[#87888C]">
                      Amount Donated
                    </label>
                    <input
                      id="password"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="number"
                      placeholder="$"
                      required
                    />
                   <button
                  className="bg-[#2596be] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                  type="submit"
                  onClick={handleNext}
                >
                  Verify the correct details
                </button>
                  </div>
                </form>

                              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div className="text-center">
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Success!
                </h1>
                <p className=" mt-4 text-lg text-[#2596be]">University account donated has been successfully.</p>
                <div className='flex space-x-4'>

              
                <button
                  className="bg-[#2596be] shadow-lg mt-10 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:border-2 hover:bg-transparent hover:border-[#87888C] transition duration-300 ease-in-out"
                  type="button"
                  onClick={dashboard}
                >
                  Go to  Home Page
                </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AluminiDonationForm;
