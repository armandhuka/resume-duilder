import React from 'react';
import { useResumeContext } from '../Context/ResumeContext';

const EducationInfo = () => {
  const { education } = useResumeContext();

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Education</h2>
      {education.length > 0 ? (
        education.map((edu, index) => (
          <div key={index} className="border-b border-gray-300 pb-2 mb-2">
            {/* Standard 10 Information */}
            <h3 className="font-semibold">Standard 10: {edu.std10.institution || 'Institution Name'}</h3>
            <p className="text-gray-600">Passing Mark: {edu.std10.passingMark || 'N/A'} - Year: {edu.std10.passingYear || 'N/A'}</p>

            {/* Standard 12 Information */}
            <h3 className="font-semibold">Standard 12: {edu.std12.institution || 'Institution Name'}</h3>
            <p className="text-gray-600">Passing Mark: {edu.std12.passingMark || 'N/A'} - Year: {edu.std12.passingYear || 'N/A'}</p>

            {/* College Information */}
            <h3 className="font-semibold">College: {edu.college.name || 'College Name'}</h3>
            <p className="text-gray-600">Degree: {edu.college.degree || 'Degree'} - Field: {edu.college.fieldOfStudy || 'Field of Study'} - Marks: {edu.college.passingMarks || 'N/A'} - Year: {edu.college.passingYear || 'N/A'}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No education information available.</p>
      )}
    </div>
  );
};

export default EducationInfo;