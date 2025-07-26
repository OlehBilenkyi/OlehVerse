import React from "react";
import styles from "../About.module.css";

const AboutImage = () => (
  <div className={styles.aboutImg} data-aos="zoom-in">
    <div className={styles.imageCard}>
      <img src="/img/about.jpg" alt="About Me" />
    </div>
  </div>
);

export default AboutImage;
