import React from "react";
import styles from "../About.module.css";

const SkillBar = ({ title, percent, animate, delay, icon }) => (
  <div className={styles.aboutSkillItem}>
    <div className={styles.aboutSkillHeader}>
      <p>
        {icon} {title}
      </p>
      <p>{percent}%</p>
    </div>
    <div className={styles.aboutSkillProgress}>
      <div
        className={styles.aboutSkillBar}
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
