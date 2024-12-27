import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate('/resume-builder'); // Navigate to the form page
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Resume Builder</h2>
            <p className="text-sm">Craft your future with a professional resume.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={handleGetStartedClick} // Attach the click handler
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-10 rounded transition duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
            <p className='text-[1.3em] font-bold'>@Arman</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;