import React from "react";
import styles from "./Experience.module.css";
import TimelineItem from "./TimelineItem";
import experiences from "./experienceData";

const Experience = () => (
  <section id="experience" className={styles.experience}>
    <div className={styles.wrapper}>
      <div className={styles["section-header"]} data-aos="zoom-in">
        <p>My Journey</p>
        <h2>Experience & Learning</h2>
      </div>

      <div className={styles.timeline}>
        {experiences.map((item, index) => (
          <TimelineItem
            key={index}
            position={index % 2 === 0 ? "left" : "right"}
            {...item}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
