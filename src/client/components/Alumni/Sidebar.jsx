import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Sidebar = () => {
  const {_id} = useParams();
  return (
    <div className="flex h-[867px] items-center p-3 w-[130px] bg-transparent">
      <div className="space-y-3 w-full flex justify-center">
        <div>
          <div className="flex justify-start mt-8">
            <ul className="pt-2 pb-4 space-y-3 ml-5 text-sm">
              <li className="rounded-sm">
                <NavLink
                  to={`/studentdashboard/${_id}`}
                  className={({ isActive }) =>
                    `space-x-3 rounded-full flex items-center p-3 px-5 py-3 ${isActive ? 'bg-[#2596be]' : 'bg-[#1E1E1E]'}`
                  }
                >
                  <i className="fa-solid fa-house text-white text-2xl"></i>
                </NavLink>
              </li>
              {/* <li className="rounded-sm">
                <NavLink
                  to={`/aluministory/${_id}`}
                  className={({ isActive }) =>
                    `space-x-3 rounded-full flex items-center p-3 px-5 py-3 ${isActive ? 'bg-[#2596be]' : 'bg-[#1E1E1E]'}`
                  }
                >
                  <i className="fa-solid fa-graduation-cap text-white text-2xl"></i>
                </NavLink>
              </li> */}
              {/* <li className="rounded-sm">
                <NavLink
                  to={`/aluminilist2/${_id}`}
                  className={({ isActive }) =>
                    `space-x-3 rounded-full flex items-center p-3 px-5 py-3 ${isActive ? 'bg-[#2596be]' : 'bg-[#1E1E1E]'}`
                  }
                >
                  <i className="fa-solid fa-user-group text-white text-2xl"></i>
                </NavLink>
              </li> */}
              <li className="rounded-sm">
                <NavLink
                  to={`/studentrequestform/${_id}`}
                  className={({ isActive }) =>
                    `space-x-3 rounded-full flex items-center p-3 px-5 py-3 ${isActive ? 'bg-[#2596be]' : 'bg-[#1E1E1E]'}`
                  }
                >
                  <i className="fa-solid fa-indian-rupee-sign text-white text-2xl"></i>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to={`/aluminisetting/${_id}`}
                  className={({ isActive }) =>
                    `space-x-3 rounded-full flex items-center p-3 px-5 py-3 ${isActive ? 'bg-[#2596be]' : 'bg-[#1E1E1E]'}`
                  }
                >
                  <i className="fa-solid fa-gear text-white text-2xl"></i>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to={`/aluminichat/${_id}`}
                  className={({ isActive }) =>
                    `space-x-3 rounded-full flex items-center p-3 px-5 py-3 ${isActive ? 'bg-[#2596be]' : 'bg-[#1E1E1E]'}`
                  }
                >
                  <i className="fa-solid fa-comments text-white text-2xl"></i>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink
                  to='/aluminiloginpage'
                  className={({ isActive }) =>
                    `space-x-3 rounded-full flex items-center p-3 px-5 py-3 ${isActive ? 'bg-[#2596be]' : 'bg-[#1E1E1E]'}`
                  }
                >
                  <i className="fa-solid fa-right-from-bracket text-white text-2xl"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
