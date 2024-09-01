import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import add from '../../assets/form.svg'
const AluminiStoryForm = () => {
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
      navigate('/universitydashboard')
  }

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6">
      <div className="flex mx-auto bg-[#1E1E1E] p-16 rounded-2xl justify-center items-center">
        <div className="relative w-[35%]">
          <div className="h-[700px] w-[500px] p-5">
            <h1 className="text-white  font-semibold text-5xl uppercase">
 
              Let's  fill <span className='text-[#2596be]'>  form!</span> 
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
                 Personal Form
                </h1>

                <form action="#" method="post" className="space-y-4  w-[500px]">
                  <div className="mt-10 ">
                    <label htmlFor="alumniName" className="text-sm font-semibold text-[#87888C]">
                      Alumni Name
                    </label>
                    <input
                      id="alumniName"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="alumni name"
                      required
                    />
                    <div className="grid">
                      <label htmlFor="department" className="text-sm font-semibold text-[#87888C]">
                        About
                      </label>
                      <input
                      id="alumniName"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="about"
                      required
                    />
                    </div>
                    <label htmlFor="passout" className="text-sm font-semibold text-[#87888C]">
                      City
                    </label>
                    <input
                      id="passout"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="city"
                      required
                    />
                     <label htmlFor="passout" className="text-sm font-semibold text-[#87888C]">
                      Mobile
                    </label>
                    <input
                      id="passout"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="number"
                      placeholder="mobile no"
                      required
                    />
                     <button
                  className="bg-[#2596be] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                  type="submit"
                  onClick={handleNext}
                >
                  Next
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
                  Personal Form
                </h1>
                <button
                className="bg-[#2596be] mt-5 px-5 py-2 shadow-lg p-2 text-black font-semibold rounded-lg hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                onClick={handlePrev}
                type="button"
              >
               <i class="fa-solid fa-arrow-left text-xl"></i>
              </button>

                <form action="#" method="post" className="w-[500px]">
                  <div className="mt-10 ">
                    <label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                     Current Status
                    </label>
                    <select
                        className="border-[#87888C] bg- border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 bg-[#111111] text-[#87888C] w-full"
                        name="department"
                        id="department"
                      >
                        <option value="Working">Working</option>
                        <option value="High Studies">High Studies</option>
       


                        
                      </select>
                      <label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                    Story
                    </label>
                    <textarea
                        className="border-[#87888C] bg-  rounded-lg border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 bg-[#111111] text-[#87888C] w-full"
                        name="department"
                        rows={5}
                        id="department"
                    />
                  
                  </div>
                </form>

                <button
                  className="bg-[#2596be] shadow-lg mt-10 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                  type="submit"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div>
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Personal Form
                </h1>
                <button
                className="bg-[#2596be] mt-5 px-5 py-2 shadow-lg p-2 text-black font-semibold rounded-lg hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                onClick={handlePrev}
                type="button"
              >
               <i class="fa-solid fa-arrow-left text-xl"></i>
              </button>

                <form action="#" method="post" className="w-[500px]">
                  <div className="mt-10 ">
                    
                
                    <label htmlFor="confirmPassword" className="text-sm font-semibold text-[#87888C]">
                    Tips
                    </label>
                    <textarea
                        className="border-[#87888C] bg-  rounded-lg border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 bg-[#111111] text-[#87888C] w-full"
                        name="department"
                        rows={2}
                        id="department"
                    />
                    {/* <label htmlFor="password" className="text-sm font-semibold text-[#87888C]">
                      Salary
                    </label>
                    <input
                      id="password"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="Salary"
                      required
                    /> */}
                  </div>
                </form>

                <button
                  className="bg-[#2596be] shadow-lg mt-10 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                  type="submit"
                  onClick={handleNext}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="h-[700px] w-[450px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div className="text-center">
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Success!
                </h1>
                <p className=" mt-4 text-lg text-[#2596be]">Story  has been successfully created.</p>
                <div className='flex space-x-4'>

                <button
                  className="border-2 border-[#2596be] shadow-lg mt-10 p-2 text-[#2596be] font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                  type="button"
                  onClick={firstpage}
                >
                  Add New
                </button>
                <button
                  className="bg-[#2596be] shadow-lg mt-10 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:border-2 hover:bg-transparent hover:border-[#87888C] transition duration-300 ease-in-out"
                  type="button"
                  onClick={dashboard}
                >
                  Go to Dashboard
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

export default AluminiStoryForm;
