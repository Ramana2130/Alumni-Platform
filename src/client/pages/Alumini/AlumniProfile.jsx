import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Alumniprofile = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [alumniData, setAlumniData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentstudentsname, setCurrentstudentsname] = useState('');

  useEffect(() => {
    const fetchStudentName = async () => {
      try {
        const universityId = localStorage.getItem("universityId");
        const studentId = localStorage.getItem("_id");
        // Replace with actual API endpoint or data fetching logic
        const response = await axios.get(`http://localhost:3000/university/${universityId}/student/${studentId}`);
        const student = response.data.students[0];
        setCurrentstudentsname(student.currentstudentsname);
      } catch (err) {
        console.error('Error fetching student name:', err);
        setError('Failed to fetch student information');
      }
    };

    fetchStudentName();
  }, []);

  const handleYearChange = async (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    
    if (year) {
      try {
        setLoading(true);
        setError('');
        const universityId = localStorage.getItem('universityId'); // Assuming universityId is stored in localStorage
        const response = await axios.get(`http://localhost:3000/alumni/${universityId}/alumnisyear/${year}`);
        setAlumniData(response.data.alumni);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('No Alumni Found for the selected year');
        } else {
          setError('Failed to fetch alumni data');
        }
        setAlumniData([]);
      } finally {
        setLoading(false);
      }
    } else {
      setAlumniData([]); // Clear alumni data if no year is selected
    }
  };

  return (
    <div className="p-5">
      <div className="flex justify-center p-2 space-x-4">
        <img 
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.745036993.1725005158&semt=ais_hybrid" 
          alt="Alumni" 
          className="w-40 h-40 rounded-full bg-gray-500" 
        />
      </div>
      <div>
        <h2 className="text-xl font-extrabold text-[#2596be] text-center">{currentstudentsname}</h2>
      </div>

      {/* Year selection dropdown */}
      <div className="flex justify-center mt-4">
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="px-4 py-2 bg-white text-black rounded-md"
        >
          <option value="">Select Year</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2025">2025</option>
          {/* Add more years as needed */}
        </select>
      </div>

      {/* Display loading state, error message, or alumni data */}
      <div className="mt-6 text-center">
        {loading ? (
          <p className="text-lg text-[#2596be]">Loading...</p>
        ) : error ? (
          <p className="text-lg text-red-500">{error}</p>
        ) : (
          selectedYear && (
            <div>
              <p className="text-lg text-[#2596be]">
                Showing alumni for the year: <span className="font-bold">{selectedYear}</span>
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Alumniprofile;
