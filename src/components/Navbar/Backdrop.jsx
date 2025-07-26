import React from "react";
import styles from "./Navbar.module.css";

const Backdrop = ({ onClick }) => (
  <div className={styles.backdrop} onClick={onClick} />
);

export default Backdrop;
