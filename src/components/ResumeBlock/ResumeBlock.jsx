// src/components/ResumeBlock.jsx
import React from "react";
import styles from "./ResumeBlock.module.css";

const ResumeBlock = () => {
  return (
    <section className={styles.resumeBlock} id="resume">
      <div className="container">
        <div className={styles.sectionHeader}>
          <p>My Resume</p>
          <h2>Download My CV</h2>
        </div>
        <p className={styles.description}>
          Здесь ты можешь просмотреть моё резюме прямо в браузере или скачать
          его в формате PDF.
        </p>
        <div className={styles.buttonGroup}>
          <a
            href="/resume/Oleh-Bilenkyi-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            📄 Смотреть онлайн
          </a>
          <a
            href="/resume/Oleh-Bilenkyi-CV.pdf"
            download
            className={styles.btnOutline}
          >
            ⬇️ Скачать PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeBlock;
