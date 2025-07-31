import React from "react";
import styles from "../About.module.css";
import { FaReact, FaHtml5, FaGithub, FaDatabase } from "react-icons/fa";

const TechStack = () => (
  <div className={styles.aboutTechStack}>
    <p>Tech Stack:</p>
    <div className={styles.aboutTechIcons}>
      <FaReact />
      <FaHtml5 />
      <FaGithub />
      <FaDatabase />
    </div>
  </div>
);

export default TechStack;
