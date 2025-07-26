// src/components/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2>Oleh Bilenkyi</h2>
        <p>Frontend Developer</p>
        <div className={styles.contactInfo}>
          <p>
            Email:{" "}
            <a href="mailto:oleh.bilenkyi@gmail.com">oleh.bilenkyi@gmail.com</a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/OlehBilenkyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              OlehBilenkyi
            </a>
          </p>
        </div>
        <div className={styles.social}>
          <a
            href="https://github.com/OlehBilenkyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:oleh.bilenkyi@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} OlehVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
