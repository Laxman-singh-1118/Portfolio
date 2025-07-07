import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const contactRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

    const elements = contactRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karanpachauri154@gmail.com',
      href: 'mailto:karanpachauri154@gmail.com',
      color: isDark ? 'from-blue-500 to-purple-500' : 'bg-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/karanpachauri',
      href: 'https://github.com/karanpachauri',
      color: isDark ? 'from-gray-500 to-gray-700' : 'bg-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/karanpachauri',
      href: 'https://linkedin.com/in/karanpachauri',
      color: isDark ? 'from-blue-600 to-blue-800' : 'bg-blue-700'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@karanpachauri5201',
      href: 'https://instagram.com/karanpachauri5201',
      color: isDark ? 'from-pink-500 to-purple-500' : 'bg-pink-600'
    }
  ];

  return (
    <section ref={contactRef} id="contact" className={`py-20 relative ${
      isDark ? '' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in">
          <span className={isDark 
            ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
            : 'text-gray-800'
          }>Get In Touch</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="fade-in">
              <div className={`p-8 h-full rounded-2xl ${
                isDark 
                  ? 'glass-card'
                  : 'bg-white shadow-lg border border-gray-200'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
                    : 'text-gray-800'
                }`}>Let's Connect</h3>
                <p className={`mb-8 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology. Feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 group ${
                        isDark 
                          ? 'glass-card hover:bg-white/10'
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        isDark 
                          ? `bg-gradient-to-br ${item.color}`
                          : item.color
                      }`}>
                        <item.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                          {item.label}
                        </h4>
                        <p className={`transition-colors duration-300 ${
                          isDark 
                            ? 'text-gray-400 group-hover:text-purple-400'
                            : 'text-gray-600 group-hover:text-teal-600'
                        }`}>
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className={`mt-8 p-4 rounded-lg ${
                  isDark 
                    ? 'glass-card'
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <MapPin className={isDark ? 'text-purple-400' : 'text-teal-600'} size={20} />
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      Location
                    </span>
                  </div>
                  <p className={`ml-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Agra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in">
              <div className={`p-8 h-full rounded-2xl ${
                isDark 
                  ? 'glass-card'
                  : 'bg-white shadow-lg border border-gray-200'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
                    : 'text-gray-800'
                }`}>Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                        isDark 
                          ? 'bg-white/5 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400'
                          : 'bg-gray-50 border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 placeholder-gray-500'
                      } focus:outline-none`}
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                        isDark 
                          ? 'bg-white/5 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400'
                          : 'bg-gray-50 border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 placeholder-gray-500'
                      } focus:outline-none`}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none ${
                        isDark 
                          ? 'bg-white/5 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400'
                          : 'bg-gray-50 border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-gray-900 placeholder-gray-500'
                      } focus:outline-none`}
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full flex items-center justify-center space-x-2 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1'
                        : 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:-translate-y-1'
                    }`}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;