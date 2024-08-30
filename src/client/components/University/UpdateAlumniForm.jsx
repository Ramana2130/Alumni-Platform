import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import add from '../../assets/add.svg';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateAluminiForm = () => {
  const [alumniname, setAlumniname] = useState('');
  const [department, setDepartment] = useState('');
  const [alumniemail, setAlumniemail] = useState('');
  const [yearofjoining, setYearofjoining] = useState('');
  const [passedoutyear, setPassedoutyear] = useState('');
  const [password, setPassword] = useState('');

  const { universityId, _id } = useParams();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Store universityId and _id in localStorage if available
  useEffect(() => {
    if (universityId && _id) {
      localStorage.setItem("universityId", universityId);
      localStorage.setItem('_id', _id);
    }
  }, [universityId, _id]);
  useEffect(() => {
    if (universityId && _id) {
      axios.get(`http://localhost:3000/alumni/${universityId}/alumnis`)
        .then(response => {
          const alumni = response.data.alumnis.find(alumni => alumni._id === _id);
          if (alumni) {
            setAlumniname(alumni.alumniname);
            setDepartment(alumni.department);
            setPassedoutyear(alumni.passedoutyear);
            setYearofjoining(alumni.yearofjoining);
            setPassword(alumni.password);
            setAlumniemail(alumni.alumniemail);
          }
        })
        .catch(error => console.log(error));
    }
  }, [universityId, _id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/alumni/${universityId}/update/${_id}`, {
        alumniname, alumniemail, yearofjoining, passedoutyear, department, password
      });
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Alumni Updated successfully");
        navigate(`/aluminilist/${universityId}`);
        setStep(3);
      }
    } catch (error) {
      toast.error("An error occurred while updating alumni");
      console.error(error);
    }
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const firstPage = () => {
    setStep(1);
  };

  const dashboard = () => {
    navigate(`/universitydashboard/${universityId}`);
  };

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6">
      <div className="flex mx-auto bg-[#1E1E1E] p-16 rounded-2xl justify-center items-center">
        <div className="relative w-[35%]">
          <div className="h-[700px] w-[500px] p-5">
            <h1 className="text-white font-semibold text-4xl uppercase">
              Let's Update Alumni <span className='text-[#CFF80B]'>Account!</span> 
            </h1>
            <div className='mt-24'>
              <img src={add} alt="" className='h-[300px]' />
            </div>
          </div>
        </div>

        <div id="back-div" className="w-[65%] flex justify-center rounded-[26px]">
          {/* Step 1 */}
          {step === 1 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div>
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Alumni Form
                </h1>

                <form className="space-y-4 w-[400px]">
                  <div className="mt-10 ">
                    <label htmlFor="alumniName" className="text-sm font-semibold text-[#87888C]">
                      Alumni Name
                    </label>
                    <input
                      name="alumniname"
                      id="alumniName"
                      value={alumniname}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="Alumni name"
                      onChange={(e) => setAlumniname(e.target.value)}
                      required
                    />
                    <div className="grid">
                      <label htmlFor="department" className="text-sm font-semibold text-[#87888C]">
                        Department
                      </label>
                      <select
                        className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 bg-[#111111] text-[#87888C] w-full"
                        name="department"
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      >
                        <option value="IT">IT</option>
                        <option value="CSE">CSE</option>
                        <option value="AIDS">AIDS</option>
                        <option value="MECH">MECH</option>
                      </select>
                    </div>
                    <label htmlFor="yearofjoining" className="text-sm font-semibold text-[#87888C]">
                      Year of Joining
                    </label>
                    <input
                      name="yearofjoining"
                      id="yearofjoining"
                      value={yearofjoining}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="Enter Year of Joining"
                      onChange={(e) => setYearofjoining(e.target.value)}
                      required
                    />
                    <button
                      className="bg-[#CFF80B] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                      type="button"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div>
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Alumni Form
                </h1>
                <button
                  className="bg-[#CFF80B] mt-5 px-5 py-2 shadow-lg p-2 text-black font-semibold rounded-lg hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                  onClick={handlePrev}
                  type="button"
                >
                  <i className="fa-solid fa-arrow-left text-xl"></i>
                </button>

                <form className="w-[400px]" onSubmit={handleSubmit}>
                  <div className="mt-10 ">
                    <label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                      Alumni Email
                    </label>
                    <input
                      name="alumniemail"
                      id="email"
                      value={alumniemail}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="email"
                      placeholder="Alumni email"
                      onChange={(e) => setAlumniemail(e.target.value)}
                      required
                    />
                    <label htmlFor="passout" className="text-sm font-semibold text-[#87888C]">
                      Passout Year
                    </label>
                    <input
                      name="passedoutyear"
                      id="passout"
                      value={passedoutyear}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="number"
                      placeholder="Passout year"
                      onChange={(e) => setPassedoutyear(e.target.value)}
                      required
                    />
                    
                    <label htmlFor="password" className="text-sm font-semibold text-[#87888C]">
                      Password
                    </label>
                    <input
                      name="password"
                      id="password"
                      value={password}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      className="bg-[#CFF80B] shadow-lg mt-10 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div className="text-center">
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Success!
                </h1>
                <p className="mt-4 text-lg text-[#CFF80B]">
                  Alumni account has been successfully created.
                </p>
                <div className="flex space-x-4">
                  <button
                    className="border-2 border-[#CFF80B] shadow-lg mt-10 p-2 text-[#CFF80B] font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                    type="button"
                    onClick={firstPage}
                  >
                    Add New
                  </button>
                  <button
                    className="bg-[#CFF80B] shadow-lg mt-10 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:border-2 hover:bg-transparent hover:border-[#87888C] transition duration-300 ease-in-out"
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

export default UpdateAluminiForm;
