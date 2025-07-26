// src/components/Loader.jsx
import React from "react";
import "../assets/styles/style.css"; // если нужен глобальный стиль

const Loader = () => {
  return (
    <div id="loader" className="show">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
