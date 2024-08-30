import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const UniversityDonationHistory = () => {
  const data = [
    { name: 'Ramana', year: '2019', department: 'CSE', amount: 5000 },
    { name: 'Ramana', year: '1994', department: 'IT', amount: 5000 },
    { name: 'Ramana', year: '1994', department: 'IT', amount: 5000 },
    { name: 'Ramana', year: '1994', department: 'IT', amount: 5000 },
    { name: 'Ramana', year: '1994', department: 'IT', amount: 5000 },
    { name: 'Ramana', year: '1994', department: 'IT', amount: 5000 },
    { name: 'Ramana', year: '1994', department: 'IT', amount: 5000 },
    { name: 'Ramana', year: '1994', department: 'IT', amount: 5000 },
  ];
const navigate=useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const history=()=>{
    navigate('/universitydonationfullstatement')
  }

  return (
    <section className=" ">
      <div className="w-full xl:mb-0 mx-auto ">
        <div className="relative flex flex-col w-full rounded">
          <div className="rounded-t mb-0 py-3 border-0">
            <div className="flex flex-wrap ">
              <div className="relative w-full mx-5 flex-grow flex-1">
                <h3 className="font-semibold uppercase text-base text-[#87888C] mt-4">
                  Donation History
                </h3>
              </div>
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-[#CFF80B] text-black active:bg-[#505050] text-sm font-bold uppercase px-5 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={history}
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
                    Student Name
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Year
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Department
                  </th>
                  <th className="px-6 text-white align-middle py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Donation Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={index}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white">
                      {item.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white">
                      {item.year}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white">
                      {item.department}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <span className="text-lg text-white space-x-2">
                        <i className="fa-solid fa-indian-rupee-sign text-lg text-[#CFF80B]"></i> {item.amount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              <ul className="flex text-gray-600 gap-2 justify-center font-medium py-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleClick(index + 1)}
                      className={`rounded-full px-4 text-xs py-2 ${
                        currentPage === index + 1
                          ? 'bg-[#CFF80B] text-black'
                          : 'hover:bg-[#CFF80B] hover:text-black text-white transition duration-300 ease-in-out'
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityDonationHistory;
