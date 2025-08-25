import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Shield, Truck, Recycle, Store, Heart, Users, Calendar, ShoppingCart, Dumbbell, Play } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'BookTheBiz - Turf Booking App',
      description: 'Live on Google Play Store! Complete turf booking system with real-time availability, slot booking, and payment integration. Built for PunchBiz with thousands of active users.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Payment Gateway'],
      github: 'https://github.com/Athik01/ODX',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.PunchBiz.odp&pcampaignid=web_share',
      icon: <Play className="w-6 h-6" />,
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-emerald-600',
      isLive: true,
      featured: true
    },
    {
      title: 'Medicare - Doctor Appointment System',
      description: 'Comprehensive healthcare platform with web app for doctors and mobile app for patients. Features appointment booking, prescription management, and patient records.',
      technologies: ['Firebase', 'Flutter', 'React JS', 'TypeScript'],
      github: 'https://github.com/ATHIK05/Medicare',
      icon: <Heart className="w-6 h-6" />,
      category: 'Full Stack',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-red-500 to-pink-600',
      featured: true
    },
    {
      title: 'LAMP Fellows App',
      description: 'Collaborative platform similar to Microsoft Teams for organizing events, sharing documents, and team communication with integrated chat features.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Real-time Chat'],
      github: '#',
      icon: <Users className="w-6 h-6" />,
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-500 to-indigo-600',
      featured: true
    },
    {
      title: 'JKPlus - B2B Business Platform',
      description: 'Comprehensive mobile app connecting wholesalers and retailers digitally. Wholesalers manage products and control visibility while retailers browse and order.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      github: 'https://github.com/Athik01/beplus',
      icon: <Store className="w-6 h-6" />,
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-500 to-blue-600'
    },
    {
      title: 'DevOps Full Stack Web Application',
      description: 'Complete full-stack application with CI/CD pipelines, containerization, automated deployment, and monitoring with Grafana.',
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'Jenkins', 'Grafana'],
      github: 'https://github.com/ATHIK05/DevOps_Full_Stack_Web_Application',
      icon: <Globe className="w-6 h-6" />,
      category: 'Full Stack',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Security Fuzzer Tool',
      description: 'Advanced security tool for identifying vulnerabilities in websites, APIs, and web applications with automated security checks and reporting.',
      technologies: ['Python3', 'JavaScript', 'Burp Suite', 'Wfuzz', 'SSLyze'],
      github: 'https://github.com/ATHIK05/Security-Fuzzer',
      icon: <Shield className="w-6 h-6" />,
      category: 'Security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      title: 'Fleece - Wool Transport Monitoring',
      description: 'Application connecting wool producers directly with end-users, eliminating intermediaries and providing educational resources for quality enhancement.',
      technologies: ['MIT App Inventor', 'Firebase', 'CloudDB'],
      github: '#',
      icon: <Truck className="w-6 h-6" />,
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Ease - Waste Management App',
      description: 'Environmental app encouraging proper waste disposal with reward system for recycling, using dustbins, and connecting with waste collectors.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      github: 'https://github.com/Athik01/ease',
      icon: <Recycle className="w-6 h-6" />,
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'E-Commerce Java Application',
      description: 'Command-line e-commerce application with product catalog management, cart handling, and order processing using OOP principles.',
      technologies: ['Java', 'SQL', 'JDBC'],
      github: '#',
      icon: <ShoppingCart className="w-6 h-6" />,
      category: 'Backend',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Pet Inventory Management System',
      description: 'Web application for efficient pet inventory tracking with CRUD operations, availability monitoring, and management dashboard.',
      technologies: ['PHP', 'CSS', 'HTML', 'JavaScript', 'TailwindCSS'],
      github: '#',
      icon: <Heart className="w-6 h-6" />,
      category: 'Web App',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'Fitness Tracking Web Application',
      description: 'Comprehensive fitness tracker for logging workouts, monitoring calorie intake, and tracking progress with personalized insights.',
      technologies: ['JavaScript', 'MongoDB', 'React', 'Express'],
      github: '#',
      icon: <Dumbbell className="w-6 h-6" />,
      category: 'Web App',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const categories = ['All', 'Mobile App', 'Full Stack', 'Web App', 'Security', 'Backend'];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Featured Projects</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive showcase of my development work across mobile apps, web applications, and enterprise solutions
          </p>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🌟 Featured Projects</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 hover:-translate-y-4">
                {project.isLive && (
                  <div className="absolute top-4 left-4 z-20 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    🔴 LIVE
                  </div>
                )}
                
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                  <div className="absolute top-4 right-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl text-white border border-white/30">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        Live App
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              {project.isLive && (
                <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  LIVE
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Projects Summary */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Impact</h2>
            <p className="text-xl text-gray-300">Real-world applications making a difference</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-gray-300">Total Projects</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-gray-300">Live Applications</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-gray-300">Mobile Apps</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;