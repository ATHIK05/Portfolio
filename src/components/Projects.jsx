import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Shield, Truck, Recycle, Store } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'DevOps Full Stack Web Application',
      description: 'Complete full-stack web application with DevOps integration, featuring CI/CD pipelines, containerization, and automated deployment.',
      technologies: ['React', 'Node.js', 'Docker', 'Kubernetes', 'Jenkins'],
      github: 'https://github.com/ATHIK05/DevOps_Full_Stack_Web_Application',
      icon: <Globe className="w-6 h-6" />,
      category: 'Full Stack',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Business to Business Application',
      description: 'Mobile app connecting wholesalers and retailers digitally. Wholesalers manage products and control visibility while retailers browse and order.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      github: 'https://github.com/Athik01/beplus',
      icon: <Smartphone className="w-6 h-6" />,
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Turf Booking Application',
      description: 'Complete turf booking system allowing users to browse turfs, check availability, and book slots with real-time updates.',
      technologies: ['Flutter', 'Firebase', 'Firestore'],
      github: 'https://github.com/Athik01/ODX',
      icon: <Smartphone className="w-6 h-6" />,
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Security Fuzzer Tool',
      description: 'Advanced security tool for identifying vulnerabilities in websites, APIs, and web applications with automated security checks.',
      technologies: ['Python', 'JavaScript', 'Burp Suite', 'Wfuzz'],
      github: 'https://github.com/ATHIK05/Security-Fuzzer',
      icon: <Shield className="w-6 h-6" />,
      category: 'Security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Smart Seminar Note Taker (XoW)',
      description: 'Intelligent mobile application for taking seminar notes and establishing business connections at large scale events.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      github: 'https://github.com/Athik01/XoW_New',
      icon: <Smartphone className="w-6 h-6" />,
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Environment Management (Ease)',
      description: 'Green application focused on environmental conservation and sustainability with admin panel for management.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      github: 'https://github.com/Athik01/ease',
      icon: <Recycle className="w-6 h-6" />,
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const categories = ['All', 'Full Stack', 'Mobile App', 'Security'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my development work across web applications, mobile apps, and security tools
          </p>
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                    {project.icon}
                  </div>
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
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
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
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">12+</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">8</div>
              <div className="text-sm text-gray-600">Mobile Apps</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4</div>
              <div className="text-sm text-gray-600">Web Apps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;