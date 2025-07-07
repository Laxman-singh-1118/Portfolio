import React, { useEffect, useRef } from 'react';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const aboutRef = useRef<HTMLElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={aboutRef} id="about" className={`py-20 relative ${
      isDark ? '' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
            <span className={isDark 
              ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
              : 'text-gray-800'
            }>About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className={`p-8 h-full rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'glass-card tilt-card hover:shadow-2xl hover:shadow-purple-500/20'
                  : 'bg-white shadow-lg hover:shadow-xl border border-gray-200'
              }`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isDark 
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                        : 'bg-teal-600'
                    }`}>
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Location</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Agra, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isDark 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                        : 'bg-teal-600'
                    }`}>
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Education</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>B.Tech at Vivekananda Global University</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isDark 
                        ? 'bg-gradient-to-br from-pink-500 to-orange-500'
                        : 'bg-teal-600'
                    }`}>
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Experience</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>2-Month Internship at Linux World</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <div className={`p-8 h-full rounded-2xl transition-all duration-300 ${
                isDark 
                  ? 'glass-card tilt-card hover:shadow-2xl hover:shadow-purple-500/20'
                  : 'bg-white shadow-lg hover:shadow-xl border border-gray-200'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
                    : 'text-gray-800'
                }`}>My Story</h3>
                <div className={`space-y-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    My journey into technology began in Agra and has led me to Vivekananda Global University, 
                    where I've cultivated a deep-seated passion for the entire technology lifecycle—from 
                    conceptual UI/UX design to robust back-end development and scalable DevOps deployment.
                  </p>
                  
                  <p>
                    My internship at Linux World was a pivotal experience, allowing me to apply my academic 
                    knowledge to real-world challenges in cloud-native environments. I worked extensively 
                    with containerization, CI/CD pipelines, and infrastructure automation, solidifying my 
                    goal to engineer seamless and intelligent digital solutions.
                  </p>
                  
                  <p>
                    I believe in building solutions that not only work efficiently but also provide 
                    exceptional user experiences. Whether it's architecting scalable infrastructure, 
                    developing intuitive interfaces, or creating intelligent applications, I strive to 
                    deliver quality that makes a difference in people's lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;