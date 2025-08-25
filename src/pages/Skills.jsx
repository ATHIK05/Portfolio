import React, { useRef, useEffect } from 'react';
import { Code, Database, Smartphone, Globe, Settings, Wrench, Cloud, Shield } from 'lucide-react';

const Skills = () => {
  const scrollRef = useRef(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'C#', 'Java', 'Python', 'Dart', 'JavaScript', 'TypeScript', 'PHP'],
      color: 'from-blue-500 to-cyan-500',
      icon: <Code className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Frontend Technologies',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5', 'JavaScript ES6+', 'TypeScript'],
      color: 'from-green-500 to-emerald-500',
      icon: <Globe className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Java Spring Boot', 'PHP', 'RESTful APIs', 'GraphQL'],
      color: 'from-purple-500 to-pink-500',
      icon: <Settings className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Android Studio', 'MIT App Inventor', 'Firebase Integration'],
      color: 'from-orange-500 to-red-500',
      icon: <Smartphone className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Firestore', 'CloudDB', 'SQL Server', 'PostgreSQL'],
      color: 'from-indigo-500 to-blue-500',
      icon: <Database className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub', 'Grafana', 'Terraform', 'AWS'],
      color: 'from-teal-500 to-green-500',
      icon: <Cloud className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Security & Testing',
      skills: ['Burp Suite', 'Wfuzz', 'Security Testing', 'Penetration Testing', 'OWASP', 'SSL/TLS'],
      color: 'from-red-500 to-pink-500',
      icon: <Shield className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Development Tools',
      skills: ['VS Code', 'Google IDX', 'Cursor', 'Android Studio', 'IntelliJ IDEA', 'Postman'],
      color: 'from-yellow-500 to-orange-500',
      icon: <Wrench className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = setInterval(() => {
      scrollAmount += scrollStep;
      scrollContainer.scrollLeft = scrollAmount;
      
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & Technologies
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical expertise across multiple domains of software development
          </p>
        </div>

        {/* Horizontal Scrolling Skills Container */}
        <div className="relative mb-16">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-md"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}></div>
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col min-h-[400px] justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center border border-white/30">
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill relative overflow-hidden"
                      >
                        <div className="px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-md text-center group-hover/skill:shadow-lg">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {skillCategories.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-white/30 rounded-full hover:bg-white/60 transition-colors duration-300"
              />
            ))}
          </div>
        </div>

        {/* Skills Summary with enhanced design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-white mb-2">8</div>
            <div className="text-gray-300">Skill Categories</div>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-white mb-2">4+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
        </div>

        {/* Expertise Levels */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Expertise Levels</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">Expert</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Advanced</h4>
              <p className="text-gray-300 text-sm">Flutter, Java, React, Firebase</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">Pro</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Proficient</h4>
              <p className="text-gray-300 text-sm">Node.js, Python, Docker, MongoDB</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">Good</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Intermediate</h4>
              <p className="text-gray-300 text-sm">Kubernetes, GraphQL, AWS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;