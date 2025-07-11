import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Manoj Kumar</h3>
            <p className="text-gray-400 mb-6">
              B.Tech Student in AI & Data Science | Passionate about Machine Learning & Data Analysis
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#education" className="text-gray-400 hover:text-white transition-colors duration-200">
                Education
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-blue-500" />
              <span>by Manoj Kumar</span>
            </div>
            <p className="text-gray-500 mt-2">
              © {new Date().getFullYear()} Manoj Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;