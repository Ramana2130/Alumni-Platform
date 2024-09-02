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
      profession: "Frontend Developer 🖥",
    },

    {
        id: 4,
        image: "https://ramana2130.github.io/portfolio/assets/mypic-d662ba56.jpg",
        name: "RAMANA",
        profession: "Backend Developer 🖥",
    },
    {
      id: 5,
      image: kishore,
      name: "KISHORE KUMAR",
      profession: "Techinical Support ✍️",
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
    <div className='mt-10 black'>
        {/* <Navbar/> */}
    <div className="mx-44  py-8 text-white  xl:py-0">
    <div className=" flex">
          <button className="mb-6 text-xl  font-extrabold text-center bg-yellow-500 text-black p-2  md:text-4xl lg:text-5xl">
            Our Teams <span className="text-yel"></span>{" "}
          </button>
          <p className="text-grey ml-10 pt-5 font-medium  w-[45%]  text-white">
          We're fueled by a passion for our work and a belief in making a positive impact. Let our team's dedication and drive accelerate your success.
          </p>
        </div>

      <div className="grid grid-cols-1 mt-5 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {teamMembers.map((member) => (
            <div
            key={member.id}
            className="flex flex-col items-center rounded-xl text-white text-center transition-transform transform hover:scale-105"
          >
            <div className="card" >
              <span className="card__title text-lg font-bold mb-4">{member.name}</span>
              <img src={member.image} alt={member.name} className="h-[250px] mx-auto mb-4" />
              <form className="card__form">
                <button
                  type="button"
                  className="card__button bg-[#CA8A04] hover:bg-[#CA8A04] text-white font-semibold py-2 px-4  mt-4"
                  // onClick={() => handlePageChange(id)}
                >
                  {member.profession}
                </button>
              </form>
            </div>
          </div>
       ))}
  
        {/* {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative flex cursor-pointer flex-col gap-2 overflow-hidden rounded-xl"
          >
            <img
              src={member.image}
              className="h-80 w-64 origin-bottom rounded-xl object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              alt="Team Member"
            />
            <div className="absolute flex  h-full w-full flex-col justify-end rounded-xl from-black via-transparent via-25% to-transparent   p-4 text-white transition-all duration-300 ease-in-out group-hover:bg-gradient-to-t">
             <div className='w-full'>

              <h3 className="text-xl  font-semibold">{member.name}</h3>
              <h4 className="h-0  overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:h-auto group-hover:opacity-100">
                {member.profession}
              </h4>
             </div>
            </div>
          </div>
        ))}
   */}
      </div>
    </div>
    </div>
  );
};

export default OurTeam;