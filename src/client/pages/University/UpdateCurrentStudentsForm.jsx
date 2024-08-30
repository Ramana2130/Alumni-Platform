import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import add from '../../assets/add.svg';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateCurrentStudentsForm = () => {
  const [currentstudentsname, setCurrentstudentsname] = useState('');
  const [currentstudentsregisterno, setCurrentstudentsregisterno] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [currentstudentsdepartment, setCurrentstudentsdepartment] = useState('');
  const [currentstudentsyearofjoining, setCurrentstudentsyearofjoining] = useState('');
  const [currentstudentsyearofpassing, setCurrentstudentsyearofpassing] = useState('');
  const [email, setEmail] = useState('');

  const { universityId, _id } = useParams();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Store universityId and _id in localStorage if available
  useEffect(() => {
    if (universityId && _id) {
      localStorage.setItem('universityId', universityId);
      localStorage.setItem('_id', _id);
    }
  }, [universityId, _id]);

  // Fetch the student details on component mount or when universityId or _id changes
  useEffect(() => {
    if (universityId && _id) {
      axios.get(`http://localhost:3000/student/${universityId}/students`)
        .then(response => {
          const student = response.data.students.find(student => student._id === _id);
          if (student) {
            setCurrentstudentsname(student.currentstudentsname);
            setCurrentstudentsdepartment(student.currentstudentsdepartment);
            setCurrentstudentsyearofjoining(student.currentstudentsyearofjoining);
            setCurrentstudentsyearofpassing(student.currentstudentsyearofpassing);
            setCurrentstudentsregisterno(student.currentstudentsregisterno);
            setEmail(student.email);
            setHashedPassword(student.hashedPassword);
          }
        })
        .catch(error => console.log(error));
    }
  }, [universityId, _id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/student/${universityId}/update/${_id}`, {
        currentstudentsname,
        currentstudentsregisterno,
        hashedPassword,
        currentstudentsdepartment,
        currentstudentsyearofjoining,
        currentstudentsyearofpassing,
        email,
      });
      if (response.status === 200) {
        toast.success('Student Updated successfully');
        // Refetch the updated student details
        axios.get(`http://localhost:3000/student/${universityId}/students`)
          .then(response => {
            const updatedStudent = response.data.students.find(student => student._id === _id);
            console.log(updatedStudent)
            if (updatedStudent) {
              setCurrentstudentsname(updatedStudent.currentstudentsname);
              setCurrentstudentsdepartment(updatedStudent.currentstudentsdepartment);
              setCurrentstudentsyearofjoining(updatedStudent.currentstudentsyearofjoining);
              setCurrentstudentsyearofpassing(updatedStudent.currentstudentsyearofpassing);
              setCurrentstudentsregisterno(updatedStudent.currentstudentsregisterno);
              setEmail(updatedStudent.email);
              setHashedPassword(updatedStudent.hashedPassword);
            }
          })
          .catch(error => console.log(error));
        setStep(3); // Move to the success step
      }
    } catch (error) {
      toast.error('An error occurred while updating the student');
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
              Let's Update Student <span className='text-[#CFF80B]'>Account!</span> 
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
                  Student Form
                </h1>

                <form className="space-y-4 w-[400px]">
                  <div className="mt-10 ">
                    <label htmlFor="currentstudentsname" className="text-sm font-semibold text-[#87888C]">
                      Student Name
                    </label>
                    <input
                      name="currentstudentsname"
                      id="currentstudentsname"
                      value={currentstudentsname}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="Student name"
                      onChange={(e) => setCurrentstudentsname(e.target.value)}
                      required
                    />
                    <div className="grid">
                      <label htmlFor="department" className="text-sm font-semibold text-[#87888C]">
                        Department
                      </label>
                      <select
                        className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 bg-[#111111] text-[#87888C] w-full"
                        name="currentstudentsdepartment"
                        id="currentstudentsdepartment"
                        value={currentstudentsdepartment}
                        onChange={(e) => setCurrentstudentsdepartment(e.target.value)}
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
                      name="currentstudentsyearofjoining"
                      id="currentstudentsyearofjoining"
                      value={currentstudentsyearofjoining}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="Enter Year of Joining"
                      onChange={(e) => setCurrentstudentsyearofjoining(e.target.value)}
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
                  Student Form
                </h1>
                <button
                  className="bg-[#CFF80B] mt-5 px-5 py-2 shadow-lg p-2 text-black font-semibold rounded-lg hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                  onClick={handlePrev}
                  type="button"
                >
                  <i className="fa-solid fa-arrow-left text-xl"></i>
                </button>

                <form className="space-y-4 w-[400px]">
                  <div className="mt-5 ">
                    <label htmlFor="yearofpassing" className="text-sm font-semibold text-[#87888C]">
                      Year of Passing
                    </label>
                    <input
                      name="currentstudentsyearofpassing"
                      id="currentstudentsyearofpassing"
                      value={currentstudentsyearofpassing}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="Enter Year of Passing"
                      onChange={(e) => setCurrentstudentsyearofpassing(e.target.value)}
                      required
                    />

                    <label htmlFor="registerno" className="text-sm font-semibold text-[#87888C]">
                      Register Number
                    </label>
                    <input
                      name="currentstudentsregisterno"
                      id="currentstudentsregisterno"
                      value={currentstudentsregisterno}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="Enter Register Number"
                      onChange={(e) => setCurrentstudentsregisterno(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="text-sm font-semibold text-[#87888C]">
                      Email
                    </label>
                    <input
                      name="email"
                      id="email"
                      value={email}
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <button
                      className="bg-[#CFF80B] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                      onClick={handleSubmit}
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div>
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Account Updated!
                </h1>
                <button
                  className="bg-[#CFF80B] shadow-lg mt-5 p-2 text-black font-semibold rounded-lg hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                  type="button"
                  onClick={firstPage}
                >
                  Go to First Page
                </button>
                <button
                  className="bg-[#CFF80B] shadow-lg mt-5 p-2 text-black font-semibold rounded-lg hover:scale-100 hover:bg-[#CFF80B] transition duration-300 ease-in-out"
                  type="button"
                  onClick={dashboard}
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateCurrentStudentsForm;
