import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    try {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('About section not found');
      }
    } catch (error) {
      console.error('Error scrolling to about section:', error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Manoj Kumar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            B.Tech Student in AI & Data Science | Passionate about Machine Learning & Data Analysis
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:manojkumar788961@gmail.com"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <a
              href="#projects"
              className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              <span>View Projects</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/manojkumar788961"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          >
            <Github size={24} className="text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/manoj-kumar-82850a326"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          >
            <Linkedin size={24} className="text-blue-600" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <ChevronDown size={24} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;