import React from 'react';
import { User, Target, Code, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Who I Am</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a third-year Computer Science student passionate about machine learning, data analysis, and AI applications. Currently working on ML projects using Python, scikit-learn, and pandas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">My Goal</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a machine learning engineer where I can solve real-world problems through data-driven solutions and continue learning in a dynamic environment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">My Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm deeply fascinated by the intersection of artificial intelligence and real-world problem solving, constantly exploring new ways to leverage data for meaningful insights.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-sm text-gray-600">Years of Study</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Learning Mode</div>
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