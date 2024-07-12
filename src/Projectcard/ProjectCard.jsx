// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, techStack }) => {
  return (
    <div className="project-card">
      <h3 className='titlepro'>{title}</h3>
      <p>{techStack.join(' | ')}</p>
    </div>
  );
};

export default ProjectCard;
