import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Food delivery app</h3>
          <p>A Food Delivery application that allows users to browse restaurants!</p>
          <a
            href="https://fz-food-delivery-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Expense tracker</h3>
          <p>Track your daily expenses and watvh it in form of table and graph!</p>
          <a
            href="https://fz-expense-tracker-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card">
          <h3>Redux User-list</h3>
          <p>user list using redux wich fetch random users!</p>
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
