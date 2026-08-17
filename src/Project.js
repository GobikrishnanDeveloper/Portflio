import React from "react";
import "./Project.css";

function Project() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <p className="projects-intro">
        Here’s my completed project and some upcoming ones.
      </p>

      {/* Completed Project */}
      <div className="project-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A responsive portfolio built with React and CSS showcasing my skills
            and projects.
          </p>
          <button className="btn-view">View Project</button>
        </div>
      </div>

      {/* Upcoming Projects */}
      <h3 className="upcoming-title">Upcoming Projects</h3>
      <div className="project-grid">
        <div className="project-card upcoming">
          <h3>Blog Application</h3>
          <p>Coming soon: A full-stack blog app with Python backend.</p>
          <button className="btn-view">Coming Soon</button>
        </div>
        <div className="project-card upcoming">
          <h3>E-commerce Demo</h3>
          <p>Practice project to learn product listings and cart features.</p>
          <button className="btn-view">Coming Soon</button>
        </div>
      </div>
    </section>
  );
}

export default Project;
