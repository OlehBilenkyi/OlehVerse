import React, { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import ResumeBlock from "./components/ResumeBlock/ResumeBlock";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

// Optional: для анимации при скролле (если подключён wow.js, AOS, framer-motion и т.п.)
// Можно активировать дополнительные скролл-анимации или эффекты тут
function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // При загрузке страницы прокрутка вверх
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <ResumeBlock />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
