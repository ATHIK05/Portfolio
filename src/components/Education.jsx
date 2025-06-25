import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background and educational achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary-600" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Master of Science in Software Systems</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-3">
                    <span className="text-lg font-semibold text-primary-600">Kongu Engineering College</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>Perundurai, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>2022 - 2027</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg font-semibold text-gray-800">CGPA: 9.11</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Excellent Performance
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <p>
                    Currently pursuing a comprehensive Master's program in Software Systems, focusing on 
                    advanced software development methodologies, system design, and emerging technologies.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Areas of Study</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Advanced Software Engineering</li>
                        <li>• Database Management Systems</li>
                        <li>• Web Technologies & Frameworks</li>
                        <li>• Mobile Application Development</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Academic Achievements</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consistent High Performance (9.11 CGPA)</li>
                        <li>• Department Coding Club Treasurer</li>
                        <li>• Multiple Hackathon Victories</li>
                        <li>• Research & Development Projects</li>
                      </ul>
                    </div>
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