import React from 'react';
import UniversityMiniStatement from '../../components/University/UniveersityMiniStatement';
import UniversityTotalAlumini from './UniversityTotalAlumini';
import UniversityTotalJob from './UniversityTotalJob';
import UniversityFundresponse from './UniversityFundresponse';
import UniversityJobPosting from './UniversityJobPosting';
import PieChart from './PieChart';


const UniversityFund = () => {
  // Define the class names for the grid items
  const gridItemClasses = `rounded-3xl  bg-[#1E1E1E]  px-2  text-3xl font-bold`;
  const box = `rounded-3xl bg-[#1E1E1E]  h-[200px] w-[200px]  text-3xl font-bold`;
  return (
    <div className="flex  w-full flex-col items-center justify-center p-6  text-slate-400 xl:text-slate-400">
      <div className="grid h-full w-full grid-cols-3 gap-4">
        <div className="col-span-1 row-span-4">
          <div className="flex h-full w-full  gap-6 rounded-3xl bg-[#1E1E1E] px-12 text-">
         {/* <UniversityFundresponse/> */}
         <PieChart/>
          </div>
        </div>
        <div className="col-span- row-span-2">
          <div className="flex h-full w-full  gap-6 rounded-3xl bg-[#1E1E1E] px-12 ">
           <UniversityTotalAlumini/>
          </div>
        </div>
        
        <div className={`row-span-6  ${gridItemClasses}`}>
            <UniversityMiniStatement/>
        </div>
        <div className="col-span- row-span-2">
          <div className="flex h-full w-full gap-6 rounded-3xl bg-[#1E1E1E] px-12 ">
          <UniversityTotalJob/>
          </div>
        </div>
        <div className={`rounded-lg relative row-span-2 col-span-2 overflow-x-auto green  text-white ${gridItemClasses}`}><UniversityJobPosting/></div>
        {/* <div className=" col-span-3 row-span-3 px-12 pt-8  overflow-x-auto bg-[#1E1E1E] "> */}
  

      </div>
    </div>
  );
};

export default UniversityFund;
