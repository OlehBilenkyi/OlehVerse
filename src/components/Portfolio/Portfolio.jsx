// src/components/Portfolio/Portfolio.jsx
import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import ProjectCard from "./ProjectCard";
import PortfolioModal from "./PortfolioModal";
import { projects } from "./projects"; // наш новый файл

const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p>My Portfolio</p>
          <h2>My Completed Projects</h2>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} onDemo={setSelected} />
          ))}
        </div>
        {selected && (
          <PortfolioModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
