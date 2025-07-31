import React from "react";
import styles from "./About.module.css";
import useInView from "./hooks/useInView";
import AboutImage from "./AboutImage/AboutImage";
import AboutText from "./AboutText/AboutText";
import Skills from "./Skills/Skills";
import TechStack from "./TechStack/TechStack";
import SectionHeader from "../SectionHeader/SectionHeader";

const About = () => {
  const [ref, inView] = useInView(0.3);

  return (
    <section className={styles.aboutSection} id="about" ref={ref}>
      <div className={styles.aboutDecorative} />
      <div className="container">
        <div className={styles.aboutRow}>
          <AboutImage />
          <div
            className={`${styles.aboutContent} ${inView ? styles.show : ""}`}
          >
            <SectionHeader
              subtitle="Learn About Me"
              title="Junior React Developer"
              animation="fade-up"
            />
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