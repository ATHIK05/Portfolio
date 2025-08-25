import React from 'react';
import { Briefcase, Calendar, MapPin, Building, Users, Code, Smartphone, Palette } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior App Developer',
      company: 'Crescent Moon Consulting Services',
      location: 'Erode, Tamil Nadu',
      period: 'July 2025 - Present',
      type: 'Full-time',
      description: [
        'Leading development of Doctor Appointment Booking App with real-time slot management',
        'Built LAMP Fellows App - collaborative platform similar to Microsoft Teams',
        'Implemented patient consultation tracking, prescriptions, and billing systems',
        'Developed integrated chat features and document sharing capabilities',
        'Managing team of junior developers and conducting code reviews'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Real-time Chat', 'Team Leadership'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-500 to-indigo-600',
      achievements: ['Team Lead', 'Live App Deployment', '2 Major Projects']
    },
    {
      title: 'Senior App Developer',
      company: 'PunchBiz',
      location: 'Erode, Tamil Nadu',
      period: 'July 2024 - Present',
      type: 'Full-time',
      description: [
        'Developed and deployed BookTheBiz - Live on Google Play Store with 1000+ downloads',
        'Built comprehensive turf booking system with real-time availability tracking',
        'Implemented secure payment gateway integration and user authentication',
        'Created intuitive UI/UX for seamless booking experience',
        'Managed app deployment, maintenance, and user feedback integration'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Payment Gateway', 'Play Store'],
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-emerald-600',
      achievements: ['Live App', '1000+ Users', 'Play Store Success'],
      isLive: true
    },
    {
      title: 'UI/UX Designer',
      company: 'CoderOne',
      location: 'Delhi, India',
      period: 'July 2024 - September 2024',
      type: 'Internship',
      description: [
        'Designed and developed 3 comprehensive UI/UX templates',
        'Created E-commerce Mobile App UI with intuitive browsing and checkout flow',
        'Built responsive Portfolio UI for personal and professional showcase',
        'Developed Shopping Site UI with user-friendly navigation and product display',
        'Collaborated with development team to ensure design implementation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Flutter', 'React', 'UI/UX Design'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-500 to-pink-600',
      achievements: ['3 UI Templates', 'Design Systems', 'User Experience']
    },
    {
      title: 'Java Developer',
      company: 'CodSoft',
      location: 'Delhi, India',
      period: 'June 2024 - August 2024',
      type: 'Internship',
      description: [
        'Developed comprehensive Inventory Management System with admin and user modules',
        'Implemented CRUD operations with role-specific features and access controls',
        'Built robust user management system with different permission levels',
        'Designed efficient database schema for inventory tracking and reporting',
        'Created responsive interfaces for both administrative and user portals'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JDBC', 'HTML/CSS'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-orange-500 to-red-600',
      achievements: ['Full System', 'Role Management', 'Database Design']
    },
    {
      title: 'Web Developer',
      company: 'CodSoft',
      location: 'Delhi, India',
      period: 'March 2024 - May 2024',
      type: 'Internship',
      description: [
        'Completed comprehensive Web Development internship with hands-on projects',
        'Built responsive websites using modern HTML5, CSS3, and JavaScript',
        'Integrated APIs with modern frameworks and implemented SEO best practices',
        'Collaborated with design team for pixel-perfect UI component implementation',
        'Participated in agile development processes and code review sessions'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'API Integration'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-cyan-500 to-blue-600',
      achievements: ['Responsive Design', 'API Integration', 'SEO Optimization']
    }
  ];

  const getTypeColor = (type) => {
    return type === 'Full-time' 
      ? 'bg-green-100 text-green-800 border-green-200' 
      : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  const getIcon = (title) => {
    if (title.includes('App Developer') || title.includes('Senior App')) return <Smartphone className="w-8 h-8" />;
    if (title.includes('UI/UX')) return <Palette className="w-8 h-8" />;
    if (title.includes('Java') || title.includes('Web')) return <Code className="w-8 h-8" />;
    return <Briefcase className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Professional Experience</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey spanning mobile development, web applications, UI/UX design, and team leadership
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="group relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-12 top-32 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-500 opacity-30"></div>
              )}
              
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 hover:bg-white/15 transition-all duration-700 border border-white/20 hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Company Image & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src={experience.image} 
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-80`}></div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <div className="text-gray-700">
                          {getIcon(experience.title)}
                        </div>
                      </div>
                      {experience.isLive && (
                        <div className="absolute -top-2 -left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                          LIVE APP
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <h3 className="text-3xl font-bold text-white">{experience.title}</h3>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getTypeColor(experience.type)} w-fit`}>
                          {experience.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-300 mb-4">
                        <div className="flex items-center gap-2">
                          <Building size={18} />
                          <span className="text-xl font-semibold text-blue-300">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span className="font-medium">{experience.period}</span>
                        </div>
                      </div>

                      {/* Achievements Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {experience.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg"
                          >
                            🏆 {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <ul className="space-y-4">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-4 text-gray-300">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Experience Summary */}
        <div className="mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Career Highlights</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">5</div>
                <div className="text-gray-300">Total Positions</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">2</div>
                <div className="text-gray-300">Senior Roles</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">2</div>
                <div className="text-gray-300">Live Applications</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">4+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>

            {/* Key Skills from Experience */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mobile Development</h3>
                <p className="text-gray-300 text-sm">Flutter, Dart, Firebase, Play Store Deployment</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Team Leadership</h3>
                <p className="text-gray-300 text-sm">Project Management, Code Reviews, Mentoring</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Full Stack Development</h3>
                <p className="text-gray-300 text-sm">Java, React, Node.js, Database Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;