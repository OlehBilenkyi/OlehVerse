import React from "react";
import styles from "./Navbar.module.css";

const ToggleButton = ({ open, onClick }) => (
  <button
    className={`${styles.toggle} ${open ? styles.open : ""}`}
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <span className={styles.bar} />
    <span className={styles.bar} />
    <span className={styles.bar} />
  </button>
);

export default ToggleButton;
