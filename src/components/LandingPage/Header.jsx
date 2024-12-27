import React from 'react';

const Header = ({ handleGetStartedClick }) => { // Accept the prop
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Resume Maker */}
        <div className="text-[30px] font-[900]">
          Resume Maker
        </div>

        {/* Right Side - Get Started Button */}
        <div>
          <button 
            onClick={handleGetStartedClick} // Attach the click handler
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;