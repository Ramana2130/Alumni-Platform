import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const { _id } = useParams();
  const path = _id ? `/addalumini/${_id}` : `/addcurretntstudents/${_id}`;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    navigate("/universityloginpage");
    toast.success("Logout Successfully");
  };
  return (
    <div className="flex h-[867px] items-center p-3 w-[130px] bg-transparent">
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-5 ml-5 text-sm">
            <li className="rounded-sm">
              <NavLink
                to={`/universitydashboard/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${
                    isActive
                      ? "bg-[#CFF80B] text-black"
                      : "bg-[#1E1E1E] text-white"
                  }`
                }
              >
                <i className="fa-solid fa-house text-2xl"></i>
              </NavLink>
            </li>
            <li
              className="rounded-sm relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${
                    isActive
                      ? "bg-[#CFF80B] text-black"
                      : "bg-[#1E1E1E] text-white"
                  }`
                }
              >
                <i className="fa-solid fa-graduation-cap text-2xl"></i>
              </NavLink>
              <div
                className={`${
                  open ? "block" : "hidden"
                } absolute left-16 top-5 z-10 mt-2 w-32 origin-top-right rounded-md bg-[#1E1E1E] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
              >
                <NavLink
                  to={`/addcurretntstudents/${_id}`}
                  className={({ isActive }) =>
                    ` flex items-center p-3 px-5 ${
                      isActive
                        ? "bg-[#CFF80B] text-black"
                        : "bg-[#1E1E1E] text-white"
                    }`
                  }
                  role="menuitem"
                >
                  Students
                </NavLink>
                <NavLink
                  to={`/addalumini/${_id}`}
                  className={({ isActive }) =>
                    ` flex items-center p-3 px-5 ${
                      isActive
                        ? "bg-[#CFF80B] text-black"
                        : "bg-[#1E1E1E] text-white"
                    }`
                  }
                  role="menuitem"
                >
                  Alumnis
                </NavLink>
              </div>
            </li>
            <li
              className="rounded-sm relative"
              onMouseEnter={() => setOpen1(true)}
              onMouseLeave={() => setOpen1(false)}
            >
              <NavLink
                to={`/aluminilist/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${
                    isActive
                      ? "bg-[#CFF80B] text-black"
                      : "bg-[#1E1E1E] text-white"
                  }`
                }
              >
                <i className="fa-solid fa-clipboard text-2xl"></i>
              </NavLink>
              <div
                className={`${
                  open1 ? "block" : "hidden"
                } absolute left-16 top-5 z-10 mt-2 w-32 origin-top-right rounded-md bg-[#1E1E1E] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
              >
                <NavLink
                  to={`/aluminilist/${_id}`}
                  className={({ isActive }) =>
                    `flex items-center p-3 px-5 ${
                      isActive
                        ? "bg-[#CFF80B] text-black"
                        : "bg-[#1E1E1E] text-white"
                    }`
                  }
                  role="menuitem"
                >
                  Alumnis
                </NavLink>
                <NavLink
                  to={`/currentstudentslist/${_id}`}
                  className={({ isActive }) =>
                    `flex items-center p-3 px-5 ${
                      isActive
                        ? "bg-[#CFF80B] text-black"
                        : "bg-[#1E1E1E] text-white"
                    }`
                  }
                  role="menuitem"
                >
                  Students
                </NavLink>
              </div>
            </li>
            <li className="rounded-sm">
              <NavLink
                to={`/universitydonation/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${
                    isActive
                      ? "bg-[#CFF80B] text-black"
                      : "bg-[#1E1E1E] text-white"
                  }`
                }
              >
                <i className="fa-solid fa-indian-rupee-sign text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to={`/universitysetting/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${
                    isActive
                      ? "bg-[#CFF80B] text-black"
                      : "bg-[#1E1E1E] text-white"
                  }`
                }
              >
                <i className="fa-solid fa-gear text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to={`/chat/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${
                    isActive
                      ? "bg-[#CFF80B] text-black"
                      : "bg-[#1E1E1E] text-white"
                  }`
                }
              >
                <i className="fa-solid fa-comments text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
  <NavLink
    to="/universityloginpage"  // Assuming you have a route for logout, otherwise remove or replace this.
    onClick={handleLogout}
    className={({ isActive }) =>
      `rounded-full flex items-center p-3 px-5 ${
        isActive ? "bg-[#CFF80B] text-black" : "bg-[#1E1E1E] text-white"
      }`
    }
  >
    <i className="fa-solid fa-right-from-bracket text-2xl"></i>
  </NavLink>
</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
