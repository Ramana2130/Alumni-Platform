import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import add from '../../assets/money.svg';

const StudentDonationForm = () => {
  const [request, setRequest] = useState('');
  const navigate = useNavigate();

  

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6 bg-[#1E1E1E]">
      <div className="flex mx-auto bg-[#111111] p-10 rounded-2xl">
        <div className="w-[50%] flex flex-col items-center">
          <h1 className="text-white font-semibold text-3xl uppercase">
            Let's request University <span className='text-[#2596be]'>Student!</span>
          </h1>
          <img src={add} alt="Donation" className='h-[300px] mt-10' />
        </div>

        <div className="w-[50%] flex flex-col items-center">
          <h1 className="text-white font-extrabold text-3xl uppercase mb-5">
            Request Form
          </h1>

          <form action="#" method="post" className="space-y-4 w-[400px]">
            <div>
              <label htmlFor="suggestion" className="text-sm font-semibold text-[#87888C]">
                Suggestion
              </label>
              <textarea
                id="suggestion"
                className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                placeholder="Enter Your Suggestions"
                required
              />
            </div>
            <button
              className="bg-[#2596be] shadow-lg p-2 text-black font-semibold rounded-lg w-full hover:bg-[#1e90ff] transition duration-300 ease-in-out"
              type="submit"
            >
              Submit your request..!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentDonationForm;
