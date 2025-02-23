import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ShinyButtons from './ShinyButtons';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Left Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-gray-300 hover:text-white transition-colors font-semibold relative ${
                  activeSection === item.href.slice(1) ? 'text-white' : ''
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                  />
                )}
              </a>
            ))}
            {navItems.slice(2).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-gray-300 hover:text-white transition-colors font-semibold relative ${
                  activeSection === item.href.slice(1) ? 'text-white' : ''
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a 
            href="#home" 
            className="mx-auto" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <img
              src="https://i.ibb.co.com/jZPHxZSy/ATC-Logo-white-1.png"
              alt="ATC Tech Logo"
              className="h-8 md:h-12 transition-transform hover:scale-105"
            />
          </a>

          {/* Desktop Right Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
            
            <ShinyButtons />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-black/50 backdrop-blur-sm border-t border-white/10"
          >
            <div className="px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`block py-3 text-lg ${
                    activeSection === item.href.slice(1)
                      ? 'text-white font-bold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 space-y-4">
                <ShinyButtons mobile />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}