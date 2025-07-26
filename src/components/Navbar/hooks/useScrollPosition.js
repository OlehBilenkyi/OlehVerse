import { useState, useEffect, useRef } from "react";

export default function useScrollPosition() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const prevY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      // auto-hide on scroll-down, show on scroll-up
      if (y > prevY.current && y > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      prevY.current = y;

      // progress bar
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((y / docH) * 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, visible, scrollProgress };
}
