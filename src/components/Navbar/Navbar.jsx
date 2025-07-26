import React, { useState } from "react";
import styles from "./Navbar.module.css";

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

  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.brand}>
        OlehVerse
      </a>
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div
        className={`${styles.navLinks} ${open ? styles.open : ""}`}
        onClick={() => setOpen(false)}
      >
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`${styles.link} ${
              window.location.hash === href ? styles.active : ""
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
