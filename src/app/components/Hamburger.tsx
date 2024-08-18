// Hamburger.tsx
import React from "react";

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="flex flex-col space-y-1 p-2 cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-5 h-0.5 bg-white transition-transform ${
          isOpen ? "transform rotate-45 translate-y-1.5" : ""
        }`}
      />
      <div
        className={`w-5 h-0.5 bg-white transition-opacity ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <div
        className={`w-5 h-0.5 bg-white transition-transform ${
          isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
