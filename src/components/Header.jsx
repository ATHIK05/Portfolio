import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-800/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent' 
              : 'text-white'
          }`}>
            Mohamed Athik R
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors duration-300 font-medium hover:scale-105 transform ${
                  isScrolled
                    ? 'text-gray-700 hover:text-indigo-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 rounded-lg ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-sm' 
              : 'bg-white/10 backdrop-blur-sm'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 transition-colors duration-300 rounded-lg ${
                  isScrolled
                    ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;