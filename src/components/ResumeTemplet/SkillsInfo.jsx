import React from 'react';
import { useResumeContext } from '../Context/ResumeContext';

const SkillsInfo = () => {
  const { skills, softSkills } = useResumeContext(); // Ensure softSkills is included

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      
      {/* Display Technical Skills */}
      {skills.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold">Technical Skills</h3>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-600">{skill.skill || 'Technical Skill Name'}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">No technical skills listed.</p>
      )}

      {/* Display Soft Skills */}
      {softSkills.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold">Soft Skills</h3>
          <ul className="list-disc list-inside">
            {softSkills.map((skill, index) => (
              <li key={index} className="text-gray-600">{skill.skill || 'Soft Skill Name'}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">No soft skills listed.</p>
      )}
    </div>
  );
};

export default SkillsInfo;