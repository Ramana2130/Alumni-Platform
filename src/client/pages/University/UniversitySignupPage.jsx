import React, { useState } from 'react';
import UniversityLogin from '../../assets/UniversityLogin.png';
import Smart from '../../assets/Smart .png';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import Tab from '../../components/Tab';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const UniversitySignupPage = () => {
  const [universityid, setUniversityId] = useState("");
  const [universitypassword, setUniversitypassword] = useState("");
  const navigate=useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/university/addcollege", {
        universityid,
        universitypassword
      })
      console.log(response)
      if(response.status === 200) {
        toast.success("University Registered Successfully")
        navigate('/universitydashboard')
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Username already exists.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  }
  return (
    <div className='bg'>
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
                Sign Up
              </h1>
              <form onSubmit={handleSubmit} action="#" method="post" className="space-y-4 w-[400px]">
                <div className="mb-5 mt-10">
                  <input
                  name='universityid'
                    id="universityid"
                    className="border  p-1 shadow-md placeholder:text-base border-t-0 bg-transparent focus:outline-none text-white border-r-0 border-l-0 border-b-1 mb-5  border-[#87888C]   w-96"
                    type="text"
                    placeholder="University Email"
                    onChange={(e) => setUniversityId(e.target.value)}
                    required
                  />
                </div>
                <div className="">
                  <input
                  name='universitypassword'
                    id="universitypassword"
                    className="border  p-1 shadow-md placeholder:text-base bg-transparent focus:outline-none text-white border-t-0 border-r-0 border-l-0 border-b-1 mb-5  border-[#87888C] bg-  w-96"
                    type="password"
                    placeholder="password"
                    onChange={(e) => setUniversitypassword(e.target.value)}
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
                  className="bg-[#CFF80B] shadow-lg mt-24 p-2 text-black font-bold rounded-lg w-full hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <div className="flex flex-col text-[#87888C] mt-10 items-center justify-center text-sm">
                <h3>
                  Already have an account?
                  <a
                    className="group text-[#CFF80B] ml-2 font-bold transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <Link
                      to="/universityLoginpage"
                      className="bg-left-bottom bg-gradient-to-r bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Sign in
                    </Link>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shadow-custom-shadow flex justify-start items-center w-[50%]  bg-[#DBF851]">
          <div className="absolute bottom-40 left-16">
            <img src={Smart} alt="" className="h-[500px]" />
          </div>
          <img
            src={UniversityLogin}
            className="rounded-3xl h-[680px] shadow-2xl"
            alt="Login Illustration"
          />
        </div>
      </div>
    
    </div>
  );
};

export default UniversitySignupPage;
