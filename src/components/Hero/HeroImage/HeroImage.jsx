import styles from "../Hero.module.css";

const HeroImage = () => (
  <div className={styles.heroImageBlock}>
    <div className="wow zoomIn" data-wow-delay="0.9s">
      <img
        className={styles.heroImage}
        src={`${import.meta.env.BASE_URL}img/me.jpg`}
        alt="Oleh Bilenkyi"
      />
    </div>
  </div>
);

export default HeroImage;
