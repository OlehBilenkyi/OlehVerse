// src/components/Portfolio/usePortfolio.js
import { useState, useEffect } from "react";
import AOS from "aos";
import { projects } from "../data/projects";

export const usePortfolio = () => {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const filters = ["All", "React", "Fullstack", "PHP", "Firebase"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return {
    selected,
    setSelected,
    activeFilter,
    setActiveFilter,
    filters,
    filteredProjects,
  };
};
