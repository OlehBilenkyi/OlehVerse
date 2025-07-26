import React from "react";
import styles from "./Portfolio.module.css";

const ProjectCard = ({ project, onDemo }) => (
  <div className={styles.card}>
    <img src={project.image} alt={project.title} className={styles.image} />
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
        <button className={styles.btn} onClick={() => onDemo(project)}>
          👁 Демо
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
