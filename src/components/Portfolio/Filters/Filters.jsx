// src/components/Portfolio/Filters.jsx
import React from "react";
import styles from "../Portfolio.module.css";

const Filters = ({ filters, activeFilter, setActiveFilter }) => (
  <div className={styles.filters}>
    {filters.map((f) => (
      <button
        key={f}
        onClick={() => setActiveFilter(f)}
        className={`${styles.filterBtn} ${
          activeFilter === f ? styles.active : ""
        }`}
      >
        {f}
      </button>
    ))}
  </div>
);

export default Filters;
