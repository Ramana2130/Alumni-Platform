import React from 'react'
import DonationCard from '../../components/University/DonationCard';
import UniversityMainFundResponse from './UniversityMainFundResponse';
import UniversityNeedDonationTable from '../../components/University/UniversityNeedDonationTable';
import UniversityDonationHistory from '../../components/University/UniversityDonationHistory';
const DonationDashboard = () => {
  return (
    <div className="grid h-[90vh] p-5  rounded-lg gap-5 grid-cols-5 grid-rows-4">
    <div className="rounded-lg px-12 justfiy-center items-end col-span-3 bg-[#1E1E1E]  row-span-2 ">
        <UniversityMainFundResponse/>
    </div>
    <div className="rounded-lg col-span-2 px-8 bg-[#1E1E1E] overflow-x-auto green row-span-3">
    <div className='flex pt-10 justify-between w-full'>
          
    <h1 className='text-white font-semibold text-4xl uppercase'>Donated Users</h1>
            <i class="fa-solid fa-handshake text-6xl text-[#CFF80B]"></i>
            </div>

      <DonationCard/>
   
      
      <div>
        <h1 className="text-2xl mt-20 font-semibold">
          {/* Dewsigned by leaders in AI so you can build with confidence */}
        </h1>
      </div>
    </div>
    <div className="rounded-lg relative col-span-3 row-span-3 px-12 pt-8  overflow-x-auto green bg-[#1E1E1E] ">
     <UniversityNeedDonationTable/>
     
    </div>

    
    <div className="rounded-lg relative col-span-2  px-12 pt-5 overflow-x-auto green  bg-[#1E1E1E] ">
      
      <UniversityDonationHistory/>

    
     
    </div>
    
    
  </div>
  )
}

export default DonationDashboard
