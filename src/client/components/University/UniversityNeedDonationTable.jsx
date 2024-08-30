import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UniversityNeedDonationTable = () => {
  // Sample data (you should replace this with your actual data)
  const data = [
    { name: 'Ramana', year: '2019', department: 'CSE' ,no:'1234567890'},
    { name: 'Sita', year: '2018', department: 'ECE' ,no:'1234567890'},
    { name: 'John', year: '2017', department: 'IT' ,no:'1234567890'},
    { name: 'Doe', year: '2016', department: 'MECH' ,no:'1234567890'},
    { name: 'Alex', year: '2015', department: 'CIVIL' ,no:'1234567890'},
    { name: 'Anna', year: '2014', department: 'EEE' ,no:'1234567890'},
    { name: 'Ravi', year: '2013', department: 'CSE' ,no:'1234567890'},
    { name: 'Kumar', year: '2012', department: 'ECE' ,no:'1234567890'},
    { name: 'Nina', year: '2011', department: 'IT' ,no:'1234567890'},
    // ... add more data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className=" ">
      <div className="w-full xl:mb-0 mx-auto overflow-hidden">
        <div className="relative flex flex-col   w-full  rounded">
          <div className="rounded-t mb-0  py-3 border-0">
            <div className="flex flex-wrap ">
              <div className="relative w-full  mx-5 flex-grow flex-1  ">
                <h1 className='text-white font-semibold text-4xl uppercase'>Student Donation</h1>
              </div>
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <i className="fa-solid fa-building-columns text-5xl text-[#CFF80B]"></i>
              </div>
            </div>
          </div>

          <div className="block w-full p-5">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6  text-white align-middle  py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Student Name
                  </th>
                  <th className="px-6  text-white align-middle  py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Mobile no
                  </th>
                  <th className="px-6  text-white align-middle  py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Year
                  </th>
                  <th className="px-6  text-white align-middle  py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Department
                  </th>
                  <th className="px-6  text-white align-middle  py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Status
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
                      {item.no}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white">
                      {item.year}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-white">
                      {item.department}
                    </td>
                    <td className="border-t-0 px-6 align-middle space-x-9 border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                     <Link to='/universityacceptdonation'>
                         <i className="fa-solid fa-check text-lg text-[#CFF80B]"></i>
                     </Link>
                                             <i className="fa-solid fa-xmark text-lg text-red-500"></i>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              <ul className="flex text-gray-600 gap-2 justify-center font-medium py-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <li key={page}>
                    <a
                      href="#"
                      onClick={() => handlePageChange(page)}
                      className={`rounded-full px-4 text-xs py-2 ${
                        currentPage === page ? 'bg-[#CFF80B] text-black' : 'hover:bg-[#CFF80B] hover:text-black text-white transition duration-300 ease-in-out'
                      }`}
                    >
                      {page}
                    </a>
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

export default UniversityNeedDonationTable;
