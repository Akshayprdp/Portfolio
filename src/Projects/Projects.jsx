// Projects.js
import React from 'react';
import ProjectCard from '../Projectcard/ProjectCard';
import './Projects.css';

const projects = [
  { title: 'Text Converter', techStack: ['React.js', ' HTML', 'JavaScript'] },
  { title: 'Calculator App', techStack: [ 'JavaScript', ' HTML', ' CSS,'] },
  { title: 'E-Commerce WebApp', techStack: [ 'React.js', 'JavaScript',' HTML', ' MongoDB',' Express.js',' Node.js'] },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      
      <div className='projectsdiv1'>
      <h1 className='proh1'>Projects-</h1>
      <h2>Tasks I've Undertaken</h2>
      </div>
      <div className='projectcard1'>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} techStack={project.techStack} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
