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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path d="M12 8.41l4.29 4.3 1.42-1.42L12 5.59l-5.71 5.7 1.42 1.42L12 8.41Z" />
      </svg>
    </button>
  );
};

export default BackToTop;
