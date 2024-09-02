// src/contexts/AlumniContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create a Context
const AlumniContext = createContext();

// Create a Provider Component
export const AlumniProvider = ({ children }) => {
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  return (
    <AlumniContext.Provider value={{ selectedAlumni, setSelectedAlumni }}>
      {children}
    </AlumniContext.Provider>
  );
};

export const useAlumni = () => {
  return useContext(AlumniContext);
};
