import React from 'react';

const Card = ({ alumni }) => {
  // Extract the first name from the alumni name
  const firstName = alumni.alumniname.split(' ')[0];
  
  // Generate the avatar URL
  const avatarUrl = `https://avatar.iran.liara.run/username?username=${firstName}`;

  return (
    <div className="hover:bg-[#2596be]/40 shadow-2xl w-[250px] p-5 rounded-xl text-gray-800 overflow-hidden group hover:shadow-2xl hover:shadow-[#2596be]/50 transition-all duration-700">
      <figure className="relative w-32 h-32 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#2596be] 
                before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#2596be]/30 before:-z-[1]
                group-hover:before:scale-[2.5] motion-safe:before:transition-all 
                motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-[#2596be]/30">
        <img
          className="rounded-full block max-w-full bg-[#2596be] object-cover z-10 relative"
          src={avatarUrl}
          alt={alumni.alumniname}
        />
      </figure>
      <header className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h2 className="font-semibold text-2xl text-center text-[#2596be] mt-6 group-hover:text-gray-50">
          {alumni.alumniname}
        </h2>
      </header>

      <ul className="flex justify-center space-x-4 mt-2 text-black font-bold">
        <li className="translate-y-[100px] group-hover:translate-y-0 delay-100 transition">
          <span>{alumni.department}</span>
        </li>
        <li className="translate-y-[100px] group-hover:translate-y-0 delay-100 transition">
          <span>{alumni.passedoutyear}</span>
        </li>
      </ul>
      <button
        type="button"
        className="mt-4 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#2596be] group-hover:bg-[#1E1E1E] text-white"
      >
        Read more
      </button>
    </div>
  );
};

export default Card;
