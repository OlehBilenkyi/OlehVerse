import React from "react";
import styles from "./Navbar.module.css";

const ScrollProgress = ({ progress }) => (
  <div className={styles.scrollProgress} style={{ width: `${progress}%` }} />
);

export default ScrollProgress;
