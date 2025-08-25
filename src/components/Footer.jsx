import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Mohamed Athik R</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer & Mobile App Developer passionate about creating 
              innovative solutions and building meaningful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ATHIK05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-athik-r"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mohamedathikr.22msc@kongu.edu"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Experience
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Perundurai, Tamil Nadu, India</p>
              <a href="mailto:mohamedathikr.22msc@kongu.edu" className="hover:text-white transition-colors duration-200">
                mohamedathikr.22msc@kongu.edu
              </a>
              <p>Available for freelance work</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Mohamed Athik R
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;