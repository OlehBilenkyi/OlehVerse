// src/components/common/SectionHeader.jsx
import React from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = ({ subtitle, title, animation = "zoom-in" }) => (
  <div className={`section-header`} data-aos={animation}>
    <p>{subtitle}</p>
    <h2>{title}</h2>
  </div>
);

export default SectionHeader;
