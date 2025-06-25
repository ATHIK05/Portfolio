import React from 'react';
import { User, MapPin, GraduationCap, Briefcase, Award, Code2, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image and Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl transform rotate-6"></div>
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Developer workspace" 
                  className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <Code2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">12+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">7</div>
                  <div className="text-sm text-gray-600">Awards</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">10</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <GraduationCap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">9.11</div>
                  <div className="text-sm text-gray-600">CGPA</div>
                </div>
              </div>
            </div>

            {/* Right Side - Info and Description */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="text-blue-600" size={24} />
                  </div>
                  <span className="text-lg font-medium text-gray-800">Software Developer & Student</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <span className="text-lg text-gray-800">Perundurai, Tamil Nadu, India</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-purple-600" size={24} />
                  </div>
                  <span className="text-lg text-gray-800">MSc Software Systems (CGPA: 9.11)</span>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-orange-600" size={24} />
                  </div>
                  <span className="text-lg text-gray-800">App Developer at PunchBiz</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-red-200">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Award className="text-red-600" size={24} />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">3 Oracle Global Certifications</span>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-lg">
                <p>
                  I'm a passionate software developer currently pursuing my Master's in Software Systems 
                  at Kongu Engineering College. With a strong foundation in both web and mobile development, 
                  I specialize in creating innovative solutions that bridge the gap between technology and user needs.
                </p>
                
                <p>
                  My professional journey includes experience at PunchBiz as an App Developer and multiple 
                  internships at CodSoft and CoderOne, where I've worked on diverse projects ranging from 
                  inventory management systems to comprehensive web applications. I hold three prestigious 
                  Oracle Global Certifications in Java Development, APEX Cloud Development, and AI Vector Search.
                </p>
                
                <p>
                  With expertise spanning Flutter, React, Node.js, Java, and various databases, I've successfully 
                  delivered 12+ projects including mobile apps, web applications, and security tools. My academic 
                  excellence (9.11 CGPA) combined with practical experience and multiple hackathon victories 
                  demonstrates my commitment to continuous learning and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;