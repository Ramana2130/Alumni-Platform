import React, { useState } from "react";
import women from "../../assets/women.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AlumniNavbar() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    localStorage.removeItem("universityId");
    navigate("/aluminiloginpage");
    toast.success("Logout Successfully");
  };
  const chat = () => {
    navigate("/aluminichat");
  };
  return (
    <nav className="bg-transparent">
      <div className="px-4 sm:px-6 lg:px-8 pt-5">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            {/* Links section */}
            <div className="hidden lg:ml-10 lg:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-3xl font-extrabold text-white"
                  aria-current="page"
                >
                  Dashboard
                </a>
                <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg py-2 xl:w-[500px]">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-[#A1A1A1]">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="search"
                        className="block w-full rounded-full bg-[#1E1E1E] py-3 pl-10 pr-3 leading-5 text-[#A1A1A1] placeholder-[#A1A1A1] focus:placeholder-gray-500 focus:outline-none sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions section */}
          <div className="hidden lg:ml-4 lg:block">
            <div className="flex items-center">
              <button
                onClick={chat}
                type="button"
                className="flex-shrink-0 rounded-full bg-transparent p-1 text-gray-400 hover:text-gray-500 "
              >
                {/* <span className="sr-only">View notifications</span> */}
                <i className="fa-solid fa-bell text-white hover:text-[#2596be] text-3xl mr-2"></i>
              </button>

              {/* Profile dropdown */}
              <div className="relative ml-3 flex-shrink-0">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full text-sm text-white"
                    id="user-menu-button"
                    aria-expanded={open.toString()}
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img className="size-14 rounded-full" src={women} alt="" />
                  </button>
                </div>
                <div
                  className={`${
                    open ? "block" : "hidden"
                  } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#1E1E1E] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <button
                    className="block px-4 py-2 text-sm text-white"
                    role="menuitem"
                    tabIndex={-1}
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AlumniNavbar;
