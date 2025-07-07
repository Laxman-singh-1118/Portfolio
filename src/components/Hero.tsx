import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isDark) return;

    const createParticles = () => {
      const hero = heroRef.current;
      if (!hero) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        hero.appendChild(particle);
      }
    };

    createParticles();
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className={`block ${isDark ? 'text-white' : 'text-gray-800'}`}>Hi, I'm</span>
            <span className={`block ${
              isDark 
                ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                : 'text-gray-900'
            }`}>Karan Pachauri</span>
          </h1>
          
          <div className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className={isDark ? 'text-cyan-400' : 'text-teal-600'}>DevOps</span> | 
            <span className={isDark ? 'text-purple-400' : 'text-gray-800'}> Full Stack</span> | 
            <span className={isDark ? 'text-pink-400' : 'text-teal-600'}> UI/UX</span> | 
            <span className={isDark ? 'text-cyan-400' : 'text-gray-800'}> ML</span>
          </div>

          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            B.Tech student passionate about creating innovative solutions through code, 
            cloud infrastructure, and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className={`text-lg px-8 py-4 relative z-10 rounded-full font-semibold transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1'
                  : 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                isDark 
                  ? 'glass-card text-white hover:text-purple-400'
                  : 'border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
              }`}
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center items-center space-x-6">
            <a 
              href="https://github.com/karanpachauri" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/karanpachauri" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:karanpachauri154@gmail.com"
              className={`transition-all duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://instagram.com/karanpachauri5201" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className={`transition-colors duration-300 ${
            isDark ? 'text-white hover:text-purple-400' : 'text-gray-600 hover:text-teal-600'
          }`}
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;