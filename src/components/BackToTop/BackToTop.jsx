// src/components/BackToTop.jsx
import React, { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";


const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      className={`${styles.backToTop} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
};

export default BackToTop;
