import React from 'react';
import { User, MapPin, GraduationCap, Briefcase, Award, Code2, Trophy, Star, Target, Zap } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, number: "15+", label: "Awards Won", color: "text-yellow-500" },
    { icon: <Code2 className="w-6 h-6" />, number: "12+", label: "Projects", color: "text-blue-500" },
    { icon: <Award className="w-6 h-6" />, number: "20+", label: "Certifications", color: "text-green-500" },
    { icon: <Star className="w-6 h-6" />, number: "9.18", label: "CGPA", color: "text-purple-500" },
    { icon: <Target className="w-6 h-6" />, number: "3", label: "Oracle Global Certs", color: "text-red-500" },
    { icon: <Zap className="w-6 h-6" />, number: "2", label: "Live Apps", color: "text-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">About Me</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Software Developer with a proven track record of excellence in competitive programming, 
            hackathons, and real-world application development
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Enhanced Image and Quick Info */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/me.jpg" 
                  alt="Mohamed Athik R" 
                  className="relative w-full max-w-md mx-auto h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  Available for Work
                </div>
              </div>
              
              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-800">Role</span>
                  </div>
                  <p className="text-sm text-gray-600">Senior App Developer</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-6 h-6 text-green-600" />
                    <span className="font-semibold text-gray-800">Location</span>
                  </div>
                  <p className="text-sm text-gray-600">Tamil Nadu, India</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-800">Education</span>
                  </div>
                  <p className="text-sm text-gray-600">MSc Software Systems</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-6 h-6 text-orange-600" />
                    <span className="font-semibold text-gray-800">Experience</span>
                  </div>
                  <p className="text-sm text-gray-600">4+ Years</p>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Description */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    I'm <span className="font-bold text-blue-600">Mohamed Athik R</span>, a passionate Software Developer 
                    currently pursuing my Master's in Software Systems at Kongu Engineering College with an outstanding 
                    <span className="font-bold text-purple-600"> 9.18 CGPA</span>.
                  </p>
                  
                  <p>
                    My professional journey spans multiple roles including <span className="font-semibold">Senior App Developer</span> 
                    at PunchBiz and Crescent Moon Consulting Services, where I've developed and deployed live applications 
                    used by thousands of users. My flagship app <span className="font-bold text-green-600">BookTheBiz</span> 
                    is currently live on Google Play Store.
                  </p>
                  
                  <p>
                    With <span className="font-bold text-red-600">3 Oracle Global Certifications</span> in Java Development, 
                    APEX Cloud Development, and AI Vector Search, I've established myself as a certified professional in 
                    enterprise-level technologies. My expertise spans across Flutter, React, Node.js, Java, and various 
                    modern development frameworks.
                  </p>
                  
                  <p>
                    I've achieved remarkable success in competitive programming and hackathons, winning 
                    <span className="font-bold text-yellow-600"> 15+ awards</span> including first prizes in state-level 
                    hackathons and multiple ideathons. As the Department Coding Club Treasurer, I actively contribute 
                    to the tech community and mentor fellow developers.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Current Focus</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Developing scalable mobile and web applications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Leading development teams and mentoring junior developers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Exploring AI/ML integration in mobile applications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Contributing to open-source projects and tech communities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Achievement Stats */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Key Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center border-t-4 border-transparent hover:border-blue-500">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300 ${achievement.color}`}>
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Highlight */}
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
              <p className="text-xl text-gray-300">Specialized in cutting-edge technologies and frameworks</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Full Stack</h3>
                <p className="text-gray-300 text-sm">React, Node.js, Flutter</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile Dev</h3>
                <p className="text-gray-300 text-sm">Flutter, Android, Firebase</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Oracle Certified</h3>
                <p className="text-gray-300 text-sm">Java, APEX, AI Vector</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">DevOps</h3>
                <p className="text-gray-300 text-sm">Docker, Kubernetes, Jenkins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;