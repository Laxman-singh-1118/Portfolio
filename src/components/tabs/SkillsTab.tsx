import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Brain, Palette } from 'lucide-react';

interface SkillsTabProps {
  theme: 'light' | 'dark';
}

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const SkillsTab: React.FC<SkillsTabProps> = ({ theme }) => {
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  const skills: Skill[] = [
    // Programming Languages
    { name: 'Python', level: 90, category: 'Programming', icon: '🐍' },
    { name: 'JavaScript', level: 85, category: 'Programming', icon: '🟨' },
    { name: 'Java', level: 75, category: 'Programming', icon: '☕' },
    { name: 'C++', level: 70, category: 'Programming', icon: '⚡' },
    
    // AI/ML
    { name: 'Machine Learning', level: 80, category: 'AI/ML', icon: '🤖' },
    { name: 'Deep Learning', level: 75, category: 'AI/ML', icon: '🧠' },
    { name: 'Computer Vision', level: 70, category: 'AI/ML', icon: '👁️' },
    { name: 'NLP', level: 65, category: 'AI/ML', icon: '💬' },
    
    // DevOps
    { name: 'Docker', level: 85, category: 'DevOps', icon: '🐳' },
    { name: 'Jenkins', level: 80, category: 'DevOps', icon: '🔧' },
    { name: 'Git', level: 90, category: 'DevOps', icon: '🌿' },
    { name: 'Linux', level: 85, category: 'DevOps', icon: '🐧' },
    
    // Full Stack
    { name: 'React', level: 80, category: 'Full Stack', icon: '⚛️' },
    { name: 'Node.js', level: 75, category: 'Full Stack', icon: '🟢' },
    { name: 'MongoDB', level: 70, category: 'Full Stack', icon: '🍃' },
    { name: 'Express.js', level: 75, category: 'Full Stack', icon: '🚀' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: 'Programming', icon: Code, color: theme === 'dark' ? 'cyan' : 'indigo' },
    { name: 'AI/ML', icon: Brain, color: theme === 'dark' ? 'purple' : 'purple' },
    { name: 'DevOps', icon: Server, color: theme === 'dark' ? 'green' : 'green' },
    { name: 'Full Stack', icon: Database, color: theme === 'dark' ? 'blue' : 'blue' },
  ];

  const getSkillsByCategory = (category: string) => {
    return animatedSkills.filter(skill => skill.category === category);
  };

  const getProgressColor = (level: number) => {
    if (level >= 80) return theme === 'dark' ? 'from-emerald-500 to-teal-500' : 'from-emerald-400 to-teal-400';
    if (level >= 60) return theme === 'dark' ? 'from-yellow-500 to-orange-500' : 'from-yellow-400 to-orange-400';
    return theme === 'dark' ? 'from-red-500 to-pink-500' : 'from-red-400 to-pink-400';
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto">
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
            Skills & Expertise
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies I work with and my proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const categorySkills = getSkillsByCategory(category.name);
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className={`p-8 rounded-2xl backdrop-blur-sm ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30' 
                      : 'bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                    }`} />
                  </div>
                  <h2 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.name}
                  </h2>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className={`font-semibold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className={`h-3 rounded-full overflow-hidden ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <motion.div
                          className={`h-full bg-gradient-to-r ${getProgressColor(skill.level)} relative`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                            ease: "easeOut"
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Collaboration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className={`mt-16 p-8 rounded-2xl backdrop-blur-sm text-center ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20' 
              : 'bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/20'
          }`}
        >
          <h2 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
          }`}>
            Always Learning & Growing
          </h2>
          <p className={`text-lg mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I'm always open to collaboration and learning new technologies. 
            Feel free to reach out if you want to work together on exciting projects!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500'
                : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500'
            }`}
          >
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsTab;