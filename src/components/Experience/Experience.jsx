import React from "react";
import styles from "./Experience.module.css";
import SectionHeader from "./SectionHeader/SectionHeader";
import Timeline from "./Timeline/Timeline/Timeline";

const Experience = () => (
  <section id="experience" className={styles.experience}>
    <div className={styles.wrapper}>
      <SectionHeader
        subtitle="My Journey"
        title="Experience & Learning"
        animation="zoom-in"
      />
      <Timeline />
    </div>
  </section>
);

export default Experience;
