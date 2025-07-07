import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Code, Database, Brain, Cloud, Eye, Workflow } from 'lucide-react';

interface ProjectsTabProps {
  theme: 'light' | 'dark';
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
  category: string;
  icon: any;
}

const ProjectsTab: React.FC<ProjectsTabProps> = ({ theme }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'docker-setup',
      title: 'Docker Setup & Containerization',
      description: 'Comprehensive Docker setup for development and production environments',
      longDescription: 'Built a complete Docker infrastructure with multi-stage builds, optimized images, and orchestration using Docker Compose. Includes automated testing, security scanning, and deployment pipelines.',
      technologies: ['Docker', 'Docker Compose', 'Bash', 'Linux', 'CI/CD'],
      github: 'https://github.com/Laxman-singh-1118',
      image: '🐳',
      category: 'DevOps',
      icon: Cloud
    },
    {
      id: 'jenkins-pipeline',
      title: 'Jenkins CI/CD Pipeline',
      description: 'Automated CI/CD pipeline with Jenkins for seamless deployment',
      longDescription: 'Designed and implemented a robust CI/CD pipeline using Jenkins with automated testing, code quality checks, and multi-environment deployments. Integrated with Docker and cloud platforms.',
      technologies: ['Jenkins', 'Groovy', 'Docker', 'Git', 'AWS'],
      github: 'https://github.com/Laxman-singh-1118',
      image: '🔧',
      category: 'DevOps',
      icon: Workflow
    },
    {
      id: 'agentic-ai',
      title: 'Agentic AI System',
      description: 'Intelligent agent system for autonomous task completion',
      longDescription: 'Developed an advanced AI agent capable of autonomous decision-making and task execution using reinforcement learning and natural language processing techniques.',
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'FastAPI'],
      github: 'https://github.com/Laxman-singh-1118',
      image: '🤖',
      category: 'AI/ML',
      icon: Brain
    },
    {
      id: 'generative-model',
      title: 'Generative AI Model',
      description: 'Custom generative model for content creation and synthesis',
      longDescription: 'Built a state-of-the-art generative model using transformer architecture for text and image generation. Implemented attention mechanisms and fine-tuned for specific use cases.',
      technologies: ['Python', 'PyTorch', 'Transformers', 'CUDA', 'Hugging Face'],
      github: 'https://github.com/Laxman-singh-1118',
      image: '🎨',
      category: 'AI/ML',
      icon: Brain
    },
    {
      id: 'eye-prediction',
      title: 'Eye Disease Prediction ML',
      description: 'Machine learning model for early eye disease detection',
      longDescription: 'Developed a computer vision model using convolutional neural networks to detect and classify eye diseases from retinal images. Achieved 94% accuracy with extensive data preprocessing and augmentation.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'Scikit-learn'],
      github: 'https://github.com/Laxman-singh-1118',
      image: '👁️',
      category: 'AI/ML',
      icon: Eye
    },
    {
      id: 'pipeline-project',
      title: 'End-to-End ML Pipeline',
      description: 'Complete machine learning pipeline from data to deployment',
      longDescription: 'Architected a comprehensive ML pipeline including data ingestion, preprocessing, model training, validation, and deployment with monitoring and retraining capabilities.',
      technologies: ['Python', 'MLflow', 'Apache Airflow', 'Docker', 'Kubernetes'],
      github: 'https://github.com/Laxman-singh-1118',
      image: '🚀',
      category: 'Full Stack',
      icon: Database
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'DevOps', name: 'DevOps', icon: Cloud },
    { id: 'AI/ML', name: 'AI/ML', icon: Brain },
    { id: 'Full Stack', name: 'Full Stack', icon: Database },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            My Projects
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Explore my latest work and contributions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? theme === 'dark'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    : theme === 'dark'
                    ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                    : 'bg-white/50 text-gray-700 hover:bg-gray-100/50 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative p-6 rounded-2xl cursor-pointer group ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-white/50 border border-gray-200 hover:border-indigo-500/50'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image/Icon */}
                <div className="text-6xl mb-4 text-center">
                  {project.image}
                </div>

                {/* Project Title */}
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className={`text-sm mb-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        theme === 'dark' 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-600/10' 
                    : 'bg-gradient-to-r from-indigo-500/10 to-purple-600/10'
                }`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8 ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Project Details */}
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedProject.image}</div>
                  <h2 className={`text-3xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedProject.title}
                  </h2>
                  <p className={`text-lg ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-gray-300 border border-gray-700' 
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500'
                        : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500'
                    }`}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                  
                  {selectedProject.demo && (
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${
                        theme === 'dark'
                          ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                          : 'border-indigo-500 text-indigo-600 hover:bg-indigo-500/10'
                      }`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsTab;