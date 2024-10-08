import React, { useState } from 'react';
import women from '../../assets/team/kabi.png';

const StudentProfile = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleEditClick = () => {
    setStep(2); // Navigate to the edit page when the edit button is clicked
  };
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className='w-full'>
        {step === 1 && (
      <div className='flex'>
          <div className='w-1/2'>
            <div className='p-3'>
              <h1 className='text-[#2596be] text-2xl font-semibold'>Personal Details</h1>
              <div className='mt-5 flex'>
                <img src={women} alt="Profile" className='size-80 rounded-2xl'/>
                <div className='mx-5 mt-5 w-full'>
                  <h1 className='text-[#87888C] font-bold text-sm uppercase'>Name</h1>
                  <p className='text-white font-medium uppercase text-lg'>kabi krishna</p>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Gender</h1>
                  <p className='text-white font-medium uppercase text-lg'>Male</p>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Date of birth</h1>
                  <p className='text-white font-medium uppercase text-lg'>08/03/2005</p>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Nationality</h1>
                  <p className='text-white font-medium uppercase text-lg'>India</p>
                </div>
              </div>
              <div className='mt-5 flex space-x-10'>
                <div className='w-1/2'>
                  <h1 className='text-[#2596be] text-2xl font-semibold'>Address</h1>
                  <div className='mx-5 mt-5 w-full'>
                    <h1 className='text-[#87888C] font-bold text-sm uppercase'>Address Line</h1>
                    <p className='text-white font-medium uppercase text-lg'>9/196A Annamalai nagar street</p>
                    <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>City</h1>
                    <p className='text-white font-medium uppercase text-lg'>Udumalpet</p>
                    <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>State</h1>
                    <p className='text-white font-medium uppercase text-lg'>Tamil Nadu</p>
                    <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Country</h1>
                    <p className='text-white font-medium uppercase text-lg'>India</p>
                  </div>
                </div>
                <div className='w-1/2'>
                  <h1 className='text-[#2596be] text-2xl font-semibold'>Contact Details</h1>
                  <div className='mt-5 w-full'>
                    <div className='mx-5'>
                      <h1 className='text-[#87888C] font-bold text-sm uppercase'>Phone Number</h1>
                      <p className='text-white font-medium uppercase text-lg'>1234567890</p>
                      <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Email</h1>
                      <p className='text-white font-medium uppercase text-lg'>kabikrishna@gmail.com</p>
                    </div>
                    <h1 className='text-white mt-5 text-2xl font-semibold'>Skills</h1>
                    <div className='mx-5'>
                      <ul className='mt-5 space-y-3 font-medium'>
                        <li className='flex items-start mt-5 lg:col-span-1 lg:mt-0'>
                          <div className='flex-shrink-0'>
                            <svg className='w-5 h-5 text-blue-500' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
                            </svg>
                          </div>
                          <p className='ml-3 leading-5 text-white'>Node Js</p>
                        </li>
                        <li className='flex items-start mt-5 lg:col-span-1 lg:mt-0'>
                          <div className='flex-shrink-0'>
                            <svg className='w-5 h-5 text-blue-500' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
                            </svg>
                          </div>
                          <p className='ml-3 leading-5 text-white'>React Js</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

        <div className='w-1/2'>
          <div className='p-3'>
            <div className='flex justify-between'>
              <h1 className='text-[#2596be] text-2xl font-semibold'>University Details</h1>
              <button onClick={handleEditClick}>
                <i className='fa-solid fa-pencil text-white bg-[#2596be] size-9 flex justify-center items-center rounded-xl text-lg'></i>
              </button>
            </div>

            <div className='mx-5 mt-5 w-full'>
              <h1 className='text-[#87888C] font-bold text-sm uppercase'>University Name</h1>
              <p className='text-white font-medium uppercase text-lg'>Sri Krishna Enginnering College</p>
              <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Department</h1>
              <p className='text-white font-medium uppercase text-lg'>Information Technology</p>
              <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Location</h1>
              <p className='text-white font-medium uppercase text-lg'>Coimbatore</p>
              <div className='flex space-x-10'>
                <div>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Join In</h1>
                  <p className='text-white font-medium uppercase text-lg'>2018</p>
                </div>
                <div>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Pass Out</h1>
                  <p className='text-white font-medium uppercase text-lg'>2022</p>
                </div>
              </div>
            </div>
            <h1 className='text-[#2596be] mt-10 text-2xl font-semibold'>Your Stories</h1>

            <div className='mx-5 mt-5 w-full'>
              <h1 className='text-[#87888C] font-bold text-sm uppercase'>Tell Your Story</h1>
              <textarea
                className='border-[#87888C] rounded-lg border-2 shadow-lg placeholder:text-base outline-none mb-2 bg-transparent text-[#87888C] w-[580px]'
                name='story'
                rows={7}
                id='story'
                readOnly
              />
              <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Tips</h1>
              <textarea
                className='border-[#87888C] rounded-lg border-2 shadow-lg placeholder:text-base outline-none mb-2 bg-transparent text-[#87888C] w-[580px]'
                name='tips'
                rows={3}
                id='tips'
                readOnly
              />
            </div>
     
          </div>
        </div>
      </div>
        )}

{step === 2 && (
      <div className='flex'>
          <div className='w-1/2'>
            <div className='p-3'>
              <h1 className='text-[#2596be] text-2xl font-semibold'>Personal Details</h1>
              <div className='mt-5 flex'>
              <div className="profile-picture-container">
      <img 
        src={profilePic || 'path/to/default/image.jpg'} 
        alt="Profile" 
        className='size-80 rounded-2xl' 
      />
   <div className="relative inline-block">
  <input 
    type="file" 
    accept="image/*" 
    onChange={handleFileChange} 
    className="absolute inset-0 opacity-0 cursor-pointer" 
  />
  <button 
    className="block px-4 py-2 border-2 font-semibold border-[#87888C] rounded-lg bg-transparent text-[#87888C] shadow-lg hover:bg-[#f5f5f5]"
  >
    Upload 
  </button>
</div>

    </div>
                <div className='mx-5 mt-5 w-full'>
                  <h1 className='text-[#87888C] font-bold text-sm uppercase'>Name</h1>
                  <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="text"
                    placeholder='name'
                    required
                  />
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Gender</h1>
                  <select
                        className="border-[#87888C] bg- border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-2  bg-transparent text-[#87888C] w-full"
                        name="department"
                        id="department"
                      >
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                   


                        
                      </select>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Date of birth</h1>
                  <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="date"
                    placeholder='name'
                    required
                  />
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Nationality</h1>
                  <select
                        className="border-[#87888C] bg- border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-2  bg-transparent text-[#87888C] w-full"
                        name="department"
                        id="department"
                      >
                        <option value="INDIA">INDIA</option>
                        <option value="SRI LANKA">SRI LANKA</option>
                        <option value="USA">USA</option>
                        <option value="PAKISTHAN">PAKISTHAN</option>
                        <option value="CHINA">CHINA</option>
                        <option value="JAPAN">JAPAN</option>
                        <option value="SOUTH KOREA">SOUTH KOREA</option>                        
                      </select>
                </div>
              </div>
              <div className='mt-5 flex space-x-10'>
                <div className='w-1/2'>
                  <h1 className='text-[#2596be] text-2xl font-semibold'>Address</h1>
                  <div className='mx-5 mt-5 w-full'>
                    <h1 className='text-[#87888C] font-bold text-sm uppercase'>Address Line</h1>
                    <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="text"
                    placeholder='door no  street name'
                    required
                  />
                    <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>City</h1>
                <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="text"
                    placeholder='city'
                    required
                  />    <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>State</h1>
                  <select
  className="border-[#87888C] bg- border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-2 bg-transparent text-[#87888C] w-full"
  name="state"
  id="state"
>
  <option value="ANDHRA PRADESH">Andhra Pradesh</option>
  <option value="ARUNACHAL PRADESH">Arunachal Pradesh</option>
  <option value="ASSAM">Assam</option>
  <option value="BIHAR">Bihar</option>
  <option value="CHHATTISGARH">Chhattisgarh</option>
  <option value="GOA">Goa</option>
  <option value="GUJARAT">Gujarat</option>
  <option value="HARYANA">Haryana</option>
  <option value="HIMACHAL PRADESH">Himachal Pradesh</option>
  <option value="JHARKHAND">Jharkhand</option>
  <option value="KARNATAKA">Karnataka</option>
  <option value="KERALA">Kerala</option>
  <option value="MADHYA PRADESH">Madhya Pradesh</option>
  <option value="MAHARASHTRA">Maharashtra</option>
  <option value="MANIPUR">Manipur</option>
  <option value="MEGHALAYA">Meghalaya</option>
  <option value="MIZORAM">Mizoram</option>
  <option value="NAGALAND">Nagaland</option>
  <option value="ODISHA">Odisha</option>
  <option value="PUNJAB">Punjab</option>
  <option value="RAJASTHAN">Rajasthan</option>
  <option value="SIKKIM">Sikkim</option>
  <option value="TAMIL NADU">Tamil Nadu</option>
  <option value="TELANGANA">Telangana</option>
  <option value="TRIPURA">Tripura</option>
  <option value="UTTAR PRADESH">Uttar Pradesh</option>
  <option value="UTTARAKHAND">Uttarakhand</option>
  <option value="WEST BENGAL">West Bengal</option>
  <option value="ANDAMAN AND NICOBAR ISLANDS">Andaman and Nicobar Islands</option>
  <option value="CHANDIGARH">Chandigarh</option>
  <option value="DADRA AND NAGAR HAVELI AND DAMAN AND DIU">Dadra and Nagar Haveli and Daman and Diu</option>
  <option value="DELHI">Delhi</option>
  <option value="LAKSHADWEEP">Lakshadweep</option>
  <option value="LADAKH">Ladakh</option>
  <option value="PUDUCHERRY">Puducherry</option>
  <option value="JAMMU AND KASHMIR">Jammu and Kashmir</option>
</select>

                    {/* <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Country</h1>
                    <p className='text-white font-medium uppercase text-lg'>India</p> */}
                  </div>
                </div>
                <div className='w-1/2'>
                  <h1 className='text-[#2596be] text-2xl font-semibold'>Contact Details</h1>
                  <div className='mt-5 w-full'>
                    <div className='mx-5'>
                      <h1 className='text-[#87888C] font-bold text-sm uppercase'>Phone Number</h1>
                      <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="texnumbert"
                    placeholder='1234567890'
                    required
                  />
                      <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Email</h1>
                      <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="email"
                    placeholder='email'
                    required
                  />
                    </div>
                    <h1 className='text-white mt-5 text-2xl font-semibold'>Skills</h1>
                    <div className='mx-5'>
                      <ul className='mt-5 space-y-3 font-medium'>
                        <li className='flex items-start mt-5 lg:col-span-1 lg:mt-0'>
                          <div className='flex-shrink-0'>
                            <svg className='w-5 h-5 text-blue-500' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
                            </svg>
                          </div>
                          <p className='ml-3 leading-5 text-white'>Node Js</p>
                        </li>
                        <li className='flex items-start mt-5 lg:col-span-1 lg:mt-0'>
                          <div className='flex-shrink-0'>
                            <svg className='w-5 h-5 text-blue-500' fill='currentColor' viewBox='0 0 20 20'>
                              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
                            </svg>
                          </div>
                          <p className='ml-3 leading-5 text-white'>React Js</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

        <div className='w-1/2'>
          <div className='p-3'>
            <div className='flex justify-between'>
              <h1 className='text-[#2596be] text-2xl font-semibold'>University Details</h1>
              <button onClick={handleEditClick}>
                <i className='fa-solid fa-pencil text-white bg-[#2596be] size-9 flex justify-center items-center rounded-xl text-lg'></i>
              </button>
            </div>

            <div className='mx-5 mt-5 w-full'>
              <h1 className='text-[#87888C] font-bold text-sm uppercase'>University Name</h1>
              <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="text"
                    placeholder='university name'
                    required
                  />
              <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Department</h1>
              <select
  className="border-[#87888C] bg- border-t-0 border-r-0 border-l-0 border-2 p-3 shadow-lg placeholder:text-base outline-none mb-2 bg-transparent text-[#87888C] w-full"
  name="department"
  id="department"
>
  <option value="CSE">Computer Science and Engineering (CSE)</option>
  <option value="IT">Information Technology (IT)</option>
  <option value="ECE">Electronics and Communication Engineering (ECE)</option>
  <option value="EEE">Electrical and Electronics Engineering (EEE)</option>
  <option value="MECH">Mechanical Engineering (MECH)</option>
  <option value="CIVIL">Civil Engineering (CIVIL)</option>
  <option value="CHEM">Chemical Engineering (CHEM)</option>
  <option value="BIOTECH">Biotechnology (BIOTECH)</option>
  <option value="AE">Aeronautical Engineering (AE)</option>
  <option value="AUTO">Automobile Engineering (AUTO)</option>
  <option value="ARCH">Architecture (ARCH)</option>
  <option value="BBA">Business Administration (BBA)</option>
  <option value="MBA">Master of Business Administration (MBA)</option>
  <option value="BSC">Bachelor of Science (B.Sc)</option>
  <option value="MSC">Master of Science (M.Sc)</option>
  <option value="MCA">Master of Computer Applications (MCA)</option>
  <option value="PHARM">Pharmacy (PHARM)</option>
  <option value="LAW">Law</option>
</select>

              <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Location</h1>
              <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="text"
                    placeholder='location'
                    required
                  />
              <div className='flex space-x-10'>
                <div>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Join In</h1>
                  <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="number"
                    placeholder='2018'
                    required
                  />
                </div>
                <div>
                  <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Pass Out</h1>
                  <input
                    id="Name"
                    className="border p-1 shadow-md placeholder:text-base border-t-0 bg-transparent border-r-0 border-l-0 border-b-1 mb-2  border-[#87888C] text-white uppercase   focus:outline-none"
                    type="number"
                    placeholder='2024'
                    required
                  />
                </div>
              </div>
            </div>
            <h1 className='text-[#2596be] mt-10 text-2xl font-semibold'>Your Stories</h1>

            <div className='mx-5 mt-5 w-full'>
              <h1 className='text-[#87888C] font-bold text-sm uppercase'>Tell Your Story</h1>
              <textarea
                className='border-[#87888C] rounded-lg border-2 shadow-lg placeholder:text-base outline-none mb-2 bg-transparent text-[#87888C] w-[580px]'
                name='story'
                rows={7}
                id='story'
              />
              <h1 className='text-[#87888C] mt-3 font-bold text-sm uppercase'>Tips</h1>
              <textarea
                className='border-[#87888C] rounded-lg border-2 shadow-lg placeholder:text-base outline-none mb-2 bg-transparent text-[#87888C] w-[580px]'
                name='tips'
                rows={3}
                id='tips'
              />
            </div>
     
          </div>
        </div>
      </div>
        )}
    </div>
  );
};

export default StudentProfile;
