import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Code, Zap, MessageCircle, Palette, Settings, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projectsRef = useRef<HTMLElement>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

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

    const elements = projectsRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Streamlit Messaging App',
      description: 'A comprehensive web interface for multi-platform messaging automation',
      longDescription: 'Developed a robust messaging platform using Streamlit that integrates with Twilio and SMTP services. Features include real-time message delivery, status tracking, and a responsive UI for managing multiple communication channels.',
      myRole: 'I architected the entire application from scratch, designing the user interface with Streamlit, implementing the backend API integrations, and ensuring seamless message delivery across multiple platforms with comprehensive error handling.',
      tools: ['Python', 'Streamlit', 'Twilio', 'SMTP', 'API Integration'],
      features: [
        'Form UI built with Streamlit for easy message composition',
        'Backend integration with Twilio API for WhatsApp messaging',
        'SMTP integration for email delivery',
        'Real-time status updates and delivery confirmation',
        'Error handling and retry mechanisms',
        'Responsive design for mobile and desktop'
      ],
      icon: MessageCircle,
      gradient: 'from-blue-500 to-purple-500',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'ML Prediction Tool',
      description: 'Intelligent machine learning model with web interface for real-time predictions',
      longDescription: 'Built and deployed a complete machine learning pipeline using scikit-learn with a Flask web interface. The application processes user input, applies data preprocessing, and returns accurate predictions with confidence scores.',
      myRole: 'I was responsible for the entire ML pipeline development, from data preprocessing and model training to deployment. I designed the Flask web interface, implemented the prediction API, and containerized the application for scalable deployment.',
      tools: ['Python', 'scikit-learn', 'Flask', 'Pandas', 'Docker', 'NumPy'],
      features: [
        'Interactive web interface for data input and visualization',
        'Real-time prediction with confidence scores',
        'Data preprocessing and feature engineering',
        'Model performance metrics and validation',
        'Containerized deployment with Docker',
        'RESTful API for programmatic access'
      ],
      icon: Code,
      gradient: 'from-green-500 to-blue-500',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'JavaScript Messaging Platform',
      description: 'Frontend-focused messaging solution with multiple communication channels',
      longDescription: 'Created a modern JavaScript application that handles WhatsApp, Email, and SMS messaging through REST APIs. Features a clean, responsive interface with real-time validation and comprehensive error handling.',
      myRole: 'I developed the entire frontend architecture, implemented the API integration layer, designed the responsive user interface, and created a robust error handling system for seamless user experience across all messaging channels.',
      tools: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Bootstrap', 'Fetch API'],
      features: [
        'Multi-channel messaging (WhatsApp, Email, SMS)',
        'Real-time form validation and user feedback',
        'API integration with error handling',
        'Responsive design with Bootstrap',
        'Success/failure notifications',
        'Contact management system'
      ],
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website (UI/UX)',
      description: 'Modern, responsive portfolio showcasing design and development skills',
      longDescription: 'Designed and developed this comprehensive portfolio website using React and Tailwind CSS. Started with Figma prototypes and implemented advanced animations, 3D effects, and responsive design principles.',
      myRole: 'I handled the complete design-to-development process, starting with user research and Figma prototyping, then implementing the design with React and Tailwind CSS, including advanced animations and responsive optimization.',
      tools: ['React', 'Tailwind CSS', 'Figma', 'TypeScript', 'CSS3', 'Responsive Design'],
      features: [
        '3D animations and glassmorphism effects',
        'Responsive design for all device sizes',
        'Interactive components and smooth transitions',
        'Dark theme with gradient accents',
        'SEO optimization and accessibility',
        'Performance optimization and fast loading'
      ],
      icon: Palette,
      gradient: 'from-orange-500 to-red-500',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'DevOps CI/CD Pipeline',
      description: 'Automated deployment pipeline with containerization and monitoring',
      longDescription: 'Built a complete CI/CD pipeline using Jenkins for automated testing, building, and deployment. Implemented containerization with Docker, orchestration with Kubernetes, and comprehensive monitoring solutions.',
      myRole: 'I architected the entire pipeline from scratch, writing the Jenkinsfile, Dockerfile, and Kubernetes deployment manifests. I was responsible for ensuring automated triggers, successful container builds, and zero-downtime deployments using rolling updates.',
      tools: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub', 'Bash', 'Monitoring'],
      features: [
        'Automated builds triggered by git push events',
        'Containerized application deployment',
        'Kubernetes orchestration for scalability',
        'Comprehensive health checks and monitoring',
        'Rollback capabilities and version control',
        'Security scanning and vulnerability assessment'
      ],
      icon: Settings,
      gradient: 'from-teal-500 to-green-500',
      github: '#',
      demo: '#'
    }
  ];

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section ref={projectsRef} id="projects" className={`py-20 relative ${
      isDark ? '' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          <span className={isDark 
            ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
            : 'text-gray-800'
          }>Featured Projects</span>
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`p-8 rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'glass-card tilt-card hover:shadow-2xl hover:shadow-purple-500/20'
                  : 'bg-white shadow-lg hover:shadow-xl border border-gray-200'
              }`}>
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        isDark 
                          ? `bg-gradient-to-br ${project.gradient}`
                          : 'bg-teal-600'
                      }`}>
                        <project.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                          {project.title}
                        </h3>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {project.longDescription}
                    </p>

                    <div className={`mb-6 p-4 rounded-lg ${
                      isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        My Role:
                      </h4>
                      <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.myRole}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleProject(project.id)}
                      className={`flex items-center space-x-2 mb-4 transition-colors duration-300 ${
                        isDark ? 'text-purple-400 hover:text-purple-300' : 'text-teal-600 hover:text-teal-700'
                      }`}
                    >
                      <span>
                        {expandedProject === project.id ? 'Hide Details' : 'Show Key Features'}
                      </span>
                      {expandedProject === project.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    {expandedProject === project.id && (
                      <div className="mb-6 animate-fade-in">
                        <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                isDark 
                                  ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                                  : 'bg-teal-600'
                              }`}></div>
                              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDark 
                              ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200'
                              : 'bg-teal-100 text-teal-800 border border-teal-200'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a 
                        href={project.github}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                          isDark 
                            ? 'glass-card hover:bg-white/10'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                          isDark 
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                            : 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg'
                        }`}
                      >
                        <ExternalLink size={20} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className={`p-6 h-full rounded-lg ${
                      isDark 
                        ? 'glass-card'
                        : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        Project Stats
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Complexity</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-2 h-2 rounded-full ${
                                  i < (index % 3 + 3) 
                                    ? isDark 
                                      ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                                      : 'bg-teal-600'
                                    : isDark ? 'bg-gray-600' : 'bg-gray-300'
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Innovation</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-2 h-2 rounded-full ${
                                  i < ((index + 1) % 3 + 3) 
                                    ? isDark 
                                      ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                                      : 'bg-teal-600'
                                    : isDark ? 'bg-gray-600' : 'bg-gray-300'
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Impact</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-2 h-2 rounded-full ${
                                  i < ((index + 2) % 3 + 3) 
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;