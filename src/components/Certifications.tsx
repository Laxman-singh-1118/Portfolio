import React, { useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  isDark: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDark }) => {
  const certificationsRef = useRef<HTMLElement>(null);

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

    const elements = certificationsRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'DevOps Internship',
      issuer: 'Linux World',
      date: '2024',
      description: 'Completed intensive 2-month internship focusing on cloud-native technologies, CI/CD pipelines, and infrastructure automation.',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Cloud Computing'],
      color: isDark ? 'from-blue-500 to-purple-500' : 'bg-blue-600'
    },
    {
      title: 'Python for Everybody',
      issuer: 'Coursera',
      date: '2023',
      description: 'Comprehensive Python programming course covering fundamentals, data structures, web scraping, and database integration.',
      skills: ['Python', 'Data Structures', 'Web Scraping', 'Databases'],
      color: isDark ? 'from-green-500 to-blue-500' : 'bg-green-600'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2023',
      description: 'Complete web development bootcamp covering frontend and backend technologies, databases, and deployment strategies.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      color: isDark ? 'from-purple-500 to-pink-500' : 'bg-purple-600'
    },
    {
      title: 'Google UX Design Sprint',
      issuer: 'Self-Learning',
      date: '2024',
      description: 'Self-directed learning program focusing on user experience design principles, prototyping, and user research methodologies.',
      skills: ['UX Design', 'Prototyping', 'User Research', 'Figma'],
      color: isDark ? 'from-orange-500 to-red-500' : 'bg-orange-600'
    }
  ];

  return (
    <section ref={certificationsRef} id="certifications" className={`py-20 relative ${
      isDark ? '' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          <span className={isDark 
            ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
            : 'text-gray-800'
          }>Certifications</span>
        </h2>

        <div className={`${isDark ? 'grid md:grid-cols-2 gap-8' : 'overflow-x-auto pb-4'}`}>
          <div className={`${isDark ? '' : 'flex space-x-6 min-w-max'}`}>
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`fade-in ${isDark ? '' : 'flex-shrink-0 w-80'}`} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-6 h-full rounded-2xl transition-all duration-300 ${
                  isDark 
                    ? 'glass-card tilt-card hover:shadow-2xl hover:shadow-purple-500/20'
                    : 'bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-teal-200'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDark 
                        ? `bg-gradient-to-br ${cert.color}`
                        : cert.color
                    }`}>
                      <Award className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {cert.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className={`font-semibold ${
                          isDark ? 'text-purple-400' : 'text-teal-600'
                        }`}>
                          {cert.issuer}
                        </span>
                        <div className={`flex items-center space-x-1 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Calendar size={16} />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <p className={`mb-4 leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`px-2 py-1 rounded text-xs ${
                              isDark 
                                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200'
                                : 'bg-teal-100 text-teal-800 border border-teal-200'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <button className={`flex items-center space-x-2 transition-colors duration-300 ${
                        isDark 
                          ? 'text-purple-400 hover:text-purple-300'
                          : 'text-teal-600 hover:text-teal-700'
                      }`}>
                        <ExternalLink size={16} />
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;