import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./HomePage.css"
const HomePage = () => {
  const [projects, setProjects] = useState([]);

  const [projectName, setProjectName] = useState("");
  const [isAddingProject, setIsAddingProject] = useState(false);

  const handleAddProject = () => {
    setIsAddingProject(true);
  };

  const handleCancelAddProject = () => {
    setIsAddingProject(false);
  };

  const handleSaveProject = () => {
    const newProject = { name: projectName };
    setProjects([...projects, newProject]);
    setIsAddingProject(false);
    setProjectName("");
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleViewProject = (project) => {
    // Replace this with your implementation for viewing a project
    console.log(`Viewing project "${project.name}"`);
  };

  const handleDeleteProject = (project) => {
    setProjects((prevProjects) =>
      prevProjects.filter((prevProject) => prevProject !== project)
    );
  };

  return (
    
    <div className="home-page">
      
      
      {/* existing code */}
      
      
        <Link to="/ProfilePage"><button className="profile-button">Profile</button> </Link>
        <h3>My Projects</h3>
      
      <button onClick={handleAddProject}>Add Project</button>
      {isAddingProject && (
        <div>
          <input
            type="text"
            value={projectName}
            onChange={handleProjectNameChange}
          />
          <button onClick={handleSaveProject}>Save</button>
          <button onClick={handleCancelAddProject}>Cancel</button>
        </div>
      )}
      {projects.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>
                  <Link to="/TaskPage"><button onClick={() => handleViewProject(project)}>
                    View
                  </button></Link>
                </td>
                <td>
                  <button onClick={() => handleDeleteProject(project)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No projects found.</p>
      )}
      
    </div>
  );
};

export default HomePage;
