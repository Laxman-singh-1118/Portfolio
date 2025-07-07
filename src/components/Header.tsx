import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
      isScrolled 
        ? isDark 
          ? 'glass-card backdrop-blur-md bg-black/20' 
          : 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${
            isDark 
              ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
              : 'text-gray-800'
          }`}>
            Karan Pachauri
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-300 relative group ${
                  isDark 
                    ? 'text-white hover:text-purple-400' 
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isDark 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                    : 'bg-teal-600'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isDark 
                ? 'text-white hover:text-purple-400' 
                : 'text-gray-700 hover:text-teal-600'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 p-4 rounded-lg ${
            isDark 
              ? 'glass-card' 
              : 'bg-white shadow-lg border border-gray-200'
          }`}>
            <div className="flex flex-col space-y-4">
              {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-left transition-colors duration-300 ${
                    isDark 
                      ? 'text-white hover:text-purple-400' 
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;