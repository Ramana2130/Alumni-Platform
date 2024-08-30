// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import add from '../../assets/money.svg';

// const StudentDonationForm = () => {
//   const [request, setRequest] = useState('');
//   const navigate = useNavigate();

  

//   return (
//     <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6 bg-[#1E1E1E]">
//       <div className="flex mx-auto bg-[#111111] p-10 rounded-2xl">
//         <div className="w-[50%] flex flex-col items-center">
//           <h1 className="text-white font-semibold text-3xl uppercase">
//             Let's request University <span className='text-[#FDE047]'>Student!</span>
//           </h1>
//           <img src={add} alt="Donation" className='h-[300px] mt-10' />
//         </div>

//         <div className="w-[50%] flex flex-col items-center">
//           <h1 className="text-white font-extrabold text-3xl uppercase mb-5">
//             Request Form
//           </h1>

//           <form action="#" method="post" className="space-y-4 w-[400px]">
//             <div>
//               <label htmlFor="suggestion" className="text-sm font-semibold text-[#87888C]">
//                 Suggestion
//               </label>
//               <textarea
//                 id="suggestion"
//                 className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
//                 placeholder="Enter Your Suggestions"
//                 required
//               />
//             </div>
//             <button
//               className="bg-[#FDE047] shadow-lg p-2 text-black font-semibold rounded-lg w-full hover:bg-[#1e90ff] transition duration-300 ease-in-out"
//               type="submit"
//             >
//               Submit your request..!
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDonationForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import add from '../../assets/money.svg'
const StudentDonationForm = () => {
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
          <h1 className="text-white font-semibold text-3xl uppercase">
           
Report any complaint or issue here
<span className='text-[#FDE047]'> Student!</span>
         </h1>
            <div className='mt-24'>

            <img src={add} alt="" className='h-[300px]' />
            </div>
 
          </div>
        </div>
         
        <div id="back-div" className="w-[65%] flex justify-center rounded-[26px]">

          {/* Top Navigation Buttons */}


          {step === 1 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div>
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Donation Form
                </h1>


                <form action="#" method="post" className="w-[400px]">
                  <div className="mt-10 ">
                   
                  <label htmlFor="suggestion" className="text-sm font-semibold text-[#87888C]">
                 Suggestion
               </label>
               <textarea
                 id="suggestion"
                 rows={5}
                 className="border-[#87888C] bg-transparent  border-2 p-3 shadow-lg mt-2 placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                 placeholder="Enter Your Suggestions"
                 required
               />
                   <button
                  className="bg-[#FDE047] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#FDE047] transition duration-300 ease-in-out"
                  type="submit"
                  onClick={handleNext}
                >
                  Submit Here
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
                <p className=" mt-4 text-lg text-[#FDE047]">University account donated has been successfully.</p>
                <div className='flex space-x-4'>

              
                <button
                  className="bg-[#FDE047] shadow-lg mt-10 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:border-2 hover:bg-transparent hover:border-[#87888C] transition duration-300 ease-in-out"
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

export default StudentDonationForm;
