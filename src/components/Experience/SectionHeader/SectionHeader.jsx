import React from "react";
import styles from "../Experience.module.css";

const SectionHeader = ({ subtitle, title, animation = "fade-up" }) => (
  <div className={styles["section-header"]} data-aos={animation}>
    <p className={styles.sectionSub}>{subtitle}</p>
    <h2 className={styles.sectionMain}>{title}</h2>
  </div>
);

export default SectionHeader;
