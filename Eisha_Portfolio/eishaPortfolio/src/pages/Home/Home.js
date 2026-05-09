import React, { useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../../data/githubProjects';
import './Home.css';

const Home = () => {
  const heroContentRef = useRef(null);
  const projectCardsRef = useRef([]);
  const skillItemsRef = useRef([]);

  // Generate static positions for background elements
  const backgroundElements = useMemo(() => {
    const dataPoints = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3
    }));

    const connectionLines = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60,
      top: 20 + Math.random() * 60,
      rotation: Math.random() * 360,
      delay: Math.random() * 2
    }));

    const scatterPoints = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: 30 + Math.random() * 40,
      top: 30 + Math.random() * 40,
      delay: Math.random() * 2
    }));

    return { dataPoints, connectionLines, scatterPoints };
  }, []);

  useEffect(() => {
    // Hero content animation
    if (heroContentRef.current) {
      setTimeout(() => {
        heroContentRef.current.style.opacity = '1';
        heroContentRef.current.style.transform = 'translateY(0)';
      }, 300);
    }

    // Intersection Observer for project cards
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 150);
            projectObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectCardsRef.current.forEach((card) => {
      if (card) projectObserver.observe(card);
    });

    // Intersection Observer for skill items
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 150);
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    skillItemsRef.current.forEach((skill) => {
      if (skill) skillObserver.observe(skill);
    });

    return () => {
      projectObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="gis-background">
          <div className="grid-pattern"></div>
          <div className="data-points">
            {backgroundElements.dataPoints.map((point) => (
              <div key={point.id} className="data-point" style={{
                left: `${point.left}%`,
                top: `${point.top}%`,
                animationDelay: `${point.delay}s`
              }}></div>
            ))}
          </div>
          <div className="connection-lines">
            {backgroundElements.connectionLines.map((line) => (
              <div key={line.id} className="connection-line" style={{
                left: `${line.left}%`,
                top: `${line.top}%`,
                transform: `rotate(${line.rotation}deg)`,
                animationDelay: `${line.delay}s`
              }}></div>
            ))}
          </div>
          <div className="map-polygons">
            <div className="polygon polygon-1"></div>
            <div className="polygon polygon-2"></div>
            <div className="polygon polygon-3"></div>
          </div>
          <div className="data-visualization">
            <div className="chart-bar bar-1"></div>
            <div className="chart-bar bar-2"></div>
            <div className="chart-bar bar-3"></div>
            <div className="chart-bar bar-4"></div>
          </div>
          <div className="scatter-plot">
            {backgroundElements.scatterPoints.map((point) => (
              <div key={point.id} className="scatter-point" style={{
                left: `${point.left}%`,
                top: `${point.top}%`,
                animationDelay: `${point.delay}s`
              }}></div>
            ))}
          </div>
          <div className="network-nodes">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="network-node" style={{
                left: `${15 + (i % 3) * 35}%`,
                top: `${20 + Math.floor(i / 3) * 30}%`,
                animationDelay: `${i * 0.5}s`
              }}>
                <div className="node-core"></div>
                <div className="node-ring"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content" ref={heroContentRef}>
          <h1><span className="highlight">Geospatial data analyst and cartographer</span></h1>
          <h2>Frontend Developer</h2>
          <p>I build exceptional digital experiences that are fast, accessible, and visually appealing.</p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn primary">View Projects</Link>
            <Link to="/contact" className="btn secondary">Contact Me</Link>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-container">
          {featuredProjects.map((project, index) => (
            <div
              className="project-card"
              key={project.id}
              ref={(el) => {
                projectCardsRef.current[index] = el;
              }}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <i className="fab fa-github project-image-fallback" aria-hidden="true" />
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="btn primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo
                    </a>
                  ) : null}
                  <a
                    href={project.link}
                    className={project.liveUrl ? 'btn secondary' : 'btn primary'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <Link to="/projects" className="btn secondary">View All Projects</Link>
        </div>
      </section>

      <section className="skills">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill-item" ref={(el) => (skillItemsRef.current[0] = el)}>
            <i className="fab fa-html5"></i>
            <p>HTML5</p>
          </div>
          <div className="skill-item" ref={(el) => (skillItemsRef.current[1] = el)}>
            <i className="fab fa-css3-alt"></i>
            <p>CSS3</p>
          </div>
          <div className="skill-item" ref={(el) => (skillItemsRef.current[2] = el)}>
            <i className="fab fa-js"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-item" ref={(el) => (skillItemsRef.current[3] = el)}>
            <i className="fab fa-react"></i>
            <p>React</p>
          </div>
          <div className="skill-item" ref={(el) => (skillItemsRef.current[4] = el)}>
            <i className="fab fa-git-alt"></i>
            <p>Git</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
