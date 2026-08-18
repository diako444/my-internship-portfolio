import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Personal Developer Portfolio',
      description:
        'A modern, fully responsive portfolio website built with React and Vite, featuring custom styling, clean component architecture, and smooth section navigation.',
      tags: ['React', 'JavaScript', 'CSS3', 'Vite'],
      githubLink: 'https://github.com/diako444/my-internship-portfolio',
      demoLink: '#',
      badge: 'Featured',
    },
    {
      id: 2,
      title: 'Real Estate / Property Showcase',
      description:
        'An interactive property listing web application with dynamic search, category filtering, responsive grid layouts, and clean property detail views.',
      tags: ['React', 'JavaScript', 'CSS Modules', 'REST API'],
      githubLink: 'https://github.com',
      demoLink: '#',
      badge: 'In Progress Frontend Project',
    },
    {
      id: 3,
      title: 'Full-Stack Management System',
      description:
        'A CRUD-based web application demonstrating authentication, database relations, and API endpoints connecting a React frontend with a PHP/Laravel backend.',
      tags: ['React', 'PHP', 'Laravel', 'MySQL'],
      githubLink: 'https://github.com',
      demoLink: '#',
      badge: 'In Progress / Concept',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        {/* Header */}
        <div className="projects-header">
          <span className="section-label">PORTFOLIO</span>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="projects-subtitle">
            Here are some of the web applications and practical projects I've built to demonstrate my frontend and full-stack capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectList.map((project) => (
            <div className="project-card" key={project.id}>
              
              <div className="card-top">
                <span className="project-badge">{project.badge}</span>
                <div className="project-folder-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Tech Tags */}
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-link github-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </a>

                <a
                  href={project.demoLink}
                  className="proj-link demo-btn"
                >
                  <span>Live Preview</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
