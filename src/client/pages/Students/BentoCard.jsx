import React from 'react';
import aero from '../../assets/aero.svg';
import eee from '../../assets/eee.svg';
import it from '../../assets/it.svg';
import datascience from '../../assets/datascience.svg';
import cyber from '../../assets/cyber.svg';
import media from '../../assets/media.svg';

const BentoCard = ({ handlePageChange }) => {
  const categories = [
    { id: 'IT', src: it, text: 'Information Technology' },
    { id: 'ME', src: aero, text: 'Mechanical Engineering' },
    { id: 'CS', src: cyber, text: 'Cyber Security' },
    { id: 'EEE', src: eee, text: 'Electrical Electronic Engineering' },
    { id: 'AE', src: aero, text: 'Aeronautical Engineering' },
    { id: 'DS', src: datascience, text: 'Data Science' },
    { id: 'ECE', src: media, text: 'Electrical Communication & Engineering' },
    { id: 'AIDS', src: it, text: 'Artificial Intelligence & Data Science' },
  ];

  return (

    <div className='grid grid-cols-3 gap-10 mx-24'>
              {categories.map(({ id, src, text }) => (
                <div
                  key={id}
                  className="flex flex-col items-center p-6 rounded-xl bg-[#111111] text-white text-center transition-transform transform hover:scale-105"
                >
                  <div className="card" onClick={() => handlePageChange(id)}>
                    <span className="card__title text-lg font-bold mb-4">{text}</span>
                    <img src={src} alt={text} className="w-44 mx-auto mb-4" />
                    <form className="card__form">
                      <button
                        type="button"
                        className="card__button bg-[#2596be] hover:bg-[#1f7a9e] text-white font-semibold py-2 px-4  mt-4"
                        onClick={() => handlePageChange(id)}
                      >
                        Select
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>

  );
};

export default BentoCard;
