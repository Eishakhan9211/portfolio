import React, { useEffect, useRef } from 'react';
import { projects } from '../../data/githubProjects';
import './Projects.css';

const Projects = () => {
  const projectCardsRef = useRef([]);

  useEffect(() => {
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

    return () => {
      projectObserver.disconnect();
    };
  }, []);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1>My Projects</h1>
          <p className="subtitle">A collection of my recent work and projects</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
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
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
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
      </section>
    </div>
  );
};

export default Projects;
