// src/components/About/About.jsx
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.row}>
          <div className={styles.aboutImg}>
            <img src="/img/about.jpg" alt="About Me" />
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.sectionHeader}>
              <p>Learn About Me</p>
              <h2>Junior React Developer</h2>
            </div>
            <div className={styles.aboutText}>
              <p>
                Привет, меня зовут Олег. Я начинающий фронтенд-разработчик,
                специализируюсь на React, создаю адаптивные, быстрые и красивые
                интерфейсы. Постоянно учусь и стремлюсь расти в реальных
                проектах.
              </p>
            </div>
            <div className={styles.skills}>
              <SkillBar title="React + JS" percent={90} />
              <SkillBar title="HTML / CSS / Tailwind" percent={95} />
              <SkillBar title="Git / GitHub" percent={85} />
              <SkillBar title="Firebase / REST API" percent={80} />
            </div>
            <button
              className="btn"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              See My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Вложенный компонент прогресс-бара
const SkillBar = ({ title, percent }) => (
  <>
    <div className={styles.skillName}>
      <p>{title}</p>
      <p>{percent}%</p>
    </div>
    <div className={styles.progress}>
      <div
        className={styles.progressBar}
        role="progressbar"
        style={{ width: `${percent}%` }}
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  </>
);

export default About;
