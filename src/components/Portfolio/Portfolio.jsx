// src/components/Portfolio/Portfolio.jsx
import React from "react";
import styles from "./Portfolio.module.css";
import Filters from "./Filters/Filters";
import ProjectGrid from "./ProjectGrid/ProjectGrid";
import Modal from "../Modal/Modal";
import modalStyles from "../Modal/PortfolioModal.module.css";
import { usePortfolio } from "./hooks/usePortfolio";
import { projects } from "./data/projects";

const Portfolio = () => {
  const {
    selected,
    setSelected,
    activeFilter,
    setActiveFilter,
    filters,
    filteredProjects,
  } = usePortfolio();

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className="section-header" data-aos="fade-up">
          <p>My Portfolio</p>
          <h2>My Completed Projects</h2>
        </div>

        <Filters
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <ProjectGrid projects={filteredProjects} onOpenDemo={setSelected} />
      </div>

      {selected && (
        <Modal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          className={modalStyles.backdrop}
          contentClass={modalStyles.modal}
        >
          <div className={modalStyles.toolbar}>
            <a
              href={selected.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={modalStyles.iconBtn}
              title="Open in new tab"
            >
              ↗
            </a>
            <button
              onClick={() => setSelected(null)}
              className={modalStyles.iconBtn}
              aria-label="Close modal"
              title="Close"
            >
              ×
            </button>
          </div>

          <iframe
            src={selected.demoUrl}
            title={selected.title}
            allow="fullscreen"
          />
        </Modal>
      )}
    </section>
  );
};

export default Portfolio;
