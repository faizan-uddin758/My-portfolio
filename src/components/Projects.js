import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Expense Tracker</h3>
          <p>Track your expenses with Firebase and Redux.</p>
          <a
            href="https://fz-food-delivery-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Redux Calculator</h3>
          <p>A calculator built with Redux state management.</p>
          <a
            href="https://fz-expense-tracker-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Redux Calculator</h3>
          <p>A calculator built with Redux state management.</p>
          <a
            href="https://redux-todoo-list-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
