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
                <tr className="bg-gray-800 text-white">
                  <th className="px-6 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Alumni Name
                  </th>
                  <th className="px-6 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Company Name
                  </th>
                  <th className="px-6 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Role
                  </th>
                  <th className="px-6 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Work Type
                  </th>
                  <th className="px-6 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Job Location
                  </th>
                  <th className="px-6 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Apply URL
                  </th>
                  <th className="px-6 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Date Posted
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobData.map((job) => (
                  <tr key={job._id} className="bg-gray-100">
                    <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {job.alumniId.alumniname}
                    </td>
                    <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {job.companyname}
                    </td>
                    <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {job.role}
                    </td>
                    <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {job.jobworktype}
                    </td>
                    <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {job.joblocation}
                    </td>
                    <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      <a
                        href={job.applyurl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.applyurl}
                      </a>
                    </td>
                    <td className="border-t border-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <ul className="flex text-gray-600 gap-2 justify-center font-medium py-2">
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 py-2 bg-[#CFF80B] text-black font-medium text-sm"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 py-2 hover:bg-[#CFF80B] hover:text-black text-white font-medium text-sm transition duration-300 ease-in-out"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 py-2 hover:bg-[#CFF80B] hover:text-black text-white font-medium text-sm transition duration-300 ease-in-out"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 py-2 hover:bg-[#CFF80B] hover:text-black text-white font-medium text-sm transition duration-300 ease-in-out"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 py-2 hover:bg-[#CFF80B] hover:text-black text-white font-medium text-sm transition duration-300 ease-in-out"
                  >
                    5
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityJobPostingTable;
