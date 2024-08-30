import React from 'react';
import studentlogin from '../../assets/aluminiLoginpage.png';
import Graduation from '../../assets/Graduation.png';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Tab from '../../components/Tab';
import { useNavigate } from 'react-router-dom';
const AluminiLoginPage = () => {
  const navigate=useNavigate()
  const dashboard=()=>{
    navigate('/aluminidashboard')
  } 
  return (
    <div className='alumni'>
      <Navbar />
      <div className='flex justify-center shadow-2xl bg-[#111111]'>
        

        <div
          id="back-div"
          className="h-[90vh] w-[50%]  flex justify-end items-center rounded-[26px]"
        >
          <div className="h-[700px]  relative shadow-custom-shadow  border-r-0 flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
          <div className='absolute top-3 right-8'>
            <Tab/>

          </div>
            <div>
              <h1 className="pt-8 pb-6 font-extrabold text-white text-6xl text-center cursor-default">
                Login
              </h1>
              <form action="#" method="post" className="space-y-4 w-[400px]">
                <div className="mb-5 mt-10">
                  <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-5  border-[#87888C]   w-96"
                    type="text"
                    placeholder="Alumni Email"
                    required
                  />
                </div>
                {/* <div className="mb-5 mt-10">
                  <input
                    id="email"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 border-r-0 border-l-0 border-b-1 mb-5  border-[#87888C] bg-  w-96"
                    type="email"
                    placeholder="University Email"
                    required
                  />
                </div> */}
                <div className="">
                  <input
                    id="password"
                    className="border p-1 shadow-md placeholder:text-base bg-transparent border-t-0 border-r-0 border-l-0 border-b-1 mb-5  border-[#87888C] bg-  w-96"
                    type="password"
                    placeholder="password"
                    required
                  />
                </div>
                <a
                  className="group text-[#87888C] transition-all duration-100 ease-in-out"
                  href="#"
                >
                  <span className="bg-left-bottom bg-gradient-to-r text-sm bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Forget your password?
                  </span>
                </a>
                <button
                onClick={dashboard}
                  className="bg-[#2596be] shadow-lg mt-24 p-2 text-black font-bold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                  type="submit"
                >
                  Login
                </button>
              </form>
         
            </div>
          </div>
        </div>
        <div className="relative shadow-custom-shadow flex justify-start items-center w-[50%]  bg-[#4cb5db]">
          <div className="absolute bottom-40 left-44">
            <img src={Graduation} alt="" className="h-[300px]" />
          </div>
          <img
            src={studentlogin}
            className="rounded-3xl h-[700px] shadow-2xl"
            alt="Login Illustration"
          />
        </div>
      </div>
    
    </div>
  );
};

export default AluminiLoginPage;
