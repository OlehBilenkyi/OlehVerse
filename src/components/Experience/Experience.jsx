import React from "react";
import styles from "./Experience.module.css";
import TimelineItem from "./TimelineItem";
import experiences from "./experienceData";

const Experience = () => (
  <section id="experience" className={styles.experience}>
    <div className={styles.wrapper}>
      <div className={styles["section-header"]} data-aos="zoom-in">
        <p className={styles.sectionSub}>My Journey</p>
        <h2 className={styles.sectionMain}>Experience & Learning</h2>
      </div>

      <div className={styles.timeline}>
        {experiences.map((item, index) => {
          const position = index % 2 === 0 ? "left" : "right";
          const shouldShift =
            (position === "left" && index >= 2) ||
            (position === "right" && index >= 3);

          return (
            <TimelineItem
              key={index}
              index={index}
              position={position}
              shiftUp={shouldShift}
              {...item}
            />
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
