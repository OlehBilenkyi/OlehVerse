import { useRef, useEffect } from "react";
import Typed from "typed.js";

export const useTypedText = (strings) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const typed = new Typed(ref.current, {
      strings,
      typeSpeed: 40,
      backSpeed: 10,
      backDelay: 1500,
      loop: true,
      showCursor: false, // true, если не используешь свой кастомный
    });

    return () => typed.destroy();
  }, [strings]);

  return ref;
};
