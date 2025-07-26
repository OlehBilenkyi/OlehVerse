// src/components/Experience.jsx
import React from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    date: "2024 - наст. время",
    title: "Frontend Developer",
    company: "Freelance & Pet Projects",
    description:
      "Разработка адаптивных сайтов и приложений на React. Работа с Tailwind, Zustand, REST API, Firebase. Создание личного портфолио и визуальных компонентов.",
  },
  {
    date: "2023 - 2024",
    title: "Frontend Student",
    company: "Self-learning & Online Courses",
    description:
      "Прошёл курсы по HTML, CSS, JS, React. Работал над учебными и реальными проектами. Изучал дизайн, сборку проектов, Git и GitHub.",
  },
];

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="container">
        <div
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>My Journey</p>
          <h2>Experience & Learning</h2>
        </div>
        <div className="timeline">
          {experiences.map((item, index) => (
            <TimelineItem
              key={index}
              position={index % 2 === 0 ? "left" : "right"}
              delay={`${0.1 + index * 0.2}s`}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({
  date,
  title,
  company,
  description,
  position,
  delay,
}) => (
  <div
    className={`timeline-item ${position} wow slideIn${
      position === "left" ? "Left" : "Right"
    }`}
    data-wow-delay={delay}
  >
    <div className="timeline-text">
      <div className="timeline-date">{date}</div>
      <h2>{title}</h2>
      <h4>{company}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default Experience;
