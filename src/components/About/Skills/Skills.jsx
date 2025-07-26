import React from "react";
import SkillBar from "../SkillBar/SkillBar";
import { FaReact, FaHtml5, FaGithub, FaDatabase } from "react-icons/fa";
import styles from "../About.module.css";

const skills = [
  { title: "React + JS", icon: <FaReact />, percent: 90, delay: 0 },
  {
    title: "HTML / CSS / Tailwind",
    icon: <FaHtml5 />,
    percent: 95,
    delay: 200,
  },
  { title: "Git / GitHub", icon: <FaGithub />, percent: 85, delay: 400 },
  {
    title: "Firebase / REST API",
    icon: <FaDatabase />,
    percent: 80,
    delay: 600,
  },
];

const Skills = ({ inView }) => (
  <div className={styles.skills}>
    {skills.map((skill, i) => (
      <SkillBar key={i} {...skill} animate={inView} />
    ))}
  </div>
);

export default Skills;
