import React from 'react';
import { Github, Linkedin, Mail, Download, Code, Smartphone, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <img
              src="/me.jpg"
              alt="Profile"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-xl bg-gray-200"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.15)' }}
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Mohamed Athik R
            </h1>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-2 border border-white/30">
              <Code size={20} />
              Full Stack Developer
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-2 border border-white/30">
              <Smartphone size={20} />
              Mobile App Developer
            </span>
          </div>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate Software Developer specializing in Full Stack Web Development and Mobile Applications. 
            Oracle Certified Professional with expertise in Flutter, React, Node.js, and modern development practices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/ATHIK05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-gray-900/80 backdrop-blur-sm text-white rounded-xl hover:bg-gray-800/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-gray-700"
            >
              <Github size={24} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mohamed-athik-r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-blue-600/80 backdrop-blur-sm text-white rounded-xl hover:bg-blue-700/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-blue-500"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a
              href="mailto:mohamedathikr.22msc@kongu.edu"
              className="flex items-center gap-2 px-8 py-4 bg-purple-600/80 backdrop-blur-sm text-white rounded-xl hover:bg-purple-700/80 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-purple-500"
            >
              <Mail size={24} />
              Email
            </a>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white/70 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;