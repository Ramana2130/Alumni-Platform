import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import add from '../../assets/money.svg';
import axios from 'axios';
import toast from 'react-hot-toast';

// Example function to fetch student info from an API
const fetchStudentInfo = async () => {
  try {
    const universityId = localStorage.getItem("universityId");
    const studentId = localStorage.getItem("_id");
    const response = await axios.get(`http://localhost:3000/university/${universityId}/student/${studentId}`); 
    console.log(response.data.students);// Replace with your endpoint
    return response.data.students;
  } catch (error) {
    console.error('Error fetching student info:', error);
    throw new Error('Unable to fetch student information.');
  }
};

const StudentDonationForm = () => {
  const [suggestion, setSuggestion] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch student info when component mounts
    const loadStudentInfo = async () => {
      try {
        const info = await fetchStudentInfo();
        setStudentInfo(info);
      } catch (error) {
        toast.error('Failed to load student information.');
      }
    };

    loadStudentInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentInfo) {
      toast.error('Student information is not available.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/student/addstudent', {
        universityId: studentInfo.universityId,
      currentstudentsname: studentInfo.name,
      currentstudentsregisterno: studentInfo.registrationNo,
      currentstudentsdepartment: studentInfo.department,
      currentstudentsyearofjoining: studentInfo.yearOfJoining,
      currentstudentsyearofpassing: studentInfo.yearOfPassing,
      email: studentInfo.email,
      suggestion
      });

      if (response.data.success) {
        toast.success('Request submitted successfully!');
        navigate('/success'); // Replace with actual path
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting the request:', error);
      toast.error('An error occurred while submitting the request.');
    }
  };

  if (!studentInfo) {
    return <div>Loading...</div>; // Or some loading spinner
  }

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

          <form onSubmit={handleSubmit} className="space-y-4 w-[400px]">
            <div>
              <label htmlFor="suggestion" className="text-sm font-semibold text-[#87888C]">
                Suggestion
              </label>
              <textarea
                name='suggestion'
                id="suggestion"
                className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                placeholder="Enter Your Suggestions"
                onChange={(e) => setSuggestion(e.target.value)}
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
