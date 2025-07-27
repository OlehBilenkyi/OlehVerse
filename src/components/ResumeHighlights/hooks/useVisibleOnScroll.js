import { useEffect, useState } from "react";

export const useVisibleOnScroll = (threshold = 300) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, [threshold]);

  return visible;
};
