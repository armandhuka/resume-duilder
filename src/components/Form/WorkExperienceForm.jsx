import React, { useState } from "react";
import { useResumeContext } from "../Context/ResumeContext"; // Import the context

const WorkExperienceForm = () => {
  const { workExperience,setWorkExperience } = useResumeContext(); // Get setWorkExperience from context
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFresher, setIsFresher] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(company, role, startDate, endDate, isFresher);
    console.log(workExperience);
    
    
    // Create a work experience object
    const workExperienceData = {
      company: isFresher ? "Fresher" : company, // Set company to "Fresher" if isFresher is true
      role: isFresher ? "Fresher" : role, // Set role to "Fresher" if isFresher is true
      startDate,
      endDate,
      isFresher, // Include fresher status
    };
    
    // Pass the work experience data to the context
    setWorkExperience(prev => [...prev, workExperienceData]);
    
    // Reset fields after submission
    setCompany("");
    setRole("");
    setStartDate("");
    setEndDate("");
    setIsFresher(false); 
  };

  const handleFresherClick = () => {
    setIsFresher(true);
    setCompany("Fresher"); // Set company field to "Fresher"
    setRole("Fresher"); // Set role field to "Fresher"

    // Set work experience in context to indicate no work experience
    setWorkExperience([{ company: "Fresher", role: "No Work Experience", startDate: "", endDate: "", isFresher: true }]);
  };

  return (
    <div className="max-w-md mx-auto p-6  ">
      <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Company Name:
            <input
              type="text"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required={!isFresher} // Make required if not fresher
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Role/Position:
            <input
              type="text"
              placeholder="Enter your role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required={!isFresher} // Make required if not fresher
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Start Date:
            <input
              type="month"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required={!isFresher} // Make required if not fresher
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            End Date (or "Present" if ongoing):
            <input
              type="month"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
        </div>
        <button
          type="button"
          onClick={handleFresherClick}
          className="w-full mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
        >
          I am a Fresher
        </button>
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkExperienceForm;