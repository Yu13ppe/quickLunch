import { useEffect, useState } from "react";

// Simple typewriter hook: types and deletes a list of words cyclically with an optional prefix.
export default function useTypewriter({
  words = [],
  prefix = "",
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseBetweenWords = 1000,
}) {
  const [index, setIndex] = useState(0); // current word index
  const [subIndex, setSubIndex] = useState(0); // current letter index
  const [deleting, setDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!words.length) return;
    const current = words[index % words.length];

    // Decide current speed
    const speed = deleting ? deletingSpeed : typingSpeed;

    const handler = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        const next = current.substring(0, subIndex + 1);
        setSubIndex((v) => v + 1);
        setDisplay(`${prefix}${next}`);

        if (next === current) {
          // Pause before start deleting
          setTimeout(() => setDeleting(true), pauseBetweenWords);
        }
      } else {
        // Deleting backwards
        const next = current.substring(0, subIndex - 1);
        setSubIndex((v) => v - 1);
        setDisplay(`${prefix}${next}`);
        if (next === "") {
          setDeleting(false);
          setIndex((v) => (v + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(handler);
  }, [words, index, subIndex, deleting, typingSpeed, deletingSpeed, pauseBetweenWords, prefix]);

  return display;
}
