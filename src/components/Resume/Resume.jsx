// src/components/Resume/Resume.jsx
import styles from "./Resume.module.css";
import ResumeCard from "./ResumeCard/ResumeCard";
import { resumeData } from "./data/resumeData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.sectionHeader} data-aos="zoom-in">
        <p>Resume</p>
        <h2>Highlights</h2>
      </div>
      <div className={styles.row}>
        {resumeData.map((item, idx) => (
          <ResumeCard key={idx} {...item} delay={idx * 100} />
        ))}
      </div>
    </section>
  );
};

export default Resume;
