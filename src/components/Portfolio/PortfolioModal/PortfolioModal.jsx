import React, { useState, useEffect } from "react";
import styles from "../../Modal/PortfolioModal.module.css";

const PortfolioModal = ({ project, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // На случай, если iframe не вызывает onLoad
    const fallback = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(fallback);
  }, [project]);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {isLoading && <div className={styles.loader} />}
        <div className={styles.toolbar}>
          <button
            className={styles.iconBtn}
            onClick={() => window.open(project.demoUrl, "_blank")}
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 
      1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7H5V5Z"
              />
            </svg>
          </button>

          <button className={styles.iconBtn} onClick={onClose}>
            <svg viewBox="0 0 24 24">
              <path
                d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L12 13.41l-6.29 6.3-1.42-1.42L10.59 12 
      4.29 5.71 5.71 4.29 12 10.59l6.29-6.3 1.42 1.42Z"
              />
            </svg>
          </button>
        </div>
        <iframe
          src={project.demoUrl}
          title={project.title}
          onLoad={() => setIsLoading(false)}
          style={{ visibility: isLoading ? "hidden" : "visible" }}
        />
      </div>
    </div>
  );
};

export default PortfolioModal;
