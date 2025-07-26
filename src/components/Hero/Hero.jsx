import styles from "./Hero.module.css";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import ResumeModal from "./ResumeModal";
import { useParallax } from "./hooks/useParallax";

const Hero = () => {
  useParallax(`.${styles.parallaxLayer}`);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.parallaxLayer} data-speed="0.3" />
      <div className={styles.inner}>
        <HeroText />
        <HeroImage />
      </div>
      <ResumeModal />
    </section>
  );
};

export default Hero;
