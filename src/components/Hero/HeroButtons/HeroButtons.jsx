import styles from "../Hero.module.css";

const HeroButtons = ({ onShowResume }) => (
  <div className={`wow fadeInUp ${styles.heroBtn}`} data-wow-delay="0.7s">
    <a href="#portfolio">My Work</a>
    <a href="#contact">Contact Me</a>
    <button type="button" className={styles.cvBtn} onClick={onShowResume}>
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
);

export default HeroButtons;
