import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import add from "../../assets/form.svg";
import toast from "react-hot-toast";
<<<<<<< HEAD
=======

>>>>>>> a272a499c2890163b67abdf44b977e2e1fafecea
const AluminiStoryForm = () => {
  const [step, setStep] = useState(1);
  const { _id } = useParams();

  const [about, setAbout] = useState("");
  const [nationality, setNationality] = useState("");
  const [currentstatus, setCurrentstatus] = useState("");
  const [currentcity, setCurrentcity] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [role, setRole] = useState("");
  const [successstories, setSuccessstories] = useState("");
  const [fromlearn, setFromlearn] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const alumniId = localStorage.getItem("_id");
      const response = await axios.post(
        `http://localhost:3000/current/personaldetails/${alumniId}`,
        {
          about,
          city: currentcity,
          nationality,
          currentstatus,
          currentcity,
          companyname,
          role,
          successstories,
          fromlearn,
        }
      );
      if (response.status === 200) {
        toast.success("Submitted successfully");
        navigate(`/aluminidashboard/${alumniId}`);
      }
    } catch (error) {
      toast.error("An error occurred while adding data");
      console.error(error);
    }
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const firstpage = () => {
    setStep(1);
  };

  const dashboard = () => {
    navigate(`/aluminidashboard/${_id}`);
  };

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center p-6">
      <div className="flex mx-auto bg-[#1E1E1E] p-16 rounded-2xl justify-center items-center">
        <div className="relative w-[35%]">
          <div className="h-[700px] w-[500px] p-5">
            <h1 className="text-white font-semibold text-5xl uppercase">
              Let's fill <span className="text-[#2596be]"> form!</span>
            </h1>
            <p className="text-red-500 w-[60%]">
              If already submitted these details, ignore this form.
            </p>
            <div className="mt-24">
              <img src={add} alt="" className="h-[300px]" />
            </div>
          </div>
        </div>

        <div
          id="back-div"
          className="w-[65%] flex justify-center rounded-[26px]"
        >
          <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
            <div>
              <h1 className="text-white font-extrabold text-6xl uppercase">
                Personal Details
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 w-[500px]">
                {/* Step 1 */}
                {step === 1 && (
                  <div>
                    <div className="mt-10">
                      <label
                        htmlFor="about"
                        className="text-sm font-semibold text-[#87888C]"
                      >
                        About
                      </label>
                      <input
                        name="about"
                        id="about"
                        className="border-[#87888C] text-white bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                        type="text"
                        placeholder="Eg: Developer, Tester, manager"
                        onChange={(e) => setAbout(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nationality"
                        className="text-sm font-semibold text-[#87888C]"
                      >
                        Nationality
                      </label>
                      <input
                        name="nationality"
                        id="nationality"
                        className="border-[#87888C] text-white bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                        type="text"
                        placeholder="Enter Nationality"
                        onChange={(e) => setNationality(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="text-sm font-semibold text-[#87888C]"
                      >
                        City
                      </label>
                      <input
                        name="city"
                        id="city"
                        className="border-[#87888C] text-white bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                        type="text"
                        placeholder="Enter Current city"
                        onChange={(e) => setCurrentcity(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="companyname"
                        className="text-sm font-semibold text-[#87888C]"
                      >
                        Company Name
                      </label>
                      <input
                        name="companyname"
                        id="companyname"
                        className="border-[#87888C] text-white bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                        type="text"
                        placeholder="Enter Current Working company"
                        onChange={(e) => setCompanyname(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      className="bg-[#2596be] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                      type="button"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div>
                    <button
                      className="bg-[#2596be] px-3 shadow-lg mt-10 p-2 text-black font-semibold rounded-lg  hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                      type="button"
                      onClick={handlePrev}
                    >
                      <i className="fa-solid fa-arrow-left text-xl"></i>
                    </button>
                    <div className="mt-10">
                      <label
                        htmlFor="currentstatus"
                        className="text-sm font-semibold text-[#87888C]"
                      >
                        Current Status
                      </label>
                      <select
                        className="border-[#87888C] text-white bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                        name="currentstatus"
                        id="currentstatus"
                        onChange={(e) => setCurrentstatus(e.target.value)}
                        required
                      >
                        <option value="Working">Working</option>
                        <option value="High Studies">High Studies</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="companyname"
                        className="text-sm font-semibold text-[#87888C]"
                      >
                        Company Name
                      </label>
                      <input
                        name="role"
                        id="role"
                        className="border-[#87888C] text-white bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                        type="text"
                        placeholder="Enter Current Role"
                        onChange={(e) => setRole(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="successstories"
                        className="text-sm font-semibold text-[#87888C]"
                      >
                        Story
                      </label>
                      <textarea
                        className="border-[#87888C] bg-transparent rounded-lg border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                        name="successstories"
                        rows={5}
                        id="successstories"
                        placeholder="Enter success stories"
                        onChange={(e) => setSuccessstories(e.target.value)}
                      />
                    </div>

                    <button
                      className="bg-[#2596be] shadow-lg mt-3 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                      type="button"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div>
                    <button
                      className="bg-[#2596be] shadow-lg mt-10 p-2 text-black font-semibold rounded-lg px-3 hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                      type="button"
                      onClick={handlePrev}
                    >
                      <i className="fa-solid fa-arrow-left text-xl"></i>
                    </button>
                    <div className="mt-10">
                      <label
                        htmlFor="fromlearn"
                        className="text-sm font-semibold text-[#87888C]"
                      >
                        Tips
                      </label>
                      <textarea
                        className="border-[#87888C] bg-transparent rounded-lg border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                        name="fromlearn"
                        rows={5}
                        id="fromlearn"
                        placeholder="Enter what you have learned from your experience"
                        onChange={(e) => setFromlearn(e.target.value)}
                      />
                    </div>

                    <button
                      className="bg-[#2596be] shadow-lg mt-8   p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AluminiStoryForm;
