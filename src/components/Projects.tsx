import React from 'react';
import { ExternalLink, Github, TrendingUp, BarChart3, Database } from 'lucide-react';

const Projects = () => {
  const project = {
    title: 'Petrol Consumption Predictor (India)',
    description: 'A web-based ML application that predicts petrol consumption using economic indicators. Built with Streamlit, it allows dataset uploads, visualizes key trends, predicts using Linear Regression, and lets users export predictions.',
    technologies: ['Python', 'scikit-learn', 'Streamlit', 'pandas', 'matplotlib'],
    features: [
      'Dataset upload functionality',
      'Interactive data visualization',
      'Linear Regression prediction model',
      'Export predictions feature',
      'Economic indicators analysis'
    ],
    icon: TrendingUp,
    color: 'blue'
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Project</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a showcase of my machine learning project that demonstrates my skills in data analysis and predictive modeling
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                <project.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/manojkumar788961/petrol-consumption-predictor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View project code on GitHub"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  <a 
                    href="https://petrol-consumption-predictor.streamlit.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="View live demo of the project"
                    className="flex items-center space-x-2 text-teal-600 hover:text-teal-800 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {project.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-teal-600" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;