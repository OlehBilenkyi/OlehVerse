import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import HeroButtons from "./HeroButtons";
import { useTypedText } from "./hooks/useTypedText";

const HeroText = () => {
  const [showResume, setShowResume] = useState(false);
  const typedRef = useTypedText([
    "Frontend Developer",
    "React Enthusiast",
    "UI/UX Lover",
  ]);

  useEffect(() => {
    window.__setShowResume = setShowResume;
  }, []);

  return (
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
        <span className={`wow fadeInUp ${styles.typed}`} data-wow-delay="0.5s">
          <span ref={typedRef}></span>
          <span className="typed-cursor" />
        </span>
        <HeroButtons onShowResume={() => setShowResume(true)} />
      </div>
    </div>
  );
};

export default HeroText;
