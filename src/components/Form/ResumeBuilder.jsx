import React, { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import WorkExperienceForm from "./WorkExperienceForm";
import SkillsForm from "./SkillsForm";
import ProjectForm from "./ProjectForm";
import { useNavigate } from 'react-router-dom';

const ResumeBuilder = () => {
  const navigate = useNavigate(); 
  const [currentStep, setCurrentStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const steps = [
    { component: <PersonalInfoForm setPersonalInfo={setPersonalInfo} />, skip: false },
    { component: <EducationForm setEducation={setEducation} />, skip: true },
    { component: <WorkExperienceForm setWorkExperience={setWorkExperience} />, skip: true },
    { component: <SkillsForm setSkills={setSkills} />, skip: true },
    { component: <ProjectForm onFinish={setProjects} />, skip: false },
  ];

  const nextStep = () => {
    if (currentStep === steps.length - 1) {
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const skipStep = () => {
    if (steps[currentStep].skip && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const finishResume = () => {
    navigate('/resume-template');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> {/* Centering the form */}
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Resume Builder</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {currentStep < steps.length && steps[currentStep].component}

          <div className="flex justify-between mt-4">
            <button
              onClick={prevStep}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              disabled={currentStep === 0}
            >
              Previous
            </button>
            {currentStep === steps.length - 1 ? (
              <button
                onClick={finishResume}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Finish
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;