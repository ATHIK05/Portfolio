import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download, Code, Smartphone, ArrowDown, Play, ExternalLink } from 'lucide-react';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'Mobile App Developer', 
    'Team Lead',
    'Console Manager',
    'UI/UX Designer',
    'DevOps Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in flex flex-col items-center justify-center max-w-5xl mx-auto">
          {/* Profile Image with enhanced styling */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="/me.jpg"
              alt="Mohamed Athik R"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl bg-gray-200 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Name with typing effect */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mohamed Athik R
              </span>
            </h1>
            
            {/* Animated role display */}
            <div className="h-16 md:h-20 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-semibold text-blue-300 transition-all duration-500 transform">
                {roles[currentRole]}
              </span>
            </div>
          </div>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Oracle Certified Professional crafting innovative digital solutions with{' '}
            <span className="text-blue-300 font-semibold">12+ projects</span>,{' '}
            <span className="text-purple-300 font-semibold">20+ certifications</span>, and{' '}
            <span className="text-pink-300 font-semibold">12+ awards</span> in competitive programming and hackathons.
          </p>

          {/* Live App Showcase */}
          <div className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Play className="w-6 h-6 text-green-400" />
              <span className="text-white font-semibold">Live on Google Play Store</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">BookTheBiz - Turf Booking App</h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.PunchBiz.odp&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
            >
              <ExternalLink size={16} />
              View on Play Store
            </a>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/ATHIK05"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gray-900/80 backdrop-blur-sm text-white rounded-2xl hover:bg-gray-800/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-gray-700"
            >
              <Github size={24} />
              <span className="font-semibold">GitHub</span>
              <div className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                <ExternalLink size={16} />
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/mohamed-athik-r"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-blue-600/80 backdrop-blur-sm text-white rounded-2xl hover:bg-blue-700/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-blue-500"
            >
              <Linkedin size={24} />
              <span className="font-semibold">LinkedIn</span>
              <div className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                <ExternalLink size={16} />
              </div>
            </a>
            
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-purple-600/80 backdrop-blur-sm text-white rounded-2xl hover:bg-purple-700/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-purple-500"
            >
              <Mail size={24} />
              <span className="font-semibold">Get In Touch</span>
            </Link>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">12+</div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-sm text-gray-300">Certifications</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">12+</div>
              <div className="text-sm text-gray-300">Awards</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">9.18</div>
              <div className="text-sm text-gray-300">CGPA</div>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white/70 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;