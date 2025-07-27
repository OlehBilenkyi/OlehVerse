// src/components/Portfolio/ProjectCard.jsx
import React from "react";
import styles from "../Portfolio.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, onOpenDemo }) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className={styles.overlay}>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.buttons}>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconBtn}
            title="GitHub Code"
          >
            <FaGithub />
          </a>
          <button
            className={styles.iconBtn}
            onClick={onOpenDemo}
            title="Live Preview"
          >
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
