import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in the field of Artificial Intelligence and Data Science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>
            
            {/* Education item */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="ml-8 bg-white rounded-xl shadow-lg p-8 flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                    Bachelor of Technology
                  </h3>
                  <div className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">2023 - 2027</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-teal-600 mb-3">
                  Artificial Intelligence and Data Science
                </h4>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Arya College of Engineering</span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">3rd</div>
                    <div className="text-sm text-gray-600">Current Year</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-teal-600 mb-1">AI/DS</div>
                    <div className="text-sm text-gray-600">Specialization</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">2027</div>
                    <div className="text-sm text-gray-600">Graduation</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Machine Learning',
                      'Data Structures',
                      'Algorithms',
                      'Statistics',
                      'Deep Learning',
                      'Data Mining',
                      'Computer Vision',
                      'Natural Language Processing'
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white text-gray-700 rounded text-sm font-medium shadow-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;