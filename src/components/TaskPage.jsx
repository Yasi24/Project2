import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./HomePage.css"

const TaskPage = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectdes, setProjectdes] = useState("");
  const [projectPriority, setProjectPriority] = useState("");
  const [projectstatus, setProjectstatus] = useState("");
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const handleAddProject = () => {
    setIsAddingProject(true);
  };

  const handleCancelAddProject = () => {
    setIsAddingProject(false);
  };

  const handleSaveProject = () => {
    const newProject = { name: projectName, des: projectdes, priority: projectPriority, status: projectstatus};
    setProjects([...projects, newProject]);
    setIsAddingProject(false);
    setProjectName("");
    setProjectdes("");
    setProjectPriority("");
    setProjectstatus("");
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };
  
  const handleProjectdesChange = (event) => {
    setProjectdes(event.target.value);
  };
  
  const handleProjectPriorityChange = (event) => {
    setProjectPriority(event.target.value);
  };
  const handleProjectStatusChange = (event) => {
    setProjectstatus(event.target.value);
  };


  const handleViewProject = (project) => {
    setEditingProject(project);
    setProjectName(project.name);
    setProjectdes(project.des);
    setProjectPriority(project.priority);
    setProjectstatus(project.status);
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
          return { ...prevProject, name: projectName, des: projectdes, priority: projectPriority, status: projectstatus };
        }
        return prevProject;
      })
    );
    setEditingProject(null);
    setProjectName("");
    setProjectdes("");
    setProjectPriority("");
    setProjectstatus("");
  };

  return (
    <div className="home-page">
      {/* existing code */}
      <Link to="/ProfilePage">
        <button className="profile-button">Profile</button>
      </Link>
      <h3>My Specific Project</h3>
      <button onClick={handleAddProject}>Add Task</button>
      {isAddingProject || editingProject ? (
        <div>
          <input
            type="text"
            value={projectName}
            onChange={handleProjectNameChange}
            placeholder="Enter task name"
          />
          <input
            type="text"
            value={projectdes}
            onChange={handleProjectdesChange}
            placeholder="Enter task description"
          />
          {isAddingProject ? (
            <select
              value={projectPriority}
              onChange={handleProjectPriorityChange}
            >
              <option value="">Select priority level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          ) : null}
          {isAddingProject ? (
            <select
              value={projectstatus}
              onChange={handleProjectStatusChange}
            >
              <option value="">Select Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              
            </select>
          ) : null}
          {editingProject ? (
            <button onClick={handleUpdateProject}>Update</button>
          ) : (
            <button onClick={handleSaveProject}>Save</button>
          )}
          <button onClick={handleCancelAddProject}>Cancel</button>
        </div>
      ): null}
      {projects.length > 0 ? (
      <table>
      <thead>
      <tr>
      <th>Task</th>
      <th>Description</th>
      <th>Priority Level</th>
      <th>Completion Status</th>
      <th>Edit</th>
      <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {projects.map((project, index) => (
      <tr key={index}>
      <td>{project.name}</td>
      <td>{project.des}</td>
      <td>
      {editingProject && editingProject === project ? (
      <select
                         value={projectPriority}
                         onChange={handleProjectPriorityChange}
                       >
      <option value="">Select priority level</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
      </select>
      ) : (
      project.priority
      )}
      </td>
      <td>
      {editingProject && editingProject === project ? (
      <select
                         value={projectstatus}
                         onChange={handleProjectStatusChange}
                       >
      <option value="">Select Status</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
      
      </select>
      ) : (
      project.status
      )}
      </td>
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
