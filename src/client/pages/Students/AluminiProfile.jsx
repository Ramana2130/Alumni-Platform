import React, { useState } from "react";
import SmallChat from "./SmallChat";

const AluminiProfile = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatOpen(true);
  };

  const handleBackButtonClick = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="w-full overflow-x-auto relative">
      <div className="absolute top-5 right-5">
        {!isChatOpen && (
          <button
            onClick={handleChatButtonClick}
            className="mb-4 size-16 bg-yellow-500 text-white rounded-full self-start"
          >
            <i className="fa-solid fa-comments text-3xl"></i>
          </button>
        )}
        {isChatOpen && (
          <div className="fixed z-50 bottom-16 right-60 bg-gray-100 p-6 rounded-xl shadow-lg">
            <button
              onClick={handleBackButtonClick}
              className="mb-4 bg-red-500 text-white rounded-full p-2"
            >
              Back
            </button>
            <SmallChat />
          </div>
        )}
      </div>

      <div className="flex p-5">
        <div className="p-2 w-full">
          <div>
            <h1 className="text-white p-5 font-semibold text-5xl uppercase">
              Personal<span className="text-yellow-500"> details!</span>
            </h1>
            <div className="flex">
              <div className="w-1/2">
                <div className="grid grid-cols-2 gap-10 mx-10 mt-5">
                  <div className="card1">
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
                      Name
                    </span>
                    <h1 className="text-xl font-medium text-center uppercase">
                      Kabi
                    </h1>
                  </div>
                  <div className="card1">
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
                      Gender
                    </span>
                    <h1 className="text-xl font-medium text-center uppercase">
                      Male
                    </h1>
                  </div>
                  <div className="card1">
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
                      Date of Birth
                    </span>
                    <h1 className="text-xl font-medium text-center uppercase">
                      03/08/2005
                    </h1>
                  </div>
                  <div className="card1">
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
                      Contact
                    </span>
                    <h1 className="text-xl font-medium text-center uppercase">
                      12456789
                    </h1>
                  </div>
                  <div className="card1 col-span-2">
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
                      Email
                    </span>
                    <h1 className="text-xl font-medium text-center uppercase">
                      kabilashi2005@gmail.com
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="grid grid-cols-2 mt-5 gap-10">
                  <div className="card1">
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
                      Role
                    </span>
                    <h1 className="text-xl font-medium text-center uppercase">
                      Frontend Developer
                    </h1>
                  </div>
                  <div className="card1">
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
                      Pass Out
                    </span>
                    <h1 className="text-xl font-medium text-center uppercase">
                      2014
                    </h1>
                  </div>
                  <div className="card1 col-span-2">
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
                      University Name
                    </span>
                    <h1 className="text-xl font-medium text-center uppercase">
                      Sri Krishna Engineering College
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[80%] text-center mx-auto">
              <h1 className="text-white pt-24 font-extrabold text-7xl uppercase">
                Success
                <span className="text-yellow-500"> Stories!</span>
              </h1>

              <p className="pt-10 text-xl text-white font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quos nulla quaerat modi, non ratione dolores, beatae
                sequi excepturi maxime quisquam eum cum rerum adipisci
                consequatur magni quasi, inventore ut!
              </p>
              <h1 className="text-white pt-10 font-extrabold text-7xl uppercase">
                Tips
                <span className="text-yellow-500">!</span>
              </h1>
              <p className="pt-5 text-xl text-white font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quos nulla quaerat modi, non ratione dolores, beatae
                sequi excepturi maxime quisquam eum cum rerum adipisci
                consequatur magni quasi, inventore ut!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-white p-5 pt-12 font-semibold text-5xl uppercase">
          Job Posting<span className="text-yellow-500"> details!</span>
        </h1>
        <div className="grid grid-cols-2 gap-10 mx-10 pt-5 mt-5">
          <div className="card1">
            <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
              Company Name
            </span>
            <h1 className="text-xl font-medium text-center uppercase">
              Google
            </h1>
          </div>
          <div className="card1">
            <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
              Role
            </span>
            <h1 className="text-xl font-medium text-center uppercase">
              Java Developer
            </h1>
          </div>
          <div className="card1">
            <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
              Location
            </span>
            <h1 className="text-xl font-medium text-center uppercase">
              Coimbatore
            </h1>
          </div>
          <div className="card1">
            <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
              Description
            </span>
            <h1 className="text-md font-medium text-center uppercase">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              numquam minima aspernatur aliquam alias impedit ducimus labore
              culpa, eius odit asperiores cumque facilis? Dolorem minima rerum
              alias excepturi vitae quod.
            </h1>
          </div>
          <div className="card1 col-span-2">
            <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">
              Link
            </span>
            <h1 className="text-xl font-medium text-blue-600 text-center">
              www.google.com
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AluminiProfile;
