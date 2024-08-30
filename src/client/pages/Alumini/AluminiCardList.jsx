import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import add from '../../assets/mega.svg'
import AluminiListCard from '../../components/Alumni/AluminiListCard';
const AluminiCardList = () => {
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
        <div className="relative h-[70vh] overflow-x-auto scrollbar_blue w-[75vw]">
            <div className='flex justify-between mx-10'>
        <h1 className='text-white font-semibold text-4xl uppercase my-5'>Alumni list</h1>
        <i class="fa-solid fa-user-group text-[#2596be] text-4xl"></i>

            </div>
          
        <AluminiListCard/>   
    
        </div>
      
      </div>
    </div>
  );
};

export default AluminiCardList;
