// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="/img/about.jpg" alt="About Me" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-header text-left">
                <p>Learn About Me</p>
                <h2>Junior React Developer</h2>
              </div>
              <div className="about-text">
                <p>
                  Привет, меня зовут Олег. Я начинающий фронтенд-разработчик,
                  специализируюсь на React, создаю адаптивные, быстрые и
                  красивые интерфейсы. Постоянно учусь и стремлюсь расти в
                  реальных проектах.
                </p>
              </div>
              <div className="skills">
                <SkillBar title="React + JS" percent={90} />
                <SkillBar title="HTML / CSS / Tailwind" percent={95} />
                <SkillBar title="Git / GitHub" percent={85} />
                <SkillBar title="Firebase / REST API" percent={80} />
              </div>
              <a className="btn" href="#portfolio">
                See My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔹 Вложенный компонент прогресс-бара
const SkillBar = ({ title, percent }) => (
  <>
    <div className="skill-name">
      <p>{title}</p>
      <p>{percent}%</p>
    </div>
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${percent}%` }}
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </>
);

export default About;
