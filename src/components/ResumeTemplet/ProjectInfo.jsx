import React from 'react';
import { useResumeContext } from '../Context/ResumeContext';

const ProjectInfo = () => {
  const { projects } = useResumeContext();

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Projects</h2>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div key={index} className="border-b border-gray-300 pb-2 mb-2">
            <h3 className="font-semibold">{project.title || 'Project Title'}</h3>
            <p className="text-gray-600">{project.description || 'Project Description'}</p>
            <p className="text-gray-600">Technologies: {project.technologies || 'Technologies Used'}</p>
            {project.link && (
              <p className="text-gray-600">
                Link: <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">{project.link}</a>
              </p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No projects available.</p>
      )}
    </div>
  );
};

export default ProjectInfo;