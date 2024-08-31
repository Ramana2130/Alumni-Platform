import React from "react";
import women from '../../assets/team/kabi.png';

const AluminiProfile = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex p-5 ">
        <div className="p-2  w-1/2">
        <div>
          <h1 className="text-white pt-24 font-semibold text-5xl uppercase">
            Success
            <span className="text-yellow-500"> Stories!</span>
          </h1>

          <p className="pt-10 text-xl text-white font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos nulla quaerat modi, non ratione dolores, beatae sequi excepturi maxime quisquam eum cum rerum adipisci consequatur magni quasi, inventore ut!
          </p>
          <h1 className="text-white  pt-10 font-semibold text-5xl uppercase">
            Tips
            <span className="text-yellow-500">!</span>
          </h1>
          <p className="pt-5 text-xl text-white font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos nulla quaerat modi, non ratione dolores, beatae sequi excepturi maxime quisquam eum cum rerum adipisci consequatur magni quasi, inventore ut!
          </p>
          <div className="grid grid-cols-2 gap-10 mx-10 mt-5">
          <div className="card1" >
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">Name</span>
                   <h1 className="text-xl font-medium  text-center uppercase">Kabi</h1>
                    <form className="card1__form">
                      
                    </form>
                  </div>
                  <div className="card1" >
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">Gender</span>
                   <h1 className="text-xl font-medium  text-center uppercase">Male</h1>
                    <form className="card1__form">
                     
                    </form>
                  </div>
                  <div className="card1" >
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">Date of Birth</span>
                   <h1 className="text-xl font-medium  text-center uppercase">03/08/2005</h1>
                    <form className="card1__form">
                     
                    </form>
                  </div>
                  <div className="card1" >
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">Contact</span>
                   <h1 className="text-xl font-medium  text-center uppercase">12456789</h1>
                    <form className="card1__form">
                     
                    </form>
                  </div>
                  <div className="card1 col-span-2" >
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">Email</span>
                   <h1 className="text-xl font-medium  text-center uppercase">kabilashi2005@gmail.com</h1>
                    <form className="card1__form">
                     
                    </form>
                  </div>

          </div>

        </div>
        <div className="pt-24">
        <img src="https://idp.skcet.ac.in/assets/images/slides/img1.jpg?1725092231535" alt=""  className="rounded-lg h-[500px] w-[600px]"/>

        </div>
        </div>
        <div className="p-2  w-1/2">
        <div className="h-[90vh]">
        <div className=" h-full items-center flex">
        <img src={women} alt=""  className="rounded-lg"/></div>
        </div>
        <div>
        <div>
        <h1 className="text-white pt-24 font-semibold text-5xl uppercase">
            university <span className="text-yellow-500"> details!</span>
          </h1>
          <div className="grid grid-cols-2 gap-10 mx-10 pt-20 mt-5">
          <div className="card1" >
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">University Name</span>
                   <h1 className="text-xl font-medium  text-center uppercase">Sri Krishna Enginnering College</h1>
                    <form className="card1__form">
                      
                    </form>
                  </div>
                  <div className="card1" >
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">Department</span>
                   <h1 className="text-xl font-medium  text-center uppercase">Information Technology</h1>
                    <form className="card1__form">
                     
                    </form>
                  </div>
                  <div className="card1" >
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">Location</span>
                   <h1 className="text-xl font-medium  text-center uppercase">Coimbatore</h1>
                    <form className="card1__form">
                     
                    </form>
                  </div>
                  <div className="card1" >
                    <span className="card1__title text-yellow-600 text-center text-xl font-bold mb-4">Pass Out</span>
                   <h1 className="text-xl font-medium  text-center uppercase">2022</h1>
                    <form className="card1__form">
                     
                    </form>
                  </div>

          </div>

        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AluminiProfile;
