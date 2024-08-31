import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import add from "../../assets/mega.svg";
import axios from "axios";
import toast from "react-hot-toast";

const AluminiJobForm = () => {
  const [companyname, setCompanyname] = useState("");
  const [role, setRole] = useState("");
  const [joblocation, setJoblocation] = useState("");
  const [applyurl, setApplyUrl] = useState("");
  const [jobworktype, setJobworktype] = useState("full time");
  const { _id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const alumniId = localStorage.getItem("_id");
      const response = await axios.post(
        `http://localhost:3000/current/personaldetails/${alumniId}`,
        {
          companyname,
          role,
          joblocation,
          applyurl,
          jobworktype,
        }
      );
      if (response.status === 200) {
        toast.success("Job Posted successfully");
      }
    } catch (error) {
      toast.error("An error occurred while posting Job");
      console.error(error);
    }
  };

  const [step, setStep] = useState(1);

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
              Let's create Job <span className="text-[#2596be]">Posting!</span>
            </h1>
            <div className="mt-24">
              <img src={add} alt="" className="h-[300px]" />
            </div>
          </div>
        </div>

        <div
          id="back-div"
          className="w-[65%] flex justify-center rounded-[26px]"
        >
          {step === 1 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div>
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Let's create job
                </h1>

                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="post"
                  className="space-y-4 w-[500px]"
                >
                  <div className="mt-10 ">
                    <label
                      htmlFor="companyName"
                      className="text-sm font-semibold text-[#87888C]"
                    >
                      Company Name
                    </label>
                    <input
                      name="companyname"
                      id="companyname"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="Company Name"
                      onChange={(e) => setCompanyname(e.target.value)}
                      required
                    />
                    <div className="grid">
                      <label
                        htmlFor="role"
                        className="text-sm font-semibold text-[#87888C]"
                      >
                        Role
                      </label>
                      <input
                        name="role"
                        id="role"
                        className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                        type="text"
                        placeholder="Role"
                        onChange={(e) => setRole(e.target.value)}
                        required
                      />
                    </div>
                    <label
                      htmlFor="jobLocation"
                      className="text-sm font-semibold text-[#87888C]"
                    >
                      Location
                    </label>
                    <input
                      name="joblocation"
                      id="joblocation"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="text"
                      placeholder="Location"
                      onChange={(e) => setJoblocation(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="jobLocation"
                      className="text-sm font-semibold text-[#87888C]"
                    >
                      Apply Url
                    </label>
                    <input
                      name="applyurl"
                      id="applyurl"
                      className="border-[#87888C] bg-transparent border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-5 text-[#87888C] w-full"
                      type="url"
                      placeholder="Enter Apply url"
                      onChange={(e) => setApplyUrl(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="jobWorkType"
                      className="text-sm font-semibold text-[#87888C]"
                    >
                      Job Work Type
                    </label>
                    <select
                      name="jobworktype"
                      id="jobworktype"
                      className="border-[#87888C] bg-transparent border-2 p-3 shadow-lg outline-none mb-5 text-[#87888C] w-full"
                      onChange={(e) => setJobworktype(e.target.value)}
                      required
                    >
                      <option value="full time">Full Time</option>
                      <option value="part time">Part Time</option>
                      <option value="internship">Internship</option>
                    </select>
                    <button
                      className="bg-[#2596be] shadow-lg mt-2 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:bg-[#2596be] transition duration-300 ease-in-out"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="h-[700px] bg-[#111111] relative flex items-center rounded-[20px] xl:p-10 2xl:p-16 lg:p-10 md:p-10 sm:p-2">
              <div className="text-center">
                <h1 className="text-white font-extrabold text-6xl uppercase">
                  Success!
                </h1>
                <p className="mt-4 text-lg text-[#2596be]">
                  Job Posting has been successfully created.
                </p>
                <div className="flex space-x-4">
                  <button
                    className="border-2 border-[#2596be] shadow-lg mt-10 p-2 text-[#2596be] font-semibold rounded-lg w-full hover:scale-100 hover:text-black hover:bg-[#2596be] transition duration-300 ease-in-out"
                    type="button"
                    onClick={firstpage}
                  >
                    Add New
                  </button>
                  <button
                    className="bg-[#2596be] shadow-lg mt-10 p-2 text-black font-semibold rounded-lg w-full hover:scale-100 hover:border-2 hover:bg-transparent hover:border-[#2596be] transition duration-300 ease-in-out"
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

export default AluminiJobForm;
