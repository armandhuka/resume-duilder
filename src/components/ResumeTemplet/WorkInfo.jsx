import React from 'react';
import { useResumeContext } from '../Context/ResumeContext';

const WorkInfo = () => {
  const { workExperience } = useResumeContext();

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Work Experience</h2>
      {workExperience.length > 0 ? (
        workExperience.map((work, index) => (
          <div key={index} className="border-b border-gray-300 pb-2 mb-2">
            <h3 className="font-semibold">{work.role || 'Job Title'} at {work.company || 'Company Name'}</h3>
            <p className="text-gray-600">{work.startDate || 'Start Date'} - {work.endDate || 'End Date'}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No work experience added yet.</p>
      )}
    </div>
  );
};

export default WorkInfo;