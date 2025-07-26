import React from "react";
import styles from "./Navbar.module.css";

const NavLink = React.forwardRef(({ href, label, active, onClick }, ref) => (
  <a
    ref={ref}
    href={href}
    className={`${styles.link} ${active === href ? styles.active : ""}`}
    onClick={() => onClick(href)}
  >
    {label}
  </a>
));

export default NavLink;
