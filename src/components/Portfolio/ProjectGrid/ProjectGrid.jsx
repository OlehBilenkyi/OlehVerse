// src/components/Portfolio/ProjectGrid.jsx
import React from "react";
import styles from "../Portfolio.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectGrid = ({ projects, onOpenDemo }) => (
  <div className={styles.grid}>
    {projects.map((p, i) => (
      <div data-aos="zoom-in" data-aos-delay={i * 100} key={i}>
        <ProjectCard project={p} onOpenDemo={() => onOpenDemo(p)} />
      </div>
    ))}
  </div>
);

export default ProjectGrid;
