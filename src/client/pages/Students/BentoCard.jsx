import React from 'react';
import aero from '../../assets/aero.svg';
import eee from '../../assets/eee.svg';
import it from '../../assets/it.svg';
import datascience from '../../assets/datascience.svg';
import cyber from '../../assets/cyber.svg';
import media from '../../assets/media.svg';

const BentoCard = ({ handlePageChange }) => {
  return (
    <section>
      <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <h1 className="text-white font-semibold mb-5 text-4xl uppercase">
            Category <span className="text-[#2596be]">!</span>
          </h1>
          <div className="relative">
            <div className="relative z-10 grid gap-3 grid-cols-6">
              <button onClick={() => handlePageChange('IT')} className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-[#111111]">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-56 flex justify-center items-center">
                    <img src={it} alt="IT" className='h-[180px]' />
                  </div>
                  <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-SM">IT - Information Technology</h2>
                </div>
              </button>
              <button onClick={() => handlePageChange('ME')} className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#111111]">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-56 flex justify-center items-center">
                    <img src={aero} alt="ME" className='h-[180px]' />
                  </div>
                  <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-SM">ME - Mechanical Engineering</h2>
                </div>
              </button>
              <button onClick={() => handlePageChange('CS')} className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-[#111111]">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-56 flex justify-center items-center">
                    <img src={cyber} alt="CS" className='h-[180px]' />
                  </div>
                  <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-SM">CS - Cyber Security</h2>
                </div>
              </button>
              <button onClick={() => handlePageChange('EEE')} className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#111111]">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-96 flex justify-center items-center">
                    <img src={eee} alt="EEE" className='h-[180px]' />
                  </div>
                  <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-SM">EEE - Electrical Electronic Engineering</h2>
                </div>
              </button>
              <button onClick={() => handlePageChange('AE')} className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#111111]">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-56 flex justify-center items-center">
                    <img src={aero} alt="AE" className='h-[180px]' />
                  </div>
                  <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-SM">AE - Aeronautical Engineering</h2>
                </div>
              </button>
              <button onClick={() => handlePageChange('DS')} className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#111111]">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-56 flex justify-center items-center">
                    <img src={datascience} alt="DS" className='h-[180px]' />
                  </div>
                  <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-SM">DS - Data Science</h2>
                </div>
              </button>
              <button onClick={() => handlePageChange('ECE')} className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#111111]">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-56 flex justify-center items-center">
                    <img src={media} alt="ECE" className='h-[180px]' />
                  </div>
                  <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-SM">ECE - Electrical Communication & Engineering</h2>
                </div>
              </button>
              <button onClick={() => handlePageChange('AIDS')} className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-[#111111]">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-56 flex justify-center items-center">
                    <img src={it} alt="AIDS" className='h-[180px]' />
                  </div>
                  <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-SM">AIDS - Artificial Intelligence & Data Science</h2>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoCard;
