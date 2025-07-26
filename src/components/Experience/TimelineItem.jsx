import React from "react";
import styles from "./Experience.module.css";

const TimelineItem = ({ date, title, company, description, position }) => {
  const aosType = position === "left" ? "fade-right" : "fade-left";

  return (
    <div
      className={`${styles["timeline-item"]} ${styles[position]}`}
      data-aos={aosType}
    >
      <div className={styles["timeline-text"]}>
        <div className={styles["timeline-date"]}>{date}</div>
        <h3 className={styles["timeline-title"]}>{title}</h3>
        <h4 className={styles["timeline-company"]}>{company}</h4>
        <p className={styles["timeline-desc"]}>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
