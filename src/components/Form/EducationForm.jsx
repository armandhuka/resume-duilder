import React, { useState } from "react";
import { useResumeContext } from "../Context/ResumeContext"; // Import the context

const EducationForm = () => {
  const { setEducation } = useResumeContext(); // Get setEducation from context
  const [std10, setStd10] = useState({ institution: "", passingMark: "", passingYear: "" });
  const [std12, setStd12] = useState({ institution: "", passingMark: "", passingYear: "" });
  const [college, setCollege] = useState({ name: "", degree: "", fieldOfStudy: "", passingMarks: "", passingYear: "" });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(std10, std12, college);
    
    // Create an education object
    const educationData = {
      std10,
      std12,
      college,
    };
    
    // Pass the education data to the context
    setEducation(prev => [...prev, educationData]);
    
    // Reset fields after submission
    setStd10({ institution: "", passingMark: "", passingYear: "" });
    setStd12({ institution: "", passingMark: "", passingYear: "" });
    setCollege({ name: "", degree: "", fieldOfStudy: "", passingMarks: "", passingYear: "" });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Education Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Standard 10 Details */}
        <h3 className="text-xl font-semibold mb-2">Standard 10</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Institution:
            <input
              type="text"
              placeholder="Enter your institution name"
              value={std10.institution}
              onChange={(e) => setStd10({ ...std10, institution: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Passing Mark:
            <input
              type="number"
              placeholder="Enter your passing mark"
              value={std10.passingMark}
              onChange={(e) => setStd10({ ...std10, passingMark: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Passing Year:
            <input
              type="number"
              placeholder="Enter your passing year"
              value={std10.passingYear}
              onChange={(e) => setStd10({ ...std10, passingYear: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>

        {/* Standard 12 Details */}
        <h3 className="text-xl font-semibold mb-2">Standard 12</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Institution:
            <input
              type="text"
              placeholder="Enter your institution name"
              value={std12.institution}
              onChange={(e) => setStd12({ ...std12, institution: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Passing Mark:
            <input
              type="number"
              placeholder="Enter your passing mark"
              value={std12.passingMark}
              onChange={(e) => setStd12({ ...std12, passingMark: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Passing Year:
            <input
              type="number"
              placeholder="Enter your passing year"
              value={std12.passingYear}
              onChange={(e) => setStd12({ ...std12, passingYear: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>

        {/* College Details */}
        <h3 className="text-xl font-semibold mb-2">College</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            College Name:
            <input
              type="text"
              placeholder="Enter your college name"
              value={college.name}
              onChange={(e) => setCollege({ ...college, name: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Degree:
            <input
              type="text"
              placeholder="Enter your degree"
              value={college.degree}
              onChange={(e) => setCollege({ ...college, degree: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Field of Study:
            <input
              type="text"
              placeholder="Enter your field of study"
              value={college.fieldOfStudy}
              onChange={(e) => setCollege({ ...college, fieldOfStudy: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Passing Marks:
            <input
              type="number"
              placeholder="Enter your passing marks"
              value={college.passingMarks}
              onChange={(e) => setCollege({ ...college, passingMarks: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Passing Year:
            <input
              type="number"
              placeholder="Enter your passing year"
              value={college.passingYear}
              onChange={(e) => setCollege({ ...college, passingYear: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EducationForm;