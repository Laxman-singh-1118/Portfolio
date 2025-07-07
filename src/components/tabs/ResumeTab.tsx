import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeTabProps {
  theme: 'light' | 'dark';
}

const ResumeTab: React.FC<ResumeTabProps> = ({ theme }) => {
  const [resumeReady, setResumeReady] = useState(false);

  const timelineItems = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Technology',
      subtitle: 'Computer Science Engineering (AI & DS)',
      organization: 'Vivekananda Global University',
      period: '2022 - 2026',
      location: 'Jaipur, India',
      description: 'Pursuing specialized education in Artificial Intelligence and Data Science with focus on machine learning, deep learning, and data analytics.',
      icon: GraduationCap
    },
    {
      id: 2,
      type: 'experience',
      title: 'Summer Internship',
      subtitle: 'Linux World Informatics',
      organization: 'Linux World',
      period: '2024',
      location: 'India',
      description: 'Gained hands-on experience in Linux systems administration, DevOps practices, and cloud technologies. Worked on containerization and CI/CD pipelines.',
      icon: Briefcase
    },
    {
      id: 3,
      type: 'project',
      title: 'ML Engineer',
      subtitle: 'Eye Disease Prediction System',
      organization: 'Personal Project',
      period: '2024',
      location: 'Remote',
      description: 'Developed a computer vision model for early detection of eye diseases using CNNs, achieving 94% accuracy with comprehensive data preprocessing.',
      icon: Award
    },
    {
      id: 4,
      type: 'project',
      title: 'DevOps Engineer',
      subtitle: 'CI/CD Pipeline Development',
      organization: 'Personal Project',
      period: '2024',
      location: 'Remote',
      description: 'Built robust CI/CD pipelines using Jenkins and Docker, implementing automated testing and deployment workflows.',
      icon: Award
    }
  ];

  const getItemColor = (type: string) => {
    switch (type) {
      case 'education':
        return theme === 'dark' ? 'from-blue-500 to-cyan-500' : 'from-blue-400 to-cyan-400';
      case 'experience':
        return theme === 'dark' ? 'from-green-500 to-emerald-500' : 'from-green-400 to-emerald-400';
      case 'project':
        return theme === 'dark' ? 'from-purple-500 to-pink-500' : 'from-purple-400 to-pink-400';
      default:
        return theme === 'dark' ? 'from-gray-500 to-gray-600' : 'from-gray-400 to-gray-500';
    }
  };

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
            My Journey
          </h1>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Education, experience, and key milestones
          </p>

          {/* Resume Download */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setResumeReady(true)}
            disabled={!resumeReady}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-3 mx-auto ${
              resumeReady
                ? theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500'
                : theme === 'dark'
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Download className="w-5 h-5" />
            <span>{resumeReady ? 'Download Resume' : 'Resume Coming Soon'}</span>
          </motion.button>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
          }`} />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Node */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${getItemColor(item.type)}`}>
                    <Icon className="w-8 h-8 text-white" />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getItemColor(item.type)} animate-pulse opacity-30`} />
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`flex-1 p-6 rounded-2xl backdrop-blur-sm ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 border border-gray-700' 
                        : 'bg-white/50 border border-gray-200'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-lg ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                        }`}>
                          {item.subtitle}
                        </p>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {item.organization}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <div className={`flex items-center space-x-2 text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className={`flex items-center space-x-2 text-sm mt-1 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className={`mt-16 p-8 rounded-2xl backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border border-gray-700' 
              : 'bg-white/50 border border-gray-200'
          }`}
        >
          <h2 className={`text-2xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                theme === 'dark' ? 'from-cyan-500 to-blue-600' : 'from-indigo-500 to-purple-600'
              } flex items-center justify-center`}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                AI/ML Engineering
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Machine Learning, Deep Learning, Computer Vision
              </p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                theme === 'dark' ? 'from-green-500 to-emerald-600' : 'from-green-400 to-emerald-500'
              } flex items-center justify-center`}>
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                DevOps & Cloud
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Docker, Jenkins, CI/CD, Linux Administration
              </p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                theme === 'dark' ? 'from-purple-500 to-pink-600' : 'from-purple-400 to-pink-500'
              } flex items-center justify-center`}>
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Full Stack Development
              </h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Python, JavaScript, React, Node.js
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeTab;