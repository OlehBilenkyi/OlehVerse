import { useEffect } from "react";

const ScrollToTopOnLoad = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return null;
};

export default ScrollToTopOnLoad;
