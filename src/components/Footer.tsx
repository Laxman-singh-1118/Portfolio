import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`py-12 relative ${isDark ? '' : 'bg-white border-t border-gray-200'}`}>
      <div className="container mx-auto px-6">
        <div className={`p-8 text-center rounded-2xl ${
          isDark 
            ? 'glass-card'
            : 'bg-gray-50 border border-gray-200'
        }`}>
          <div className="mb-8">
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDark 
                ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
                : 'text-gray-800'
            }`}>
              "Code with passion. Deploy with precision. Design with purpose."
            </h3>
            <p className={`max-w-2xl mx-auto text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Building the future, one line of code at a time. Always learning, always growing, always innovating.
            </p>
          </div>

          <div className="flex justify-center items-center space-x-6 mb-8">
            <a 
              href="https://github.com/karanpachauri" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/karanpachauri" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:karanpachauri154@gmail.com"
              className={`transition-all duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <Mail size={28} />
            </a>
            <a 
              href="https://instagram.com/karanpachauri5201" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <Instagram size={28} />
            </a>
          </div>

          <div className={`flex items-center justify-center space-x-4 mb-6 ${
            isDark ? 'text-gray-500' : 'text-gray-600'
          }`}>
            <div className="flex items-center space-x-2">
              <Code size={20} className={isDark ? 'text-purple-400' : 'text-teal-600'} />
              <span>with</span>
              <Heart size={20} className={`animate-pulse ${isDark ? 'text-pink-400' : 'text-red-500'}`} />
              <span>and</span>
              <Coffee size={20} className={isDark ? 'text-amber-400' : 'text-amber-600'} />
            </div>
          </div>

          <div className={`border-t pt-6 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              © 2024 Karan Pachauri. All rights reserved. | Crafted with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;