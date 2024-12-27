import React, { createContext, useState, useContext } from 'react';

// Create a Context
const ResumeContext = createContext();

// Create a Provider Component
export const ResumeProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]); // This should be an array of education objects
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]); // Technical Skills
  const [softSkills, setSoftSkills] = useState([]); // Soft Skills
  const [projects, setProjects] = useState([]); // Updated to include projects

  return (
    <ResumeContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        education,
        setEducation,
        workExperience,
        setWorkExperience,
        skills,
        setSkills,
        softSkills, // Added softSkills to context
        setSoftSkills, // Added setSoftSkills to context
        projects,
        setProjects, // Added setProjects to context
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to use the ResumeContext
export const useResumeContext = () => {
  return useContext(ResumeContext);
};