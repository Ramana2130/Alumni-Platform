import React, { useState } from 'react';
import college from '../../assets/College.svg';

const UniversitySettingCard = () => {
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
              Profile <span className="text-[#CFF80B]">Setting!</span>
            </h1>
            <div className="mt-24">
              <img src={college} alt="Add icon" className="h-[400px]" />
            </div>
          </div>
        </div>

        <div id="back-div" className="w-[65%] flex justify-center rounded-[26px]">
          {step === 1 && (
            <div className="h-[700px] bg-[#111111] relative flex rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
            
              <div className="w-96 mx-auto shadow-xl hover:shadow">
          
                <div className="flex justify-end">
          
                </div>
                <div className="flex h-72 items-center">
                  <div>
                    <img className="w-72 mx-auto rounded mt-72 border-8  border-[#CDF80B]" src="data:image/jpeg;base64,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" alt="College logo" />
                    <div className="text-center text-white mt-14 text-3xl font-medium uppercase">
                      Sri Krishna Engineering College
                    </div>
                  </div>
                </div>
              </div>
              <button
                  className="bg-[#CFF80B] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-12 h-12 hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                  type="submit"
                  onClick={handleNext}
                  >
         <i className="fa-solid fa-pencil text-black"></i>
                  </button>
            </div>
          )}

          {step === 2 && (
            <div className="h-[700px] bg-[#111111] relative flex rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div className="w-full mx-auto shadow-xl hover:shadow">
              <h1 className="text-white font-extrabold text-6xl uppercase">
                  Update Profile
                </h1>

                {/* <div className="flex justify-end w-full  items-center mt-32">
              
                </div> */}
                <div className="flex h-72 mt-32 justify-center items-center">
                  <div className='flex-col flex'>
                    <label htmlFor="alumniName" className="text-2xl  font-semibold text-white">
                      University Name
                    </label>
                    <div className="">
                  <input
                    id="password"
                    className="border p-1 shadow-md placeholder:text-base text-white focus:outline-none bg-transparent border-t-0 border-r-0 border-l-0 border-b-1 mb-5  border-[#87888C] bg-  w-96"
                    type="text"
                    placeholder="university name"
                    required
                  />
                </div>
                  <label htmlFor="alumniName" className="text-2xl font-semibold text-white">
                      Upload Profile
                    </label>
                    <input type="file" className='border p-1 shadow-md placeholder:text-base text-white focus:outline-none bg-transparent border-t-0 border-r-0 border-l-0 border-b-1 mb-5  border-[#87888C] bg-  w-96' />
                    <label htmlFor="alumniName" className="text-2xl  font-semibold text-white">
                     Password
                    </label>
                    <div className="">
                  <input
                    id="password"
                    className="border p-1 shadow-md placeholder:text-base text-white focus:outline-none bg-transparent border-t-0 border-r-0 border-l-0 border-b-1 mb-5  border-[#87888C] bg-  w-96"
                    type="password"
                    placeholder="password"
                    required
                  />
                </div>
                      <button className="px-5 py-3 rounded-lg font-bold bg-[#CDF80B]" onClick={handlePrev}>
                   Update profile
                  </button>
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

export default UniversitySettingCard;
