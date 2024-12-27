import React, { useState } from "react";
import { useResumeContext } from "../Context/ResumeContext"; // Import the context

const ProjectForm = () => {
  const { setProjects } = useResumeContext(); // Get setProjects from context
  const [projects, setProjectsState] = useState([
    { title: "", description: "", technologies: "", link: "", isExpanded: true },
  ]);

  const handleChange = (index, event) => {
    const newProjects = [...projects];
    newProjects[index][event.target.name] = event.target.value;
    setProjectsState(newProjects);
  };

  const toggleExpand = (index) => {
    const newProjects = [...projects];
    newProjects[index].isExpanded = !newProjects[index].isExpanded;
    setProjectsState(newProjects);
  };

  const addProject = () => {
    setProjectsState([
      ...projects,
      { title: "", description: "", technologies: "", link: "", isExpanded: true },
    ]);
  };

  const deleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjectsState(newProjects); // Remove the project at the specified index
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Projects:", projects);
    
    // Pass the projects data to the context
    setProjects(projects);
    
    // Reset projects after submission
    setProjectsState([{ title: "", description: "", technologies: "", link: "", isExpanded: true }]); // Reset to initial state
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-50 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Project Details</h2>
      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title || `Project ${index + 1}`}
                </h3>
                <span className="text-gray-500 text-xl">
                  {project.isExpanded ? "▲" : "▼"}
                </span>
              </div>
              {project.isExpanded && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Project Title:
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={project.title}
                      placeholder="Enter project title"
                      onChange={(event) => handleChange(index, event)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Description:
                    </label>
                    <textarea
                      name="description"
                      value={project.description}
                      placeholder="Enter a brief description of the project"
                      onChange={(event) => handleChange(index, event)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                      rows="4"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Technologies Used:
                    </label>
                    <input
                      type="text"
                      name="technologies"
                      value={project.technologies}
                      placeholder="e.g., React, Node.js, etc."
                      onChange={(event) => handleChange(index, event)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Project Link (if any):
                    </label>
                    <input
                      type="url" // Correctly specify the type
                      name="link" // Correctly specify the name
                      value={project.link}
                      placeholder="Enter project link"
                      onChange={(event) => handleChange (index, event)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => deleteProject(index)}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete Project
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addProject}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add Another Project
        </button>
        <button
          type="submit"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Submit Projects
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;