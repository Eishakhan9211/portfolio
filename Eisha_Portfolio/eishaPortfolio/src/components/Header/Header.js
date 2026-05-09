import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <div className="logo">
          <Link to="/">
            <span className="logo-text">Eisha Khan</span>
            <span className="logo-subtitle">GIS Portfolio</span>
          </Link>
        </div>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
