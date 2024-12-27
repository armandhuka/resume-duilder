import React, { useState } from "react";
import { useResumeContext } from "../Context/ResumeContext"; 

const PersonalInfoForm = () => {
  const { personalInfo, setPersonalInfo } = useResumeContext(); // Get setPersonalInfo from context
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [linkedin, setLinkedin] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setPersonalInfo({ name, email, phone, summary, linkedin }); // Set the personal info in context
    console.log(personalInfo);

    // Clear the input fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setSummary(""); 
    setLinkedin(""); 
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">Personal Information</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name:
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone:
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Summary:
            <textarea
              placeholder="Introduce yourself..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              rows="4" // Set the number of rows for the textarea
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            LinkedIn Profile URL:
            <input
              type="url"
              placeholder="Enter your LinkedIn profile URL"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </label>
        </div>
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

export default PersonalInfoForm;