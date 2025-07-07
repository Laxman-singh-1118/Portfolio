import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, FileText, Mail, Menu, X } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: 'light' | 'dark';
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab, theme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 border-b border-gray-800' 
          : 'bg-white/80 border-b border-gray-200'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600'
              }`}>
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className={`font-bold text-lg ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Laxman Singh
              </span>
            </motion.div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex items-center space-x-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                      activeTab === tab.id
                        ? theme === 'dark'
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30'
                          : 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-indigo-600 border border-indigo-500/30'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100/50'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-16 left-0 right-0 z-30 backdrop-blur-md ${
            theme === 'dark' 
              ? 'bg-gray-900/95 border-b border-gray-800' 
              : 'bg-white/95 border-b border-gray-200'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`p-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                      activeTab === tab.id
                        ? theme === 'dark'
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30'
                          : 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-indigo-600 border border-indigo-500/30'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default TabNavigation;