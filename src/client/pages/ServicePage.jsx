import React from "react";
import alumni from '../assets/alumni.svg'
import job from '../assets/job.svg'
import donation from '../assets/donation.svg'
import collab from '../assets/collab.svg'

const ServicePage = () => {
  return (
    <div className=" p-5">
      <div className="">
        <div className="mx-40 flex">
          <button className="mb-6 text-xl  font-extrabold text-center bg-yellow-500 text-black p-2  md:text-4xl lg:text-5xl">
            Service <span className="text-yel"></span>{" "}
          </button>
          <p className="text-grey ml-10 font-medium  w-[45%]  text-white">
            At the core of our Alumni Association Platform are services designed
            to foster meaningful connections between alumni, students, and the
            university. Our goal is to create a thriving community where
            knowledge, opportunities, and support flow freely.
          </p>
        </div>
        <div className="grid grid-cols-2  mx-44 mt-5 gap-10">
          <div className=" rounded card2 h-[270px]  text-white">
            <div className="flex">
              <div className="w-[70%]">
                <button className="text-black text-4xl   font-extrabold bg-yellow-500 mb-2">
                  Alumni Success
                </button>
                <br />
                <button className="text-black text-4xl  text-left font-extrabold bg-yellow-500">
                  Stories
                </button>
                <div className="p-2 mt-3">
                    <h1 className="text-black font-medium text-[18px]">Alumni share their success stories to inspire and guide current students. These stories offer valuable insights and encouragement, helping students navigate their academic and career journeys with confidence.</h1>
                </div>
              </div>
              <div className="w-[30%]">
                <img src={alumni} className="h-full" alt="" />
              </div>
            </div>
          </div>
          <div className=" rounded card3 h-[270px]  text-white">
            <div className="flex">
              <div className="w-[70%]">
                <button className="text-black text-4xl   font-extrabold bg-white mb-2">
                  Career Opportunities &
                </button>
                <button className="text-black text-3xl  text-left font-extrabold bg-white">
                  Job Listings{" "}
                </button>
                <div className="p-2 mt-3">
                <h1 className="text-black font-medium text-[18px]">Alumni can post job openings, internships, and career opportunities directly on the platform, providing students with exclusive access to positions within their fields of study.</h1>
                  
                </div>
              </div>
              <div className="w-[30%]">
                <img src={job} className="h-full" alt="" />
              </div>
            </div>
          </div>
          <div className=" rounded card3 h-[270px]  text-white">
            <div className="flex">
              <div className="w-[70%]">
                <button className="text-black text-4xl   font-extrabold bg-white mb-2">
                  Donations &
                </button>
                <br />
                <button className="text-black text-3xl  text-left font-extrabold bg-white">
                  Financial Support
                </button>
                <div className="p-2 mt-3">
                     <h1 className="text-black font-medium text-[18px]">Our platform facilitates financial contributions from alumni to students who may need support to continue their education. </h1>
                </div>
              </div>
              <div className="w-[30%]">
                <img src={donation} className="h-full" alt="" />
              </div>
            </div>
          </div>
          <div className=" rounded card2 h-[270px]  text-white">
            <div className="flex">
              <div className="w-[70%]">
                <button className="text-black  text-4xl   font-extrabold bg-yellow-500 mb-2">
                  {" "}
                  University Collaboration &
                </button>
                <button className="text-black text-3xl font-extrabold bg-yellow-500">
                  Account Management
                </button>
                <div className="p-2 mt-3">
                     <h1 className="text-black font-medium text-[18px]">
                     We worked with the university to create a secure system where only authorized staff can create student and alumni accounts using automated Excel sheets, with no public signup pages.</h1>
                </div>
              </div>
              <div className="w-[30%]">
                <img src={collab} className="h-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
