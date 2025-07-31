import { useEffect } from "react";

export const useParallax = (selector) => {
  useEffect(() => {
    const layer = document.querySelector(selector);
    if (!layer) return;

    const onScroll = () => {
      const speed = parseFloat(layer.dataset.speed || 0.3);
      const offset = window.scrollY * speed;
      layer.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [selector]);
};
