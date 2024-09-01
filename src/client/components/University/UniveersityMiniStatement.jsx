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
                        {job.alumniId.alumniname || "N/A"}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.alumniId.passedoutyear || "N/A"}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.alumniId.department || "N/A"}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {job.alumniId.alumniregisterno || "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-white">
                      No data available
                    </td>
                  </tr>
                )}

                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/charts.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    2019
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    CSE
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-book mr-4 text-[#CFF80B] text-lg"></i>{" "}
                    High Studies
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/tables.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1994
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    IT
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-briefcase text-[#CFF80B] text-lg mr-4"></i>{" "}
                    Working
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/tables.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1994
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    IT
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-briefcase text-[#CFF80B] text-lg mr-4"></i>{" "}
                    Working
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/tables.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1994
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    IT
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-briefcase text-[#CFF80B] text-lg mr-4"></i>{" "}
                    Working
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/tables.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1994
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    IT
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-briefcase text-[#CFF80B] text-lg mr-4"></i>{" "}
                    Working
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/tables.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1994
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    IT
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-briefcase text-[#CFF80B] text-lg mr-4"></i>{" "}
                    Working
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/tables.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1994
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    IT
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-briefcase text-[#CFF80B] text-lg mr-4"></i>{" "}
                    Working
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/tables.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1994
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    IT
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-briefcase text-[#CFF80B] text-lg mr-4"></i>{" "}
                    Working
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/tables.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1994
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    IT
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-briefcase text-[#CFF80B] text-lg mr-4"></i>{" "}
                    Working
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white  ">
                    kabi krishna
                    {/* /argon/tables.html */}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1994
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    IT
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fa-solid fa-briefcase text-[#CFF80B] text-lg mr-4"></i>{" "}
                    Working
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <ul className="flex text-gray-600 gap-2 justify-center font-medium py-2">
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 text-xs py-2 bg-[#CFF80B] text-black"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 text-xs py-2 hover:bg-[#CFF80B] hover:text-black text-white transition duration-300 ease-in-out"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 text-xs py-2 hover:bg-[#CFF80B] hover:text-black text-white transition duration-300 ease-in-out"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 text-xs py-2 hover:bg-[#CFF80B] hover:text-black text-white transition duration-300 ease-in-out"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-full px-4 text-xs py-2 hover:bg-[#CFF80B] hover:text-black text-white transition duration-300 ease-in-out"
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

export default UniversityMiniStatement;
