// src/components/Hero/HeroText/HeroText.jsx
import { useTypedText } from "../hooks/useTypedText";
import styles from "../Hero.module.css";
import SectionHeader from "../../SectionHeader/SectionHeader";
import HeroButtons from "../HeroButtons/HeroButtons";

const HeroText = ({ onShowResume }) => {
  const typedRef = useTypedText([
    "Frontend Developer",
    "React Enthusiast",
    "UI/UX Lover",
  ]);

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
        <HeroButtons onShowResume={onShowResume} />
      </div>
    </div>
  );
};

export default HeroText;
