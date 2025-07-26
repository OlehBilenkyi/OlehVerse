import { useEffect } from "react";

export const useParallax = (selector) => {
  useEffect(() => {
    const layer = document.querySelector(selector);
    const onScroll = () => {
      const offset = window.scrollY * parseFloat(layer.dataset.speed);
      layer.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [selector]);
};
