// LanguageDropdown.tsx
import React, { useState, useRef, useEffect } from "react";

interface LanguageDropdownProps {
  onSelectLanguage: (language: string) => void;
  className?: string;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  onSelectLanguage,
  className = "",
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    {
      id: 1,
      lang: "English",
      value: "en",
      flag: "🇺🇸",
    },
    {
      id: 2,
      lang: "French",
      value: "fr",
      flag: "🇫🇷",
    },
    {
      id: 3,
      lang: "Spanish",
      value: "es",
      flag: "🇪🇸",
    },
    {
      id: 4,
      lang: "German",
      value: "de",
      flag: "🇩🇪",
    },
    {
      id: 5,
      lang: "Hindi",
      value: "hi",
      flag: "🇮🇳",
    },
  ];

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    onSelectLanguage(language);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === selectedLanguage);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      >
        <span className="text-lg">{selectedOption?.flag}</span>
        <span className="text-sm font-medium text-gray-700">{selectedOption?.lang}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fade-in">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleLanguageChange(option.value)}
              className={`w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-150 ${
                selectedLanguage === option.value ? "bg-blue-50 text-blue-600" : "text-gray-700"
              } ${option.id === 1 ? "rounded-t-lg" : ""} ${option.id === options.length ? "rounded-b-lg" : ""}`}
            >
              <span className="text-lg">{option.flag}</span>
              <span className="text-sm font-medium">{option.lang}</span>
              {selectedLanguage === option.value && (
                <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
