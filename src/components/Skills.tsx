import React from 'react';
import { Brain, Code, Database, Wrench, BookOpen, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'blue',
      skills: ['scikit-learn', 'pandas', 'NumPy', 'matplotlib', 'seaborn']
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'teal',
      skills: ['Python', 'C/C++', 'Java']
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'orange',
      skills: ['Jupyter Notebook', 'VS Code', 'IntelliJ IDEA', 'Git', 'GitHub']
    },
    {
      title: 'Concepts',
      icon: BookOpen,
      color: 'purple',
      skills: ['Supervised Learning', 'Regression', 'Classification', 'Clustering', 'Model Evaluation']
    },
    {
      title: 'Other Technologies',
      icon: Monitor,
      color: 'green',
      skills: ['Streamlit', 'OpenCV', 'TensorFlow', 'MySQL']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      green: 'bg-green-100 text-green-600 border-green-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;