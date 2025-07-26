// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <div className="container-fluid">
        <a href="#home" className="navbar-brand">
          OlehVerse
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto">
            <a href="#home" className="nav-item nav-link active">
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#service" className="nav-item nav-link">
              Services
            </a>
            <a href="#experience" className="nav-item nav-link">
              Experience
            </a>
            <a href="#portfolio" className="nav-item nav-link">
              Portfolio
            </a>
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
