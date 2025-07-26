import React from "react";
import styles from "./Portfolio.module.css";

const PortfolioModal = ({ project, onClose }) => (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <button className={styles.close} onClick={onClose}>
        ❌
      </button>
      <iframe
        src={project.demoUrl}
        title={project.title}
        frameBorder="0"
        className={styles.iframe}
      />
    </div>
  </div>
);

export default PortfolioModal;
