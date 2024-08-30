import React from 'react';
import kabi from '../../assets/team/kabi.png';
import karthi from '../../assets/team/karthi.png';
import kishore from '../../assets/team/kishore.png';
import lakshana from '../../assets/team/lakshana.png';
import praveen from '../../assets/team/praveen.png'; 

const teamMembers = [
  {
    id: 1,
    image: kabi,
    name: "KABILASH",
    profession: "1000₹",
  },
  {
    id: 3,
    image: karthi,
    name: "KARTHI KEYAN",
    profession: "5000₹",
  },
  {
    id: 5,
    image: kishore,
    name: "KISHORE KUMAR",
    profession: "1000₹",
  },
  {
    id: 6,
    image: lakshana,
    name: "LAKSHANA",
    profession: "5000₹",
  },
  {
    id: 4,
    image: praveen,
    name: "PRAVEEN",
    profession: "5000₹",
  },
  {
    id: 7,
    image: "https://ramana2130.github.io/portfolio/assets/mypic-d662ba56.jpg",
    name: "RAMANA",
    profession: "1000₹",
  },
];

const DonationCard = () => {
  return (
    <div className='p-2'>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        {teamMembers.map(member => (
          <div key={member.id} className="hover:bg-[#CFF80B]/40 shadow-2xl w-[250px] p-5 rounded-xl text-gray-800 overflow-hidden group hover:shadow-2xl hover:shadow-[#CFF80B]/50 transition-all duration-700">
            <figure className="relative w-32 h-32 m-0 mx-auto rounded-full outline outline-offset-4 outline-[#CFF80B] 
                       before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-[#CFF80B]/30 before:-z-[1]
                       group-hover:before:scale-[2.5] motion-safe:before:transition-all 
                       motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-[#CFF80B]/30">
              <img
                className="rounded-full block max-w-full bg-[#CFF80B] object-cover z-10 relative"
                src={member.image}
                alt={member.name}
              />
            </figure>
            <header className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-semibold text-2xl text-center text-[#CFF80B] mt-6 group-hover:text-gray-50 ">
                {member.name}
              </h3>
            </header>

            <ul className="flex justify-center space-x-4 mt-2 text-black font-bold">
              <li className="translate-y-[100px] group-hover:translate-y-0 delay-100 transition">
                <span>{member.profession}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCard;
