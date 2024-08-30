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
            <div className="relative z-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { id: 'IT', src: it, text: 'IT - Information Technology' },
                { id: 'ME', src: aero, text: 'ME - Mechanical Engineering' },
                { id: 'CS', src: cyber, text: 'CS - Cyber Security' },
                { id: 'EEE', src: eee, text: 'EEE - Electrical Electronic Engineering' },
                { id: 'AE', src: aero, text: 'AE - Aeronautical Engineering' },
                { id: 'DS', src: datascience, text: 'DS - Data Science' },
                { id: 'ECE', src: media, text: 'ECE - Electrical Communication & Engineering' },
                { id: 'AIDS', src: it, text: 'AIDS - Artificial Intelligence & Data Science' }
              ].map(({ id, src, text }) => (
                <button
                  key={id}
                  onClick={() => handlePageChange(id)}
                  className="flex flex-col items-center p-6 rounded-xl bg-[#111111] text-white text-center transition-transform transform hover:scale-105"
                >
                  <div className="w-56 h-56 flex items-center justify-center mb-4">
                    <img src={src} alt={id} className="h-24 w-24 object-cover" />
                  </div>
                  <h2 className="text-lg font-semibold">{text}</h2>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoCard;
