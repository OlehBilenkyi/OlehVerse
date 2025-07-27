import styles from "../ResumeHighlights.module.css";
import * as Icons from "react-icons/fa";

const ResumeCard = ({ icon, title, description, delay }) => {
  const IconComponent = Icons[icon];

  return (
    <div className={styles.card} data-aos="fade-up" data-aos-delay={delay}>
      <div className={styles.icon}>
        <IconComponent />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
