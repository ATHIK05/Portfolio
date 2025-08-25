import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Code, Briefcase, Award, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/about', label: 'About', icon: <User size={18} /> },
    { path: '/skills', label: 'Skills', icon: <Code size={18} /> },
    { path: '/projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { path: '/experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { path: '/awards', label: 'Awards', icon: <Award size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
        : 'bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-pink-800/90 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
            isScrolled 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent' 
              : 'text-white'
          }`}>
            Mohamed Athik R
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 transform ${
                  isActive(item.path)
                    ? isScrolled
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
                    : isScrolled
                      ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
                <span className="hidden xl:block">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 rounded-2xl transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200' 
              : 'bg-white/10 backdrop-blur-sm border border-white/20'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 py-3 px-4 mx-2 rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? isScrolled
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'bg-white/20 text-white'
                    : isScrolled
                      ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;