// Hamburger.tsx
import React from "react";

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
      aria-label="Toggle menu"
    >
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
