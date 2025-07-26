import styles from "../Hero.module.css";

const HeroImage = () => (
  <div className={styles.right}>
    <div className="wow zoomIn" data-wow-delay="0.9s">
      <img
  className={styles.heroImage}
  src="/img/me.jpg"
  alt="Oleh Bilenkyi"
/>
    </div>
  </div>
);

export default HeroImage;
