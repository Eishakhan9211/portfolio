import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/Eishakhan9211" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>&copy; 2024 Eisha Khan Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
