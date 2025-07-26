// src/components/Services/Services.jsx
import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="service" className={styles.service}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p>What I Do</p>
          <h2>My Skills & Services</h2>
        </div>
        <div className={styles.row}>
          <div
            className={`${styles.serviceItem} wow fadeInUp`}
            data-wow-delay="0s"
          >
            <div className={styles.serviceIcon}>
              <i className="fa fa-laptop-code"></i>
            </div>
            <div className={styles.serviceText}>
              <h3>Frontend Development</h3>
              <p>Создаю адаптивные и кроссбраузерные интерфейсы на React.</p>
            </div>
          </div>

          <div
            className={`${styles.serviceItem} wow fadeInUp`}
            data-wow-delay="0.2s"
          >
            <div className={styles.serviceIcon}>
              <i className="fab fa-react"></i>
            </div>
            <div className={styles.serviceText}>
              <h3>React Projects</h3>
              <p>
                Работаю с хуками, роутингом, Zustand, Firebase, REST API и
                сборкой через Vite/Webpack.
              </p>
            </div>
          </div>

          <div
            className={`${styles.serviceItem} wow fadeInUp`}
            data-wow-delay="0.4s"
          >
            <div className={styles.serviceIcon}>
              <i className="fa fa-code-branch"></i>
            </div>
            <div className={styles.serviceText}>
              <h3>Git & GitHub</h3>
              <p>
                Умею работать с git, ветками и pull request’ами. Все проекты на
                GitHub.
              </p>
            </div>
          </div>

          <div
            className={`${styles.serviceItem} wow fadeInUp`}
            data-wow-delay="0.6s"
          >
            <div className={styles.serviceIcon}>
              <i className="fa fa-desktop"></i>
            </div>
            <div className={styles.serviceText}>
              <h3>UI/UX & Layout</h3>
              <p>Верстаю по Figma, делаю чистый и аккуратный код.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
