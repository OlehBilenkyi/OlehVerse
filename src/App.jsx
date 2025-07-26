import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTopOnLoad from "./components/ScrollToTopOnLoad";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
// import ResumeBlock from "./components/ResumeBlock/ResumeBlock";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div id="app">
      <ScrollToTopOnLoad />
      <Loader />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        {/* <ResumeBlock /> */}
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
