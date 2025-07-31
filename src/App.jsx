import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTopOnLoad from "./components/ScrollToTopOnLoad";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Experience from "./components/Experience/Experience";
// import ResumeBlock from "./components/ResumeBlock/ResumeBlock";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="appWrapper">
      <ScrollToTopOnLoad />
      <Loader />
      <Navbar />

      <main className="mainContent">
        <Hero />
        <About />
        <Experience />
        {/* <ResumeBlock /> */}
        <Portfolio />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
