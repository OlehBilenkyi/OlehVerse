import { useState, useEffect } from "react";

export default function useScrollSpy(links, offset = 80) {
  const [active, setActive] = useState(links[0].href);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      for (let { href } of links) {
        const el = document.querySelector(href);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y + offset >= top && y + offset < bottom) {
          setActive(href);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [links, offset]);

  return active;
}
