// src/components/Portfolio.jsx
import React, { useState } from "react";
import styles from "../assets/styles/Portfolio.module.css"; // создашь свой модуль

const projects = [
  {
    title: "Taxi App",
    image: "img/taxi.png",
    demoUrl: "https://olehbilenkyi.github.io/TaxiAppBuiltWithReact/",
    codeUrl: "https://github.com/OlehBilenkyi/TaxiAppBuiltWithReact",
  },
  {
    title: "Meal Planner",
    image: "img/meal.png",
    demoUrl: "https://olehbilenkyi.github.io/MealPlannerPro/",
    codeUrl: "https://github.com/OlehBilenkyi/MealPlannerPro",
  },
  {
    title: "React Food Case",
    image: "img/food.png",
    demoUrl: "https://olehbilenkyi.github.io/ReactFoodCase/",
    codeUrl: "https://github.com/OlehBilenkyi/ReactFoodCase",
  },
  {
    title: "Mini YouTube Player",
    image: "img/youtube.png",
    demoUrl: "https://olehbilenkyi.github.io/MiniPlayerForYoutube/",
    codeUrl: "https://github.com/OlehBilenkyi/MiniPlayerForYoutube",
  },
  {
    title: "React Resume",
    image: "img/resume.png",
    demoUrl: "https://olehbilenkyi.github.io/ReactResume/",
    codeUrl: "https://github.com/OlehBilenkyi/ReactResume",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p>My Portfolio</p>
          <h2>My Completed Projects</h2>
        </div>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div className={styles.card} key={index}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3>{project.title}</h3>
                <div className={styles.buttons}>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btn}
                  >
                    📂 Код
                  </a>
                  <button
                    className={styles.btn}
                    onClick={() => setSelectedProject(project)}
                  >
                    👁 Демо
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <button
                className={styles.close}
                onClick={() => setSelectedProject(null)}
              >
                ❌
              </button>
              <iframe
                src={selectedProject.demoUrl}
                title={selectedProject.title}
                frameBorder="0"
                className={styles.iframe}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
