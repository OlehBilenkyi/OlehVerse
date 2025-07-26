// src/components/Navbar/NavLinks.jsx
import React from "react";
import styles from "../Navbar.module.css";
import NavLink from "../NavLink/NavLink";

const NavLinks = ({
  links,
  open,
  active,
  onLinkClick,
  linkRefs,
  indicator,
}) => (
  <div className={`${styles.navLinks} ${open ? styles.open : ""}`}>
    {links.map(({ href, label }, i) => (
      <NavLink
        key={href}
        ref={(el) => (linkRefs.current[i] = el)}
        href={href}
        label={label}
        isActive={active === href}
        onClick={() => onLinkClick(href)}
      />
    ))}
    <span
      className={styles.indicator}
      style={{
        transform: `translateX(${indicator.left}px)`,
        width: `${indicator.width}px`,
      }}
    />
  </div>
);

export default NavLinks;
