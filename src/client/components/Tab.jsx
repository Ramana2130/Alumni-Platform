import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Tab = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <div className="flex items-center ml-64 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:text-gray-800">
      <Link
        to="/studentsignuppage"
        tabIndex={0}
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-sm ${activeTab === '/studentloginpage' || activeTab==='/studentsignuppage' ? 'border-2 border-t-0 border-r-0 border-l-0 border-white font-semibold text-white' : 'text-gray-400'}`}
        rel="noopener noreferrer"
        onClick={() => setActiveTab('/studentsignuppage')}
      >
        <span className='uppercase'>Student</span>
      </Link>
      <Link
        to="/aluminiloginpage"
        tabIndex={0}
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-sm ${activeTab === '/aluminiloginpage' ? 'border-2 border-t-0 border-r-0 border-l-0 border-white font-semibold text-white' : 'text-gray-400'}`}
        rel="noopener noreferrer"
        onClick={() => setActiveTab('/aluminisignuppage')}
      >
        <span className='uppercase'>Alumni</span>
      </Link>
      <Link
        to="/universitysignuppage"
        tabIndex={0}
        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-sm ${activeTab === '/universitysignuppage' ? 'border-2 border-t-0 border-r-0 border-l-0 border-white font-semibold text-white' : 'text-gray-400'}`}
        rel="noopener noreferrer"
        onClick={() => setActiveTab('/universitysignuppage')}
      >
        <span className='uppercase'>University</span>
      </Link>
    </div>
  );
};

export default Tab;
