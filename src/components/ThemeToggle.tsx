import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed top-6 right-6 z-40 p-3 rounded-full transition-all duration-300 ${
        isDark 
          ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20' 
          : 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;