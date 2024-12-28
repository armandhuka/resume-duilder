import React from 'react';
import { useResumeContext } from '../Context/ResumeContext';

const PersonalInfo = () => {
  const { personalInfo } = useResumeContext();

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-center">{personalInfo.name || 'Your Name'}</h1>
      <div className='flex items-center text-center justify-center gap-1'>
      <p className="text-gray-600">{personalInfo.phone || 'Your Phone Number'}</p>
      <p>|</p>
      <p className="text-gray-600">{personalInfo.email || 'Your Email'}</p>
      </div>
      <p className="text-gray-600">{personalInfo.summary || 'Your Summary'}</p> {/* Display Summary */}
      {personalInfo.linkedin && (
        <p className="text-gray-600">
          LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">{personalInfo.linkedin}</a>
        </p>
      )} {/* Display LinkedIn URL if available */}
    </div>
  );
};

export default PersonalInfo;