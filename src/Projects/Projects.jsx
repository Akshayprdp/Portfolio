import React from 'react';
import ProjectCard from '../Projectcard/ProjectCard';
import './Projects.css';

const projects = [
  { 
    title: 'Text Converter', 
    techStack: ['React.js', ' HTML', 'JavaScript'], 
    githubLink: 'https://github.com/Akshayprdp/Text-Converter' 
  },
  { 
    title: 'Calculator App', 
    techStack: [ 'JavaScript', ' HTML', ' CSS,'], 
    githubLink: 'https://github.com/Akshayprdp/Projects/blob/main/JS/calculator.html' 
  },
  { 
    title: 'E-Commerce WebApp', 
    techStack: [ 'React.js', 'JavaScript',' HTML', ' MongoDB',' Express.js',' Node.js'], 
    githubLink: 'https://github.com/Akshayprdp/Cellworld-E-com' 
  },
  { 
    title: 'Freelance Project', 
    techStack: [ 'React.js', 'JavaScript',' HTML', ' MongoDB',' Express.js',' Node.js','tailwind'], 
    
  },
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
            <ProjectCard 
              key={index} 
              title={project.title} 
              techStack={project.techStack} 
              githubLink={project.githubLink} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
