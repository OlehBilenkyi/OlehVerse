import { useRef, useEffect } from "react";
import Typed from "typed.js";

export const useTypedText = (strings) => {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings,
      typeSpeed: 40,
      backSpeed: 10,
      backDelay: 1500,
      loop: true,
      showCursor: false,
    });
    return () => typed.destroy();
  }, [strings]);

  return ref;
};
