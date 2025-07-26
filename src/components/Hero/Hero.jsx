// src/components/Hero/Hero.jsx
import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import Modal from "../Modal/Modal";
import styles from "./Hero.module.css";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "React Enthusiast", "UI/UX Lover"],
      typeSpeed: 40,
      backSpeed: 10,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    });

    const layer = document.querySelector(`.${styles.parallaxLayer}`);
    const onScroll = () => {
      const offset = window.scrollY * parseFloat(layer.dataset.speed);
      layer.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      typed.destroy();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.parallaxLayer} data-speed="0.3" />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.heroText}>
            <p className="wow fadeInUp" data-wow-delay="0.1s">
              Hi, I’m
            </p>
            <h1
              className={`wow fadeInUp ${styles.gradientText}`}
              data-wow-delay="0.3s"
            >
              Oleh Bilenkyi
            </h1>

            <span
              className={`wow fadeInUp ${styles.typed}`}
              data-wow-delay="0.5s"
            >
              <span ref={typedRef}></span>
              <span className="typed-cursor" />
            </span>

            <div
              className={`wow fadeInUp ${styles.heroBtn}`}
              data-wow-delay="0.7s"
            >
              <a href="#portfolio">My Work</a>
              <a href="#contact">Contact Me</a>
              <button
                type="button"
                className={styles.cvBtn}
                onClick={() => setShowResume(true)}
              >
                📄 View CV
              </button>
              <a
                href="/resume/Oleh-Bilenkyi-CV.pdf"
                download
                className={styles.downloadBtn}
              >
                ⬇️ Download CV
              </a>
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

      <Modal
        isOpen={showResume}
        onClose={() => setShowResume(false)}
        title="My Resume"
      >
        <iframe
          src="/resume/Oleh-Bilenkyi-CV.pdf"
          title="CV"
          style={{ width: "100%", height: "80vh", border: "none" }}
        />
        <div className={styles.modalFooter}>
          <a
            href="/resume/Oleh-Bilenkyi-CV.pdf"
            download
            className="btn downloadBtn"
          >
            ⬇️ Download PDF
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
