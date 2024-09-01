import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UniversityMiniStatement = () => {
  const [details, setDetails] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/current/getalljobs"
        );
        console.log(response.data.jobs);
        setDetails(response.data.jobs || []); // Ensure details is always an array
      } catch (error) {
        console.error("Error fetching job details data:", error);
        toast.error("Server Error");
      }
    };
    fetchData();
  }, []);

  return (
    <section className=" ">
      <div className="w-full xl:mb-0 mx-auto ">
        <div className="relative flex flex-col w-full rounded">
          <div className="rounded-t mb-0 py-3 border-0">
            <div className="flex flex-wrap ">
              <div className="relative w-full mx-5 flex-grow flex-1 ">
                <h3 className="font-semibold uppercase text-base text-[#87888C] mt-4">
                  Alumni Student
                </h3>
              </div>
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-[#CFF80B] text-black active:bg-[#505050] text-sm font-bold uppercase px-5 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-hidden">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Alumni Name
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Pass Out
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Department
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Register No
                  </th>
                </tr>
              </thead>
              <tbody>
                {details.length > 0 ? (
                  details.map((job, index) => (
                    <tr key={index}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white">
                        {job.alumniId ? job.alumniId.alumniname : "N/A"}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.alumniId ? job.alumniId.passedoutyear : "N/A"}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.alumniId ? job.alumniId.department : "N/A"}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.alumniId ? job.alumniId.alumniregisterno : "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                       <td colSpan="7" className="text-center font-medium text-lg text-[#CFF80B] py-4 ">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityMiniStatement;
