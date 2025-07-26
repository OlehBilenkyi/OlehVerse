import React from "react";
import useTypingEffect from "../hooks/useTypingEffect";
import useCursorBlink from "../hooks/useCursorBlink";
import styles from "../About.module.css";

const AboutText = ({ inView }) => {
  const displayedText = useTypingEffect(inView);
  const cursorVisible = useCursorBlink();

  return (
    <div className={styles.aboutText}>
      <p>
        {displayedText}
        <span
          className={styles.cursor}
          style={{ opacity: cursorVisible ? 1 : 0 }}
        >
          |
        </span>
      </p>
    </div>
  );
};

export default AboutText;
