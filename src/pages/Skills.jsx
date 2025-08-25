import React, { useState, useEffect } from 'react';
import { Code, Database, Smartphone, Globe, Settings, Wrench, Cloud, Shield, Star, Zap, Award, Trophy } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({
    languages: 0,
    frameworks: 0,
    tools: 0,
    years: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        languages: 9,
        frameworks: 15,
        tools: 20,
        years: 4
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 95, icon: '☕', color: 'from-orange-500 to-red-600' },
        { name: 'Python', level: 90, icon: '🐍', color: 'from-blue-500 to-green-500' },
        { name: 'JavaScript', level: 92, icon: '⚡', color: 'from-yellow-400 to-orange-500' },
        { name: 'Dart', level: 88, icon: '🎯', color: 'from-blue-400 to-cyan-500' },
        { name: 'C++', level: 85, icon: '⚙️', color: 'from-blue-600 to-purple-600' },
        { name: 'TypeScript', level: 87, icon: '📘', color: 'from-blue-500 to-indigo-600' },
        { name: 'PHP', level: 80, icon: '🐘', color: 'from-purple-500 to-blue-600' },
        { name: 'C#', level: 82, icon: '🔷', color: 'from-purple-600 to-pink-600' }
      ],
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 93, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
        { name: 'HTML5', level: 95, icon: '🌐', color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 90, icon: '🎨', color: 'from-blue-500 to-purple-500' },
        { name: 'Tailwind CSS', level: 92, icon: '💨', color: 'from-teal-400 to-blue-500' },
        { name: 'Bootstrap', level: 88, icon: '🅱️', color: 'from-purple-500 to-pink-500' },
        { name: 'Flutter', level: 94, icon: '🦋', color: 'from-blue-400 to-cyan-500' }
      ],
      icon: <Globe className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 89, icon: '🟢', color: 'from-green-500 to-emerald-600' },
        { name: 'Express.js', level: 87, icon: '🚀', color: 'from-gray-600 to-gray-800' },
        { name: 'Firebase', level: 91, icon: '🔥', color: 'from-yellow-500 to-orange-600' },
        { name: 'MySQL', level: 85, icon: '🐬', color: 'from-blue-600 to-indigo-600' },
        { name: 'MongoDB', level: 83, icon: '🍃', color: 'from-green-600 to-teal-600' },
        { name: 'Spring Boot', level: 86, icon: '🌱', color: 'from-green-500 to-lime-500' }
      ],
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 94, icon: '📱', color: 'from-blue-400 to-cyan-500' },
        { name: 'Android Studio', level: 88, icon: '🤖', color: 'from-green-500 to-lime-500' },
        { name: 'Firebase Auth', level: 90, icon: '🔐', color: 'from-orange-500 to-red-500' },
        { name: 'Play Store', level: 85, icon: '🏪', color: 'from-green-600 to-emerald-600' }
      ],
      icon: <Smartphone className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 82, icon: '🐳', color: 'from-blue-500 to-cyan-500' },
        { name: 'Kubernetes', level: 78, icon: '☸️', color: 'from-blue-600 to-purple-600' },
        { name: 'Jenkins', level: 80, icon: '🔧', color: 'from-blue-700 to-indigo-700' },
        { name: 'Git', level: 92, icon: '📝', color: 'from-orange-600 to-red-600' },
        { name: 'AWS', level: 75, icon: '☁️', color: 'from-yellow-500 to-orange-500' }
      ],
      icon: <Cloud className="w-8 h-8" />,
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Security & Testing',
      skills: [
        { name: 'Burp Suite', level: 85, icon: '🛡️', color: 'from-red-500 to-pink-500' },
        { name: 'OWASP', level: 80, icon: '🔒', color: 'from-purple-600 to-pink-600' },
        { name: 'Penetration Testing', level: 78, icon: '🎯', color: 'from-red-600 to-orange-600' },
        { name: 'Security Auditing', level: 82, icon: '🔍', color: 'from-indigo-600 to-purple-600' }
      ],
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const certifications = [
    { name: 'Oracle Java Professional', icon: '☕', color: 'from-red-500 to-orange-500' },
    { name: 'Oracle APEX Cloud', icon: '☁️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Oracle AI Vector Search', icon: '🤖', color: 'from-purple-500 to-pink-500' }
  ];

  const achievements = [
    { icon: '🏆', count: '15+', label: 'Awards Won' },
    { icon: '🎯', count: '12+', label: 'Projects' },
    { icon: '📜', count: '20+', label: 'Certifications' },
    { icon: '⭐', count: '9.18', label: 'CGPA' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 pt-32 pb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Mastering the art of code with cutting-edge technologies and innovative solutions
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-6xl mb-4">{achievement.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.count}</div>
                <div className="text-gray-300 font-medium">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Oracle Certifications Highlight */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🏆 Oracle Global Certifications</h2>
            <p className="text-xl text-gray-300">Professional-level certifications recognized worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-all duration-500`}></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className="text-6xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                  <div className="mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-bold">
                    CERTIFIED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              <div className="flex items-center gap-4 mb-12">
                <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl shadow-2xl`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h2 className="text-4xl font-bold text-white">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group/skill relative"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover/skill:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
                    
                    {/* Skill Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:rotate-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{skill.icon}</div>
                        <div className="text-2xl font-bold text-white">{skill.level}%</div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4">{skill.name}</h3>
                      
                      {/* Animated Progress Bar */}
                      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%' 
                          }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                      
                      {/* Skill Level Badge */}
                      <div className="mt-4 text-center">
                        <span className={`px-4 py-2 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm font-bold shadow-lg`}>
                          {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-8">Technical Mastery</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {animatedStats.languages}
                </div>
                <div className="text-gray-300">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {animatedStats.frameworks}
                </div>
                <div className="text-gray-300">Frameworks & Libraries</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {animatedStats.tools}
                </div>
                <div className="text-gray-300">Tools & Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  {animatedStats.years}+
                </div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                Start a Project
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;