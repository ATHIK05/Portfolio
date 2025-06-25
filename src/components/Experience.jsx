import React from 'react';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'App Developer',
      company: 'PunchBiz',
      location: 'Erode, India',
      period: 'July 2024 - Present',
      type: 'Full-time',
      description: [
        'Developed a comprehensive Turf Booking App using Flutter and Firebase',
        'Implemented real-time booking system with Firestore integration',
        'Built user authentication system with OTP verification',
        'Created intuitive UI/UX for browsing turfs and checking availability',
        'Integrated payment gateway for seamless booking transactions'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Authentication'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Java Developer Intern',
      company: 'CodSoft',
      location: 'West Bengal, India',
      period: 'August 2024 - September 2024',
      type: 'Internship',
      description: [
        'Developed an Inventory Management System with separate admin and user modules',
        'Implemented CRUD operations with role-specific features',
        'Built comprehensive user management system with different access levels',
        'Designed database schema for efficient inventory tracking',
        'Created responsive user interfaces for both admin and user portals'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JDBC', 'HTML/CSS'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Web Developer Intern',
      company: 'CoderOne',
      location: 'Remote',
      period: 'January 2024 - February 2024',
      type: 'Internship',
      description: [
        'Developed responsive web applications using modern web technologies',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized website performance and implemented SEO best practices',
        'Built interactive features using JavaScript and modern frameworks',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Web Development Intern',
      company: 'CodSoft',
      location: 'West Bengal, India',
      period: 'November 2023 - December 2023',
      type: 'Internship',
      description: [
        'Had a kickstart learning about Web development through online mode',
        'Built foundational skills in HTML, CSS, and JavaScript',
        'Developed multiple static and dynamic web projects',
        'Learned responsive design principles and mobile-first approach',
        'Gained experience with version control using Git and GitHub'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const getTypeColor = (type) => {
    return type === 'Full-time' 
      ? 'bg-green-100 text-green-800 border-green-200' 
      : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey in software development, mobile applications, and web development
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="group relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-500 opacity-30"></div>
              )}
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:bg-white/15 transition-all duration-500 border border-white/20">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Company Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden">
                      <img 
                        src={experience.image} 
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                        <span className={`px-4 py-1 rounded-full text-sm font-medium border ${getTypeColor(experience.type)}`}>
                          {experience.type}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-300">
                        <span className="text-lg font-semibold text-blue-400">{experience.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
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
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4</div>
              <div className="text-sm text-gray-300">Total Positions</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1</div>
              <div className="text-sm text-gray-300">Full-time Role</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-sm text-gray-300">Internships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;