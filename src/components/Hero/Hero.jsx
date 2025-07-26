import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="home" className={`${styles.hero}`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.heroText}>
            <p className="wow fadeInUp" data-wow-delay="0.1s">
              I'm
            </p>
            <h1 className="wow fadeInUp" data-wow-delay="0.3s">
              Oleh Bilenkyi
            </h1>
            <div
              className={`${styles.typed} wow fadeInUp`}
              data-wow-delay="0.5s"
            >
              Frontend Developer • React • UI/UX Enthusiast
            </div>
            <div
              className={`${styles.heroBtn} wow fadeInUp`}
              data-wow-delay="0.7s"
            >
              <a href="#portfolio">My Work</a>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className="wow zoomIn" data-wow-delay="0.9s">
            <img
              className={styles.heroImage}
              src="/img/hero.png"
              alt="Hero illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
