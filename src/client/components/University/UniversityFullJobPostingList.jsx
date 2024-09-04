import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UniversityFullJobPostingList = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/current/getalljobs"
        );
        setJobData(response.data.jobs);
      } catch (error) {
        console.error("Error fetching job details data:", error);
        toast.error("Server Error");
      }
    };
    fetchJobDetails();
  }, []);

  return (
    <section className="mt-10 w-[80%] bg-[#1E1E1E] rounded-2xl">
      <div className="w-full  xl:mb-0 mx-auto">
        <div className="relative flex flex-col w-full rounded">
          <div className="block w-full overflow-x-auto pt-5">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr className="text-white">
                  <th className="px-6 text-white align-middle py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Alumni Name
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Company Name
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Role
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Work Type
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Job Location
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Apply URL
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Date Posted
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobData.length > 0 ? (
                  jobData.map((job) => (
                    <tr key={job._id} className="">
                      <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                        {job.alumniId.alumniname}
                      </td>
                      <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                        {job.companyname}
                      </td>
                      <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                        {job.role}
                      </td>
                      <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                        {job.jobworktype}
                      </td>
                      <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                        {job.joblocation}
                      </td>
                      <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-lg font-medium text-blue-600">
                        <a
                          href={job.applyurl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {job.applyurl}
                        </a>
                      </td>
                      <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                        {new Date(job.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center font-medium text-lg text-[#CFF80B] py-4 "
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityFullJobPostingList;
