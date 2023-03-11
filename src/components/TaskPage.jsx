import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./HomePage.css"

const TaskPage = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

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
    setEditingProject(project);
    setProjectName(project.name);
  };

  const handleDeleteProject = (project) => {
    setProjects((prevProjects) =>
      prevProjects.filter((prevProject) => prevProject !== project)
    );
  };

  const handleUpdateProject = () => {
    setProjects((prevProjects) =>
      prevProjects.map((prevProject) => {
        if (prevProject === editingProject) {
          return { ...prevProject, name: projectName };
        }
        return prevProject;
      })
    );
    setEditingProject(null);
    setProjectName("");
  };

  return (
    
    <div className="home-page">
      
      
      {/* existing code */}
      
      
        <Link to="/ProfilePage"><button className="profile-button">Profile</button> </Link>
        <h3>My Specific Project</h3>
      
      <button onClick={handleAddProject}>Add Task</button>
      {isAddingProject || editingProject ? (
        <div>
          <input
            type="text"
            value={projectName}
            onChange={handleProjectNameChange}
          />
          {editingProject ? (
            <button onClick={handleUpdateProject}>Update</button>
          ) : (
            <button onClick={handleSaveProject}>Save</button>
          )}
          <button onClick={handleCancelAddProject}>Cancel</button>
        </div>
      ) : null}
      {projects.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>
                  <button onClick={() => handleViewProject(project)}>
                    Edit
                  </button>
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
        <p>No Tasks found.</p>
      )}
      
    </div>
  );
};

export default TaskPage;
