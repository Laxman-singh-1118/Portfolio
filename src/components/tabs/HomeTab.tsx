import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, GraduationCap } from 'lucide-react';

interface HomeTabProps {
  theme: 'light' | 'dark';
}

const HomeTab: React.FC<HomeTabProps> = ({ theme }) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-6xl font-bold ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white' 
              : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
          }`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              L
            </motion.div>
          </div>
          <motion.div
            className={`absolute inset-0 rounded-full ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20' 
                : 'bg-gradient-to-br from-indigo-500/20 to-purple-600/20'
            }`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`text-5xl md:text-7xl font-bold mb-4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
          }`}
        >
          LAXMAN SINGH
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`text-2xl md:text-3xl font-semibold mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          RAJPUROHIT
        </motion.h2>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center space-x-2 mb-2"
        >
          <GraduationCap className={`w-5 h-5 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
          }`} />
          <span className={`text-lg ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            CSE AI & DS • Vivekananda Global University
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className={`text-xl md:text-2xl mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          AI/ML Engineer • DevOps Enthusiast • Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className={`text-lg max-w-2xl mx-auto mb-12 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Passionate about building intelligent systems and automating workflows. 
          I love reading books, solving DSA problems, and exploring the latest trends in AI and technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25'
                : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 shadow-lg shadow-indigo-500/25'
            }`}
          >
            View My Projects
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 ${
              theme === 'dark'
                ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20'
                : 'border-indigo-500 text-indigo-600 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20'
            }`}
          >
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-center space-x-6"
        >
          <motion.a
            href="https://github.com/Laxman-singh-1118"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-indigo-600'
            }`}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/laxman-singh1118"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-indigo-600'
            }`}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          
          <motion.a
            href="mailto:laxmanrajpurohit8866@gmail.com"
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-indigo-600'
            }`}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeTab;