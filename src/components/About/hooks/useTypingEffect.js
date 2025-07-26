import { useState, useEffect } from "react";

const typingText =
  "Hi, my name is Oleh. I'm a junior front-end developer specializing in React. I build responsive, fast, and beautiful interfaces. I'm constantly learning and striving to grow through real-world projects.";

const useTypingEffect = (inView, speed = 12) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!inView || text.length >= typingText.length) return;

    const interval = setInterval(() => {
      setText((prev) => typingText.slice(0, prev.length + 1));
    }, speed);

    return () => clearInterval(interval);
  }, [inView, text]);

  return text;
};

export default useTypingEffect;
