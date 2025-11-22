'use client';

import { useState, useEffect } from 'react';
import { Play, Home, Briefcase, Mail, Menu, X, User } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-20" />
              
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                  activeSection === 'home' 
                    ? 'text-red-500 bg-red-500/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Home className="h-4 w-4" />
                Home
              </button>
              <Link
                href="/work"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
              >
                <Briefcase className="h-4 w-4" />
                Work
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
              >
                <User className="h-4 w-4" />
                About
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                  activeSection === 'contact' 
                    ? 'text-red-500 bg-red-500/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Mail className="h-4 w-4" />
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('home')}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-3 cursor-pointer ${
                  activeSection === 'home' 
                    ? 'text-red-500 bg-red-500/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Home className="h-5 w-5" />
                Home
              </button>
              <Link
                href="/work"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
              >
                <Briefcase className="h-5 w-5" />
                Work
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
              >
                <User className="h-5 w-5" />
                About
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-3 cursor-pointer ${
                  activeSection === 'contact' 
                    ? 'text-red-500 bg-red-500/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Mail className="h-5 w-5" />
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
