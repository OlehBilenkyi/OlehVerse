// src/components/Services.jsx
import React from "react";

const Services = () => {
  return (
    <div className="service" id="service">
      <div className="container">
        <div
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>What I Do</p>
          <h2>My Skills & Services</h2>
        </div>
        <div className="row">
          <ServiceItem
            icon="fa fa-laptop-code"
            title="Frontend Development"
            delay="0.0s"
            description="Создаю адаптивные и кроссбраузерные интерфейсы на React. Использую Tailwind, SCSS, Bootstrap."
          />
          <ServiceItem
            icon="fab fa-react"
            title="React Projects"
            delay="0.2s"
            description="Работаю с хуками, роутингом, Zustand, Firebase, API. Собираю проекты через Vite/Webpack."
          />
          <ServiceItem
            icon="fa fa-code-branch"
            title="Git & GitHub"
            delay="0.4s"
            description="Умею работать с git, ветками, pull request'ами. Все мои проекты хранятся на GitHub."
          />
          <ServiceItem
            icon="fa fa-desktop"
            title="UI/UX & Layout"
            delay="0.6s"
            description="Верстаю по Figma. Делаю чистый, аккуратный код и удобные интерфейсы."
          />
        </div>
      </div>
    </div>
  );
};

// 🔹 Вложенный компонент для услуги
const ServiceItem = ({ icon, title, description, delay }) => (
  <div className="col-lg-6 wow fadeInUp" data-wow-delay={delay}>
    <div className="service-item">
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <div className="service-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default Services;
