// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <h2 className={styles.title}>Oleh Bilenkyi</h2>
      <p className={styles.subtitle}>Frontend Developer</p>

      <div className={styles.contactInfo}>
        <p>
          Email:&nbsp;
          <a href="mailto:oleh.bilenkyi@gmail.com">oleh.bilenkyi@gmail.com</a>
        </p>
        <p>
          GitHub:&nbsp;
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
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/olehbilenkyi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:oleh.bilenkyi@gmail.com" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} OlehVerse. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
