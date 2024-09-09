import React from 'react';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons

const ProjectCard = ({ title, techStack, githubLink }) => {
  return (
    <div className="project-card">
      <a href={githubLink} className="github-icon" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <div className='titlepro'>
        <h3 className='title'>{title}</h3>
      </div>
      <p>{techStack.join(' | ')}</p>
    </div>
  );
};

export default ProjectCard;
