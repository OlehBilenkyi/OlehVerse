import { useState } from "react";
import styles from "./Hero.module.css";
import HeroText from "./HeroText/HeroText";
import HeroImage from "./HeroImage/HeroImage";
import ResumeModal from "./ResumeModal/ResumeModal";
import { useParallax } from "./hooks/useParallax";

const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  useParallax(`.${styles.heroParallaxLayer}`);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroParallaxLayer} data-speed="0.3" />
      <div className={styles.heroContentWrapper}>
        <HeroText onShowResume={() => setResumeOpen(true)} />
        <HeroImage />
      </div>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};

export default Hero;
