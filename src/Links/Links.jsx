import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Links.css';

function Links() {
  return (
    <div className='link-container' id='Links'>
      <div className='about-work'>
        <h1 className='Aboutlink'>On the web -</h1>
        <h1 className='More-work'>More of my work</h1>
      </div>
      <div className="links">
        <a
          href="https://github.com/Akshayprdp"
          target="_blank"
          rel="noopener noreferrer"
          className="link1"
        >
          <FaGithub className="link-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/akshay_prdp/"
          target="_blank"
          rel="noopener noreferrer"
          className="link2"
        >
          <FaInstagram className="link-icon" />
          <span>Instagram</span> 
        </a>

        <a
          href="https://www.linkedin.com/in/akshayprdp21/"
          target="_blank"
          rel="noopener noreferrer"
          className="link3"
        >
          <FaLinkedin className="link-icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Links;
