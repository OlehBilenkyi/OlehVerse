import { useState, useEffect } from "react";

const useCursorBlink = (intervalMs = 500) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return visible;
};

export default useCursorBlink;
