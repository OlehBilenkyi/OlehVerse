import styles from "./ResumeHighlights.module.css";
import ResumeCard from "./ResumeCard/ResumeCard";
import { resumeHighlightsData } from "./data/resumeHighlightsData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ResumeHighlights = () => {
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
        {resumeHighlightsData.map((item, idx) => (
          <ResumeCard key={idx} {...item} delay={idx * 100} />
        ))}
      </div>
    </section>
  );
};

export default ResumeHighlights;
