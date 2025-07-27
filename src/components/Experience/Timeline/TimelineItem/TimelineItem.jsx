import React from "react";
import styles from "../../Experience.module.css";
import TimelineContent from "../TimelineContent/TimelineContent";

const TimelineItem = ({
  date,
  title,
  company,
  description,
  position,
  shiftUp,
}) => {
  const aosType = position === "left" ? "fade-right" : "fade-left";
  const shiftClass =
    shiftUp && position === "left"
      ? styles.shiftLeftUp
      : shiftUp && position === "right"
      ? styles.shiftRightUp
      : "";

  return (
    <div
      className={`${styles["timeline-item"]} ${styles[position]} ${shiftClass}`}
      data-aos={aosType}
    >
      <TimelineContent {...{ date, title, company, description }} />
    </div>
  );
};

export default TimelineItem;
