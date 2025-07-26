// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <div className="hero-content">
              <div className="hero-text">
                <p className="wow fadeInUp" data-wow-delay="0.1s">
                  I'm
                </p>
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                  Oleh Bilenkyi
                </h1>
                <h2 className="wow fadeInUp" data-wow-delay="0.5s"></h2>
                <div className="typed-text wow fadeInUp" data-wow-delay="0.7s">
                  Frontend Developer, React Developer, UI Engineer, Web
                  Enthusiast
                </div>
              </div>
              <div className="hero-btn wow fadeInUp" data-wow-delay="0.9s">
                <a className="btn" href="#portfolio">
                  My Work
                </a>
                <a className="btn" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 d-none d-md-block">
            <div className="hero-image wow zoomIn" data-wow-delay="1s">
              <img src="/img/hero.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
