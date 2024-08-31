import React from 'react';
import kabi from '../assets/team/kabi.png';
import karthi from '../assets/team/karthi.png';
import kishore from '../assets/team/kishore.png';
import lakshana from '../assets/team/lakshana.png';
import praveen from '../assets/team/praveen.png';
import Navbar from '../components/Navbar';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      image: kabi,
      name: "KABILASH",
      profession: "Developer 🖥",
    },

    {
        id: 4,
        image: "https://ramana2130.github.io/portfolio/assets/mypic-d662ba56.jpg",
        name: "RAMANA",
        profession: "Developer 🖥",
    },
    {
      id: 5,
      image: kishore,
      name: "KISHORE KUMAR",
      profession: "Developer 🖥",
    },
    {
        id: 3,
        image: karthi,
        name: "KARTHI KEYAN",
        profession: "Technical Support ✍️",
      },
  
    
      {
        id: 4,
        image: praveen,
        name: "PRAVEEN",
        profession: "Technical Support ✍️",
    },
    {
        id: 6,
        image: lakshana,
        name: "LAKSHANA",
        profession: "Technical Support ✍️",
      },

    
  ];

  return (
    <div className='black h-screen'>
        <Navbar/>
    <div className="flex flex-col items-center justify-center px-5 py-8 text-white xl:px-10 xl:py-0">
      <div className="mb-16 text-center md:mb">
        <h2 className="mb-6 text-xl text-white font-extrabold md:text-4xl lg:text-7xl">Our Team</h2>
        <p className="text-grey">
          We're fueled by a passion for our work and a belief in making a positive impact. Let our team's dedication and drive accelerate your success.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl"
          >
            <img
              src={member.image}
              className="h-80 w-64 origin-bottom rounded-xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              alt="Team Member"
            />
            <div className="absolute flex h-full w-full flex-col justify-end rounded-xl from-black via-transparent via-25% to-transparent p-4 text-white transition-all duration-300 ease-in-out group-hover:bg-gradient-to-t">
              <h3 className="text-xl  font-semibold">{member.name}</h3>
              <h4 className="h-0  overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:h-auto group-hover:opacity-100">
                {member.profession}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurTeam;
