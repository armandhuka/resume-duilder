import React, { useRef } from 'react';
import PersonalInfo from './PersonalInfo';
import EducationInfo from './EducationInfo';
import WorkInfo from './WorkInfo';
import SkillsInfo from "./SkillsInfo";
import ProjectInfo from "./ProjectInfo";
import html2pdf from 'html2pdf.js';

const ResumeTemplat = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    const opt = {
      margin:       1,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        console.log('Resume downloaded successfully!');
      })
      .catch((error) => {
        console.error('Error downloading resume:', error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl" ref={resumeRef}>
        <PersonalInfo />
        <EducationInfo />
        <WorkInfo />
        <SkillsInfo />
        <ProjectInfo />
      </div>
      <button 
        onClick={handleDownload} 
        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Download Resume
      </button>
    </div>
  );
};

export default ResumeTemplat;

