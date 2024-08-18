import React, { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 10,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText(""); 
    const intervalId = setInterval(() => {
      if (currentIndex < text.length-1) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (typewriterRef.current && !typewriterRef.current.contains(event.target as Node)) {
        setDisplayedText(""); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return <div ref={typewriterRef}>{displayedText}</div>;
};

export default TypewriterText;
