import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Me</h1>
          <p className="subtitle">Geospatial data analyst and cartographer</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-text">
            <h2>Hello, I'm Eisha Khan</h2>
            <p>
              I am a passionate Geospatial data analyst and cartographer with expertise in frontend development. 
              I specialize in creating exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
            <p>
              With a strong foundation in web technologies and geospatial analysis, I bring a unique perspective 
              to every project. I love solving complex problems and turning ideas into beautiful, functional applications.
            </p>
          </div>
        </div>
      </section>

      <section className="experience-education-section">
        <div className="experience-education-container">
          <div className="experience-section">
            <h2>Professional Experience</h2>
            <div className="experience-card">
              <div className="experience-date">JUNE - AUGUST 2024</div>
              <div className="experience-title">GIS Lab Forest Department</div>
              <div className="experience-role">GIS Intern</div>
              <div className="experience-description">
                Developed custom GIS tools and conducted comprehensive spatial analysis for environmental monitoring projects, 
                utilizing Python and PostGIS to support forest management and conservation efforts.
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Education</h2>
            <div className="education-card">
              <div className="education-date">2021 - 2025</div>
              <div className="education-degree">BSc in Geographic Information System</div>
              <div className="education-university">University of the Punjab</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-skills">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>GIS & Geospatial</h3>
                <ul>
                  <li>ArcGIS</li>
                  <li>QGIS</li>
                  <li>Geospatial Analysis</li>
                  <li>Cartography</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                  <li>Git</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>API Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
