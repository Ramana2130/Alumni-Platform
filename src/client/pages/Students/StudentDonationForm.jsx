import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import add from "../../assets/money.svg";
import axios from "axios";
import toast from "react-hot-toast";

const StudentDonationForm = () => {
  const [suggestion, setSuggestion] = useState("");
  const [studentInfo, setStudentInfo] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const universityId = localStorage.getItem("universityId");
        const studentId = localStorage.getItem("_id");
        const response = await axios.get(
          `http://localhost:3000/university/${universityId}/student/${studentId}`
        );
        setStudentInfo(response.data.students);
      } catch (error) {
        toast.error("Failed to load student information.");
      }
    };

    fetchStudentInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentInfo) {
      toast.error("Student information is not available.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/student/addstudent",
        {
          universityId: studentInfo.universityId,
          currentstudentsname: studentInfo.name,
          currentstudentsregisterno: studentInfo.registrationNo,
          currentstudentsdepartment: studentInfo.department,
          currentstudentsyearofjoining: studentInfo.yearOfJoining,
          currentstudentsyearofpassing: studentInfo.yearOfPassing,
          email: studentInfo.email,
          suggestion,
        }
      );

      if (response.data.success) {
        setStep(3); // Move to success step
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the request.");
    }
  };

  if (!studentInfo) {
    return <div>Loading...</div>; // Or some loading spinner
  }

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6">
      <div className="flex mx-auto bg-[#1E1E1E] p-16 rounded-2xl justify-center items-center">
        <div className="relative w-[40%]">
          <div className="h-[700px] w-[500px]  p-5">
            <h1 className="text-white font-semibold text-3xl uppercase">
              Report any complaint or issue here
              <span className="text-yellow-500"> Student!</span>
            </h1>
            <img src={add} alt="" className="h-[300px] mt-24" />
          </div>
        </div>

        {step === 1 && (
          <div className="w-[60%] flex flex-col items-start">
            <h1 className="text-white font-extrabold text-3xl uppercase mb-5">
              Request Form
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 w-[500px]">
              <div>
                <label
                  htmlFor="suggestion"
                  className="text-sm font-semibold text-[#87888C]"
                >
                  Suggestion
                </label>
                <textarea
                  name="suggestion"
                  id="suggestion"
                  className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                  placeholder="Enter Your Suggestions"
                  onChange={(e) => setSuggestion(e.target.value)}
                  required
                />
              </div>

              <button
                className="bg-yellow-500 shadow-lg p-2 text-black font-semibold rounded-lg w-full hover:bg-[#1e90ff] transition duration-300 ease-in-out"
                type="submit"
              >
                Submit your request..!
              </button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <h1 className="text-white font-extrabold text-6xl uppercase">
              Success!
            </h1>
            <p className="mt-4 text-lg text-yellow-500">
              Your donation has been successfully processed.
            </p>
            <div className="flex space-x-4">
              <button
                className="bg-yellow-500 shadow-lg p-2 text-black font-semibold rounded-lg w-full hover:bg-[#1e90ff] transition duration-300 ease-in-out"
                onClick={() => navigate('/thankyou')}
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDonationForm;
