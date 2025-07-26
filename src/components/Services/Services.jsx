import styles from "./Services.module.css";

<div className={styles.service} id="service">
  <div className="container">
    <div className={styles.sectionHeader}>
      <p>What I Do</p>
      <h2>My Skills & Services</h2>
    </div>
    <div className={styles.row}>
      <div className={styles.serviceItem}>
        <div className={styles.serviceIcon}>
          <i className="fa fa-laptop-code"></i>
        </div>
        <div className={styles.serviceText}>
          <h3>Frontend Development</h3>
          <p>Создаю адаптивные и кроссбраузерные интерфейсы на React.</p>
        </div>
      </div>
      {/* другие блоки аналогично */}
    </div>
  </div>
</div>;
