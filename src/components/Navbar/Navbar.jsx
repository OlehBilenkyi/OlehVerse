import React, { useState, useRef } from "react";
import styles from "./Navbar.module.css";

import useScrollPosition from "./hooks/useScrollPosition";
import useScrollSpy from "./hooks/useScrollSpy";
import useIndicatorPosition from "./hooks/useIndicatorPosition";

import ToggleButton from "./ToggleButton";
import ScrollProgress from "./ScrollProgress";
import Backdrop from "./Backdrop";
import NavLinks from "./NavLinks";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#service", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrolled, visible, scrollProgress } = useScrollPosition();
  const active = useScrollSpy(links);
  const linkRefs = useRef([]);
  const indicator = useIndicatorPosition(active, linkRefs, open);

  const onLinkClick = (href) => {
    setOpen(false);
    // прокрутка по якорю отработает сама
  };

  return (
    <>
      {open && <Backdrop onClick={() => setOpen(false)} />}

      <ScrollProgress progress={scrollProgress} />

      <nav
        className={`
          ${styles.navbar}
          ${scrolled ? styles.scrolled : ""}
          ${!visible ? styles.hidden : ""}
        `}
      >
        <a href="#home" className={styles.brand}>
          OlehVerse
        </a>
        <ToggleButton open={open} onClick={() => setOpen((o) => !o)} />
        {" "}
        <NavLinks
          links={links}
          open={open}
          active={active}
          onLinkClick={onLinkClick}
          linkRefs={linkRefs}
          indicator={indicator}
        />
      </nav>
    </>
  );
};

export default Navbar;
