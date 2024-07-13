import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaPen } from 'react-icons/fa';
import './Links.css'

function Links() {
  const links = [
    { href: 'https://github.com/Akshayprdp', icon: <FaGithub className="link-icon" />, label: 'GitHub' },
    { href: 'https://www.instagram.com/akshay_prdp/', icon: <FaInstagram className="link-icon" />, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/akshayprdp21/', icon: <FaLinkedin className="link-icon" />, label: 'LinkedIn' },
  ];

  return (
    <div className='link-container'>
      <div className='about-work'>
      <h1 className='Aboutlink'>On the web -</h1>
      <h1 className='More-work'>More of my work</h1>
      </div>
      <div className="links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>

    </div>
  )
}

export default Links
