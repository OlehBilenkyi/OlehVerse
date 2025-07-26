import React from "react";
import styles from "./Experience.module.css";
import TimelineItem from "./TimelineItem";

const experiences = [
  {
    date: "2024 – наст. время",
    title: "Frontend Developer",
    company: "Freelance & Pet Projects",
    description:
      "Разработка адаптивных сайтов и приложений на React. Работа с Zustand, REST API, Firebase. Создание портфолио и визуальных компонентов.",
  },
  {
    date: "2023 – 2024",
    title: "Frontend Student",
    company: "Self-learning & Online Courses",
    description:
      "Курсы по HTML, CSS, JS, React. Учебные и pet-проекты. Изучение дизайна, сборки, Git и GitHub.",
  },
];

const Experience = () => (
  <section id="experience" className={styles.experience}>
    <div className={styles.wrapper}>
      <div
        className={`${styles["section-header"]} wow zoomIn`}
        data-wow-delay="0.1s"
      >
        <p>My Journey</p>
        <h2>Experience & Learning</h2>
      </div>
      <div className={styles.timeline}>
        {experiences.map((item, i) => (
          <TimelineItem
            key={i}
            position={i % 2 === 0 ? "left" : "right"}
            delay={`${0.1 + i * 0.2}s`}
            {...item}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
