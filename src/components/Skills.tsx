import React, { useEffect, useRef } from 'react';
import { Code, Server, Palette, Brain, Database, Monitor } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = skillsRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Development',
      icon: Code,
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'Node.js', level: 'Expert' },
        { name: 'React', level: 'Proficient' },
        { name: 'Flask', level: 'Proficient' },
        { name: 'MongoDB', level: 'Proficient' },
        { name: 'C++', level: 'Familiar' },
        { name: 'Java', level: 'Familiar' }
      ],
      color: isDark ? 'from-blue-500 to-purple-500' : 'bg-blue-600'
    },
    {
      title: 'DevOps & Cloud',
      icon: Server,
      skills: [
        { name: 'Docker', level: 'Expert' },
        { name: 'Git', level: 'Expert' },
        { name: 'Bash Scripting', level: 'Expert' },
        { name: 'Jenkins', level: 'Proficient' },
        { name: 'Kubernetes', level: 'Proficient' },
        { name: 'Ansible', level: 'Proficient' },
        { name: 'Terraform', level: 'Familiar' },
        { name: 'AWS Basics', level: 'Familiar' }
      ],
      color: isDark ? 'from-green-500 to-blue-500' : 'bg-green-600'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 'Expert' },
        { name: 'Responsive Design', level: 'Expert' },
        { name: 'Adobe XD', level: 'Proficient' },
        { name: 'User Research', level: 'Proficient' },
        { name: 'Accessibility (A11Y)', level: 'Familiar' },
        { name: 'Prototyping', level: 'Proficient' }
      ],
      color: isDark ? 'from-purple-500 to-pink-500' : 'bg-purple-600'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: [
        { name: 'scikit-learn', level: 'Proficient' },
        { name: 'Pandas', level: 'Expert' },
        { name: 'NumPy', level: 'Expert' },
        { name: 'TensorFlow', level: 'Familiar' },
        { name: 'Data Analysis', level: 'Proficient' },
        { name: 'Model Deployment', level: 'Proficient' }
      ],
      color: isDark ? 'from-orange-500 to-red-500' : 'bg-orange-600'
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 'Proficient' },
        { name: 'PostgreSQL', level: 'Proficient' },
        { name: 'MySQL', level: 'Proficient' },
        { name: 'Redis', level: 'Familiar' },
        { name: 'Database Design', level: 'Proficient' },
        { name: 'Query Optimization', level: 'Familiar' }
      ],
      color: isDark ? 'from-teal-500 to-green-500' : 'bg-teal-600'
    },
    {
      title: 'Tools & Platforms',
      icon: Monitor,
      skills: [
        { name: 'VS Code', level: 'Expert' },
        { name: 'Postman', level: 'Expert' },
        { name: 'GitHub', level: 'Expert' },
        { name: 'Netlify', level: 'Proficient' },
        { name: 'Vercel', level: 'Proficient' },
        { name: 'Streamlit', level: 'Proficient' },
        { name: 'Jupyter', level: 'Proficient' }
      ],
      color: isDark ? 'from-indigo-500 to-purple-500' : 'bg-indigo-600'
    }
  ];

  const getLevelColor = (level: string) => {
    if (isDark) {
      switch (level) {
        case 'Expert': return 'text-green-400';
        case 'Proficient': return 'text-blue-400';
        case 'Familiar': return 'text-yellow-400';
        default: return 'text-gray-400';
      }
    } else {
      switch (level) {
        case 'Expert': return 'text-green-600';
        case 'Proficient': return 'text-blue-600';
        case 'Familiar': return 'text-yellow-600';
        default: return 'text-gray-600';
      }
    }
  };

  const getLevelDots = (level: string) => {
    switch (level) {
      case 'Expert': return 5;
      case 'Proficient': return 4;
      case 'Familiar': return 3;
      default: return 2;
    }
  };

  return (
    <section ref={skillsRef} id="skills" className={`py-20 relative ${
      isDark ? '' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          <span className={isDark 
            ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
            : 'text-gray-800'
          }>Skills & Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`p-6 h-full rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'glass-card tilt-card hover:shadow-2xl hover:shadow-purple-500/20'
                  : 'bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
              }`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    isDark 
                      ? `bg-gradient-to-br ${category.color}`
                      : category.color
                  }`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          isDark 
                            ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                            : 'bg-teal-600'
                        }`}></div>
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-1.5 h-1.5 rounded-full ${
                                i < getLevelDots(skill.level) 
                                  ? isDark 
                                    ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                                    : 'bg-teal-600'
                                  : isDark ? 'bg-gray-600' : 'bg-gray-300'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;