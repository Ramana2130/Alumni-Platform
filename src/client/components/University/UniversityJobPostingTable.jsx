import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UniversityJobPostingTable = () => {
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
    <section className="py-8">
      <div className="w-full xl:mb-0 mx-auto">
        <div className="relative flex flex-col w-full rounded">
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr className="text-white">
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Alumni Name
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Company Name
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Role
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Work Type
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Job Location
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Apply URL
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Date Posted
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobData.length > 0 ? (
                  jobData.map((job) => (
                    <tr key={job._id} className="">
                      <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {job.alumniId.alumniname}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {job.companyname}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {job.role}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {job.jobworktype}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {job.joblocation}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        <a
                          href={job.applyurl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {job.applyurl}
                        </a>
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
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

export default UniversityJobPostingTable;
