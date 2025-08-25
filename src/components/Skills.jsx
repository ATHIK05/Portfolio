import React, { useRef, useEffect } from 'react';
import { Code, Database, Smartphone, Globe, Settings, Wrench } from 'lucide-react';

const Skills = () => {
  const scrollRef = useRef(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'C#', 'Java', 'Python', 'Dart', 'JavaScript', 'TypeScript'],
      color: 'bg-blue-100 text-blue-800',
      icon: <Code className="w-8 h-8" />,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Web Technologies',
      skills: ['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5', 'Express.js'],
      color: 'bg-green-100 text-green-800',
      icon: <Globe className="w-8 h-8" />,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Android Studio', 'MIT App Inventor', 'Firebase Integration'],
      color: 'bg-purple-100 text-purple-800',
      icon: <Smartphone className="w-8 h-8" />,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Firestore', 'CloudDB', 'PostgreSQL'],
      color: 'bg-orange-100 text-orange-800',
      icon: <Database className="w-8 h-8" />,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'Grafana', 'Terraform'],
      color: 'bg-red-100 text-red-800',
      icon: <Settings className="w-8 h-8" />,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Development Tools',
      skills: ['VS Code', 'Google IDX', 'Cursor', 'Android Studio', 'IntelliJ IDEA', 'Postman'],
      color: 'bg-indigo-100 text-indigo-800',
      icon: <Wrench className="w-8 h-8" />,
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
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
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
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
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-md"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/80"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col min-h-[400px] justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl ${category.bgColor} shadow-lg flex items-center justify-center border border-white/30`}>
                      <div className={category.color.split(' ')[1]}>{category.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-md text-center"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                className="w-2 h-2 bg-white/30 rounded-full hover:bg-white/60 transition-colors duration-300"
              />
            </div>
          ))}
          </div>
        </div>
        
        {/* Skills Summary */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">6</div>
              <div className="text-sm text-gray-300">Skill Categories</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">40+</div>
              <div className="text-sm text-gray-300">Technologies</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;