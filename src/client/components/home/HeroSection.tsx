import React from "react";
import bg_hero from "../../assets/bg_hero.jpg";

const HeroSection = () => {
  return (
    <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-7xl p-5">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className=" text-4xl lg:text-[54px] text-center md:text-left font-playfair font-bold italic text-gray-900 leading-tight">
            Connecting Students & Alumni for Brighter Futures
          </h2>

          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-black/60 font-light tracking-wider leading-relaxed">
            Our Alumni Platform bridges the gap between graduates and the
            university, fostering lifelong connections. It enables alumni to
            share career opportunities, mentorship, and success stories with
            current students. Designed as a hub for networking, learning, and
            growth, it strengthens the bond between past and present.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-lg bg-[#006BFF] text-white border-2 border-[#006BFF]">
              Get Started
            </button>
            <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-bold text-lg bg-[#C3DCE3] text-[#006BFF]">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src={bg_hero} alt="Sign Language Recognition" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
