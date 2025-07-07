import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Book, Code2, Heart } from 'lucide-react';

interface AboutTabProps {
  theme: 'light' | 'dark';
}

const AboutTab: React.FC<AboutTabProps> = ({ theme }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "My journey into technology began with a fascination for how intelligent systems can solve real-world problems. Currently pursuing CSE in AI & DS at Vivekananda Global University, I've cultivated a deep passion for the entire technology lifecycle—from AI model development to DevOps automation.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            About Me
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`p-8 rounded-2xl backdrop-blur-sm ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border border-gray-700' 
                : 'bg-white/50 border border-gray-200'
            }`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
            }`}>
              My Story
            </h2>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {typedText}
              <span className={`animate-pulse ${
                theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
              }`}>|</span>
            </p>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
            }`}>
              Quick Facts
            </h2>
            
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl flex items-center space-x-4 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                }`}
              >
                <MapPin className={`w-6 h-6 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                }`} />
                <div>
                  <p className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Location
                  </p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    India
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl flex items-center space-x-4 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                }`}
              >
                <Calendar className={`w-6 h-6 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                }`} />
                <div>
                  <p className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Experience
                  </p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Summer Internship at Linux World
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl flex items-center space-x-4 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                }`}
              >
                <Book className={`w-6 h-6 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                }`} />
                <div>
                  <p className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Interests
                  </p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Reading Books, DSA Problems
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl flex items-center space-x-4 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                }`}
              >
                <Code2 className={`w-6 h-6 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                }`} />
                <div>
                  <p className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Focus Areas
                  </p>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    AI/ML, DevOps, Full Stack
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={`p-8 rounded-2xl backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white/50 border border-gray-200'
          }`}
        >
          <h2 className={`text-2xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
          }`}>
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30' 
                  : 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30'
              }`}>
                <Heart className={`w-8 h-8 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Passion
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Building solutions that make a difference
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30' 
                  : 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30'
              }`}>
                <Code2 className={`w-8 h-8 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Innovation
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Exploring cutting-edge technologies
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30' 
                  : 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30'
              }`}>
                <Book className={`w-8 h-8 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Learning
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Continuous growth and improvement
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutTab;