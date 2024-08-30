import React from 'react'
import radio from '../../assets/radio.svg'
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
      profession: " 1000₹",
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
      id: 4,
      image: "https://ramana2130.github.io/portfolio/assets/mypic-d662ba56.jpg",
      name: "RAMANA",
      profession: "1000₹",
    },
  ];
const UniversityMainFundResponse = () => {
    
  return (
    <div className='h-[200px]  '>
        <div className='mt-5'>
            <h1 className='text-white font-semibold text-4xl uppercase'>Fund collecetion</h1>
            <h1 className='text-[#87888C] font-semibold text-lg uppercase'>Total Amount</h1>
            <div className='flex justify-between w-full'>
            <h1 className='text-white font-semibold text-8xl uppercase'>20075 <i class="fa-solid fa-indian-rupee text-4xl"></i></h1>
            <i class="fa-solid fa-arrow-trend-up text-9xl text-[#CFF80B]"></i>
            </div>
            {/* <h1 className='text-white font-semibold text-xl uppercase mt-5 '>Donation User</h1>
            <h1 className='text-[#87888C] font-semibold text-lg uppercase mb-14'>Total users</h1> */}

            <div className='flex justify-center w-3/4'>
            <div className="flex flex-col md:ml-12  md:flex-row">
          {teamMembers.map((member) => (
            <div key={member.id}>
              <div
                className="group  -mb-6 -ml-0 flex justify-start rounded-full transition-all duration-300 ease-in-out hover:-translate-x-20 md:-mb-0 md:-ml-12 md:justify-center md:hover:-translate-x-0 md:hover:-translate-y-6 "
              >
                <div
                  className="absolute left-6 -top-7 w-full text-left opacity-0 transition-all duration-300 ease-linear group-hover:translate-x-24 group-hover:opacity-100 md:top-40 md:left-0 md:text-center md:group-hover:-translate-y-6 md:group-hover:translate-x-0"
                >
                  <h3 className="text-base text-grey font-semibold xl:text-lg text-white">{member.name}</h3>
                  <h4 className="text-nowrap text-grey text-sm xl:text-base text-[#CFF80B]">{member.profession}</h4>
                </div>
                <img
                  src={member.image}
                  className="rounded-full object-cover size-32"
                  alt="Team Member"
                />
              </div>
            </div>
          ))}
        </div>

            </div>


        </div>
    </div>
  )
}

export default UniversityMainFundResponse
