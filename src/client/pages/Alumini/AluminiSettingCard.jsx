import React, { useState } from 'react';
import college from '../../assets/profile.svg';
import women from '../../assets/women.png';

const AluminiSettingCard = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    console.log('Next button clicked');
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    console.log('Prev button clicked');
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6">
      <div className="flex mx-auto bg-[#1E1E1E] p-16 rounded-2xl justify-center items-center">
        <div className="relative w-[35%]">
          <div className="h-[700px] w-[500px] p-5">
            <h1 className="text-white font-semibold text-4xl uppercase">
              Profile <span className="text-[#2596be]">Setting!</span>
            </h1>
            <div className="mt-24">
              <img src={college} alt="Add icon" className="h-[400px]" />
            </div>
          </div>
        </div>

        <div id="back-div" className="w-[65%] flex justify-center rounded-[26px]">
          {step === 1 && (
            <div className="h-[700px] bg-[#111111] scrollbar  overflow-x-auto relative flex rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div className="w-[450px] mx-auto shadow-xl hover:shadow">
                <div className="flex h-72 items-center">
                  <div className='p-5'>
                    <img className="size-44 mx-auto rounded-full mt-96 border-8 border-[#2596be]" src={women} alt="College logo" />
                    <div className="mx-auto">
                      <div className=" text-center p-5">
                        <h1 className="font-light text-[#87888C] text-3xl">
                          Personal Information
                        </h1>
                      </div>
                      <form >
                      <label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                      Name
                    </label>
                    <input
                      id="name"
                      
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="name"
                      required
                    />
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
                        <label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                     Location
                    </label>
                    <input
                      id="location"
                      
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="location"
                      required
                    />

<label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={3}
                      className="border-[#87888C] bg-transparent  rounded-xl border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="bio"
                      required
                    /><label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                    Current Working
                  </label>
                  <input
                    id="working"
                    
                    className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                    type="text"
                    placeholder="company name"
                    required
                  />
                        <div>
                          {/* <button
                            type="submit"
                            className="hover:shadow-form w-full rounded-md bg-[#2596be] py-3 px-8 text-center text-base font-semibold text-black hover:bg-transparent hover:border hover:border-black hover:text-black outline-none"
                          >
                            Update Profile
                          </button> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
                <button
                  className="bg-[#2596be] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-12 h-12 hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                  type="button"
                  onClick={handleNext}
                >
                  <i className="fa-solid fa-pencil text-black"></i>
                </button>
            </div>
          )}
          {step === 2 && (
            <div className="h-[700px] bg-[#111111]  overflow-x-auto scrollbar relative flex rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div className="w-[450px] mx-auto shadow-xl hover:shadow">
                <div className="flex h-72 items-center">
                  <div className='p-5'>
                    <img className="size-44 mx-auto rounded-full mt-[500px] border-8 border-[#2596be]" src={women} alt="College logo" />
                    <div className="mx-auto">
                      <div className=" text-center p-5">
                        <h1 className="font-light text-[#87888C] text-3xl">
                          Personal Information
                        </h1>
                      </div>
                      <form >
                      <label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                      Name
                    </label>
                    <input
                      id="name"
                      
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="name"
                      required
                    />
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
                        <label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                     Location
                    </label>
                    <input
                      id="location"
                      
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="location"
                      required
                    />

<label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={3}
                      className="border-[#87888C] bg-transparent  rounded-xl border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="bio"
                      required
                    /><label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                    Current Working
                  </label>
                  <input
                    id="working"
                    
                    className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                    type="text"
                    placeholder="company name"
                    required
                  />
                        <div>
                          <button
                            type="submit"
                            className="hover:shadow-form w-full rounded-md bg-[#2596be] py-3 px-8 text-center text-base font-semibold text-black hover:bg-transparent hover:border hover:border-black hover:text-black outline-none"
                          >
                            Update Profile
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
                
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AluminiSettingCard;
