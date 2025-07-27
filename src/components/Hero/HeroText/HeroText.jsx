// src/components/Hero/HeroText.jsx
import { useState, useEffect } from "react";
import styles from "../Hero.module.css";
import HeroButtons from "../HeroButtons/HeroButtons";
import { useTypedText } from "../hooks/useTypedText";
import SectionHeader from "../../SectionHeader/SectionHeader";

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
        <SectionHeader
          subtitle="Hello! 👋"
          title="I'm Oleh — Frontend Developer"
          animation="fade-up"
        />
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
