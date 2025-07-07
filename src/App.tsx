import React, { useState, useEffect } from 'react';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Code, Zap } from 'lucide-react';
import SplashScreen from './components/SplashScreen';
import TabNavigation from './components/TabNavigation';
import HomeTab from './components/tabs/HomeTab';
import AboutTab from './components/tabs/AboutTab';
import SkillsTab from './components/tabs/SkillsTab';
import ProjectsTab from './components/tabs/ProjectsTab';
import ResumeTab from './components/tabs/ResumeTab';
import ContactTab from './components/tabs/ContactTab';

type Theme = 'light' | 'dark';
type ActiveTab = 'home' | 'about' | 'skills' | 'projects' | 'resume' | 'contact';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [particlesInit, setParticlesInit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const initParticles = async (engine: any) => {
    await loadSlim(engine);
    setParticlesInit(true);
  };

  const particlesOptions = {
    background: {
      color: {
        value: theme === 'dark' ? '#0a0a0a' : '#f8f9fa',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' ? '#00bfff' : '#6366f1',
      },
      links: {
        color: theme === 'dark' ? '#00bfff' : '#6366f1',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab theme={theme} />;
      case 'about':
        return <AboutTab theme={theme} />;
      case 'skills':
        return <SkillsTab theme={theme} />;
      case 'projects':
        return <ProjectsTab theme={theme} />;
      case 'resume':
        return <ResumeTab theme={theme} />;
      case 'contact':
        return <ContactTab theme={theme} />;
      default:
        return <HomeTab theme={theme} />;
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Particles Background */}
      {particlesInit && (
        <Particles
          id="tsparticles"
          init={initParticles}
          options={particlesOptions}
          className="fixed inset-0 z-0"
        />
      )}

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gray-800/80 hover:bg-gray-700/80 border border-cyan-500/30' 
            : 'bg-white/80 hover:bg-gray-100/80 border border-indigo-500/30'
        }`}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600" />
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Tab Navigation */}
        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          theme={theme}
        />

        {/* Content Area */}
        <main className="pt-20 pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-4"
            >
              {renderActiveTab()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className={`relative z-10 py-8 text-center ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="w-5 h-5" />
            <span>Code with passion.</span>
            <Zap className="w-5 h-5" />
            <span>Deploy with precision.</span>
            <Code className="w-5 h-5" />
            <span>Design with purpose.</span>
          </div>
          <p className="text-sm">
            © 2025 Laxman Singh Rajpurohit. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;