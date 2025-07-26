import { useState, useEffect } from "react";

export default function useIndicatorPosition(active, linkRefs, open) {
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const idx = linkRefs.current.findIndex(
      (el) => el?.getAttribute("href") === active
    );
    const ref = linkRefs.current[idx];
    if (ref) {
      setIndicator({ left: ref.offsetLeft, width: ref.offsetWidth });
    }
  }, [active, open, linkRefs]);

  return indicator;
}
