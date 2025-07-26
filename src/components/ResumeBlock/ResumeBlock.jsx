// src/components/ResumeBlock.jsx
import React from "react";

const ResumeBlock = () => {
  return (
    <section className="resume-block text-center py-5" id="resume">
      <div className="container">
        <div className="section-header wow zoomIn" data-wow-delay="0.1s">
          <p>My Resume</p>
          <h2>Download My CV</h2>
        </div>
        <p className="lead mb-4">
          Здесь ты можешь просмотреть моё резюме прямо в браузере или скачать
          его в формате PDF.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a
            href="/resume/Oleh-Bilenkyi-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            📄 Смотреть онлайн
          </a>
          <a
            href="/resume/Oleh-Bilenkyi-CV.pdf"
            download
            className="btn btn-outline-primary"
          >
            ⬇️ Скачать PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeBlock;
