// src/components/About/AboutImage.jsx
import React from "react";
import styles from "./About.module.css";

const AboutImage = () => {
  return (
    <div className={styles.aboutImg} data-aos="zoom-in">
      <a
        href="https://github.com/OlehBilenkyi"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iframeWrapper}
      >
        <div className={styles.githubPreview}>
          <img
            src={`${
              import.meta.env.BASE_URL
            }img/httpsgithub.comOlehBilenkyi.jpg`}
            alt="GitHub Preview"
            className={styles.previewImage}
          />
        </div>
        <div className={styles.overlay}>
          <p>Click to view my GitHub</p>
        </div>
      </a>
    </div>
  );
};

export default AboutImage;
