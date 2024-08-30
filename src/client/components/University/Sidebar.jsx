import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Sidebar = () => {
  const {_id} = useParams();
  return (
    <div className="flex h-[867px] items-center p-3 w-[130px] bg-transparent">
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-5 ml-5 text-sm">
            <li className="rounded-sm">
              <NavLink
                to={`/universitydashboard/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${isActive ? 'bg-[#CFF80B] text-black' : 'bg-[#1E1E1E] text-white'}`
                }
              >
                <i className="fa-solid fa-house  text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to={`/addalumini/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${isActive ? 'bg-[#CFF80B] text-black' : 'bg-[#1E1E1E] text-white'}`
                }
              >
                <i className="fa-solid fa-graduation-cap  text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to={`/aluminilist/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${isActive ? 'bg-[#CFF80B] text-black' : 'bg-[#1E1E1E] text-white'}`
                }
              >
                <i className="fa-solid fa-bars  text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to={`/addcurretntstudents/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${isActive ? 'bg-[#CFF80B] text-black' : 'bg-[#1E1E1E] text-white'}`
                }
              >
                <i className="fa-solid fa-user-plus text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to={`/currentstudentslist/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${isActive ? 'bg-[#CFF80B] text-black' : 'bg-[#1E1E1E] text-white'}`
                }
              >
                <i className="fa-solid fa-clipboard text-2xl"></i>
              </NavLink>
            </li>
            
            <li className="rounded-sm">
              <NavLink
                to={`/universitydonation/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${isActive ? 'bg-[#CFF80B] text-black' : 'bg-[#1E1E1E] text-white'}`
                }
              >
                <i className="fa-solid fa-indian-rupee-sign  text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to={`/universitysetting/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${isActive ? 'bg-[#CFF80B] text-black' : 'bg-[#1E1E1E] text-white'}`
                }
              >
                <i className="fa-solid fa-gear  text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to={`/chat/${_id}`}
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${isActive ? 'bg-[#CFF80B] text-black' : 'bg-[#1E1E1E] text-white'}`
                }
              >
                <i className="fa-solid fa-comments  text-2xl"></i>
              </NavLink>
            </li>
            <li className="rounded-sm">
              <NavLink
                to='/universitysignuppage'
                className={({ isActive }) =>
                  `rounded-full flex items-center p-3 px-5 ${isActive ? 'bg-[#CFF80B] text-black' : 'bg-[#1E1E1E] text-white'}`
                }
              >
                <i className="fa-solid fa-right-from-bracket  text-2xl"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
