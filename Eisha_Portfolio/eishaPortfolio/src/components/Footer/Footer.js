import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="#" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>&copy; 2024 Eisha Khan Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
