import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👤' },
    { path: '/projects', label: 'Projects', icon: '💼' },
    { path: '/contact', label: 'Contact', icon: '📧' }
  ];

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="nav-wrapper" ref={navRef}>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`nav-link ${isActive(item.path)}`}
              onClick={closeMenu}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
              <span className="nav-indicator"></span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default Navigation;
