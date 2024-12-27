import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Banner = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate('/resume-builder'); // Navigate to the form page
  };

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Create Your Resume
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Build a professional resume in minutes.
            Customize your resume to stand out from the crowd.
            Get noticed by employers with a stunning resume.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleGetStartedClick} // Attach the click handler
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;