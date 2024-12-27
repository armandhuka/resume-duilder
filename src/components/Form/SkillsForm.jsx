import React, { useState } from 'react';
import { useResumeContext } from '../Context/ResumeContext';

const SkillsForm = () => {
  const { skills, setSkills, softSkills, setSoftSkills } = useResumeContext();
  const [softSkillInputs, setSoftSkillInputs] = useState([{ skill: '', type: 'Soft' }]);
  const [techSkillInputs, setTechSkillInputs] = useState([{ skill: '', type: 'Technical' }]);
  const [error, setError] = useState(''); // State for error messages

  const handleSoftSkillChange = (index, value) => {
    const newSoftSkills = [...softSkillInputs];
    newSoftSkills[index].skill = value;
    setSoftSkillInputs(newSoftSkills);
  };

  const handleTechSkillChange = (index, value) => {
    const newTechSkills = [...techSkillInputs];
    newTechSkills[index].skill = value;
    setTechSkillInputs(newTechSkills);
  };

  const addSoftSkillInput = () => {
    setSoftSkillInputs([...softSkillInputs, { skill: '', type: 'Soft' }]);
  };

  const addTechSkillInput = () => {
    setTechSkillInputs([...techSkillInputs, { skill: '', type: 'Technical' }]);
  };

  const deleteSoftSkillInput = (index) => {
    if (softSkillInputs.length > 1) {
      const newSoftSkills = softSkillInputs.filter((_, i) => i !== index);
      setSoftSkillInputs(newSoftSkills);
    }
  };

  const deleteTechSkillInput = (index) => {
    if (techSkillInputs.length > 1) {
      const newTechSkills = techSkillInputs.filter((_, i) => i !== index);
      setTechSkillInputs(newTechSkills);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); 

    // Validate inputs
    const allInputs = [...softSkillInputs, ...techSkillInputs];
    const hasEmptyInput = allInputs.some(input => input.skill.trim() === '');
    if (hasEmptyInput) {
      setError('Please fill in all skill fields.');
      return;
    }

    setSoftSkills(softSkillInputs);
    setSkills(techSkillInputs);

    // Clear inputs after submission
    setSoftSkillInputs([{ skill: '', type: 'Soft' }]);
    setTechSkillInputs([{ skill: '', type: 'Technical' }]);
  };

  return (
    <div className="p-4 bg-white">
      <form onSubmit={handleSubmit} className="mb-6">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        {error && <p className="text-red-500">{error}</p>}

        {/* Soft Skills Section */}
        <h3 className="text-lg font-semibold mb-1">Soft Skills</h3>
        {softSkillInputs.map((input, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={input.skill}
              placeholder="Enter a soft skill"
              onChange={(e) => handleSoftSkillChange(index, e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => deleteSoftSkillInput(index)}
              className="ml-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              disabled={softSkillInputs.length === 1} // Disable if it's the last input
            >
              Delete
            </button>
            {index === softSkillInputs.length - 1 && (
              <button
                type="button"
                onClick={addSoftSkillInput}
                className="ml-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Add
              </button>
            )}
          </div>
        ))}

        {/* Technical Skills Section */}
        <h3 className="text-lg font-semibold mb-1">Technical Skills</h3>
        {techSkillInputs.map((input, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
 type="text"
              value={input.skill}
              placeholder="Enter a technical skill"
              onChange={(e) => handleTechSkillChange(index, e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => deleteTechSkillInput(index)}
              className="ml-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              disabled={techSkillInputs.length === 1} // Disable if it's the last input
            >
              Delete
            </button>
            {index === techSkillInputs.length - 1 && (
              <button
                type="button"
                onClick={addTechSkillInput}
                className="ml-2 p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Add
              </button>
            )}
          </div>
        ))}

        {/* Submit and Clear Buttons */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 mr-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              setSoftSkillInputs([{ skill: '', type: 'Soft' }]);
              setTechSkillInputs([{ skill: '', type: 'Technical' }]);
            }}
            className="mt-4 p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkillsForm;