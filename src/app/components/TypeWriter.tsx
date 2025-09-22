import React, { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText("");
    setIsTyping(true);
    
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (typewriterRef.current && !typewriterRef.current.contains(event.target as Node)) {
        setDisplayedText("");
        setIsTyping(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={typewriterRef} className={`inline ${className}`}>
      {displayedText}
      {isTyping && (
        <span className="inline-block w-0.5 h-4 bg-blue-500 ml-1 animate-pulse"></span>
      )}
    </div>
  );
};

export default TypewriterText;
