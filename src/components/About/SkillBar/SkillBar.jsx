import React from "react";
import styles from "../About.module.css";

const SkillBar = ({ title, percent, animate, delay, icon }) => (
  <div className={styles.skill}>
    <div className={styles.skillName}>
      <p>
        {icon} {title}
      </p>
      <p>{percent}%</p>
    </div>
    <div className={styles.progress}>
      <div
        className={styles.progressBar}
        style={{
          width: animate ? `${percent}%` : 0,
          transitionDelay: `${delay}ms`,
        }}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  </div>
);

export default SkillBar;
