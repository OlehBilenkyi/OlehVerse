import React from "react";
import styles from "./About.module.css";
import useInView from "./hooks/useInView";
import AboutImage from "./AboutImage/AboutImage";
import AboutText from "./AboutText/AboutText";
import Skills from "./Skills/Skills";
import TechStack from "./TechStack/TechStack";

const About = () => {
  const [ref, inView] = useInView(0.3);

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.decorative} />
      <div className="container">
        <div className={styles.row}>
          <AboutImage />
          <div
            className={`${styles.aboutContent} ${inView ? styles.show : ""}`}
          >
            <div className={styles.sectionHeader}>
              <p data-aos="fade-up">Learn About Me</p>
              <h2 data-aos="fade-up" data-aos-delay="200">
                Junior React Developer
              </h2>
            </div>
            <AboutText inView={inView} />
            <Skills inView={inView} />
            <TechStack />
            <button
              className="btn"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
