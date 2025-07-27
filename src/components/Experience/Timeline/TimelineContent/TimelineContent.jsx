import React from "react";
import styles from "../../Experience.module.css";

const TimelineContent = ({ date, title, company, description }) => (
  <div className={styles["timeline-text"]}>
    <div className={styles["timeline-date"]}>{date}</div>
    <h3 className={styles["timeline-title"]}>{title}</h3>
    <h4 className={styles["timeline-company"]}>{company}</h4>
    <p className={styles["timeline-desc"]}>{description}</p>
  </div>
);

export default TimelineContent;
