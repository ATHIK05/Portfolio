import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy, Star } from 'lucide-react';

const Education = () => {
  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, label: "CGPA: 9.18", color: "text-yellow-500" },
    { icon: <Star className="w-6 h-6" />, label: "Department Treasurer", color: "text-purple-500" },
    { icon: <Award className="w-6 h-6" />, label: "15+ Awards", color: "text-green-500" },
    { icon: <Users className="w-6 h-6" />, label: "Tech Community Leader", color: "text-blue-500" }
  ];

  const keySubjects = [
    { name: "Advanced Software Engineering", grade: "A+", credits: 4 },
    { name: "Database Management Systems", grade: "A+", credits: 4 },
    { name: "Web Technologies & Frameworks", grade: "A+", credits: 3 },
    { name: "Mobile Application Development", grade: "A+", credits: 4 },
    { name: "Data Structures & Algorithms", grade: "A+", credits: 4 },
    { name: "Object-Oriented Programming", grade: "A+", credits: 3 },
    { name: "Software Testing & Quality Assurance", grade: "A", credits: 3 },
    { name: "Computer Networks", grade: "A+", credits: 4 }
  ];

  const academicProjects = [
    {
      title: "AI-Powered Healthcare Management System",
      description: "Comprehensive healthcare platform with ML-based diagnosis assistance",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      grade: "A+"
    },
    {
      title: "Distributed E-Commerce Platform",
      description: "Scalable microservices-based e-commerce solution with real-time analytics",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes"],
      grade: "A+"
    },
    {
      title: "Smart Campus Management System",
      description: "IoT-enabled campus management with mobile and web interfaces",
      technologies: ["Flutter", "Firebase", "IoT", "React"],
      grade: "A"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Education</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic excellence with outstanding performance and leadership in software systems
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Education Card */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-2xl p-12 mb-16 hover:shadow-3xl transition-all duration-500 border border-blue-200">
            <div className="flex flex-col lg:flex-row lg:items-start gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <GraduationCap className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    9.18 CGPA
                  </div>
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Master of Science in Software Systems</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <BookOpen size={20} />
                      <span className="text-2xl font-bold text-blue-600">Kongu Engineering College</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span className="text-lg">Perundurai, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span className="text-lg font-medium">2022 - 2027</span>
                    </div>
                  </div>
                  
                  {/* Achievement Badges */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className={`${achievement.color}`}>
                          {achievement.icon}
                        </div>
                        <span className="font-semibold text-gray-800 text-sm">{achievement.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="prose prose-lg text-gray-700 mb-8">
                  <p className="text-xl leading-relaxed mb-6">
                    Currently pursuing a comprehensive Master's program in Software Systems with an exceptional 
                    <span className="font-bold text-purple-600"> 9.18 CGPA</span>, focusing on advanced software 
                    development methodologies, system design, and emerging technologies.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    As the <span className="font-bold text-blue-600">Department Coding Club Treasurer</span>, I actively 
                    lead technical initiatives, organize hackathons, and mentor fellow students. My academic journey 
                    is complemented by practical experience through internships, live project deployments, and 
                    consistent recognition in competitive programming events.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Subjects */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Key Subjects & Performance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keySubjects.map((subject, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-500">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-800 text-lg leading-tight">{subject.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      subject.grade === 'A+' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {subject.grade}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Credits</span>
                    <span className="font-semibold text-gray-800">{subject.credits}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Major Academic Projects</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {academicProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 leading-tight">{project.title}</h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      project.grade === 'A+' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.grade}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Excellence Summary */}
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Academic Excellence</h2>
              <p className="text-xl text-gray-300">Consistent high performance and leadership in academics</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">9.18</div>
                <div className="text-gray-300">Current CGPA</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">8</div>
                <div className="text-gray-300">A+ Grades</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">3</div>
                <div className="text-gray-300">Major Projects</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-gray-300">Academic Awards</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">🎓 Academic Focus Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Advanced Software Engineering & Architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Mobile & Web Application Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Database Systems & Data Management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Software Testing & Quality Assurance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-green-400">🏆 Leadership & Activities</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Department Coding Club Treasurer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Hackathon Organization & Participation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Peer Mentoring & Code Reviews</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Technical Workshop Conductor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;