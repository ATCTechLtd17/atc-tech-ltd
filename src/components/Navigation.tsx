import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ShinyButtons from './ShinyButtons';


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
 
  const navItems = [
    { href: '/', label: 'Home'},
    { href: '/services', label: 'Services'},
    { href: '/products', label: 'Our Products'},
    { href: '/contact', label: 'Contact'},
    
  ];

  useEffect(() => {
   
    const currentPath = window.location.pathname.replace('/', '');
    if (currentPath) {
      setActiveSection(currentPath || 'home');
    }

    const handleScroll = () => {
    
      if (window.location.pathname === '/' || window.location.pathname === '/home') {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute('id') || '';

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const handleNavigation = (href: string) => {
 
    setIsOpen(false);
    
  
    if (href.startsWith('#')) {
    
      if (window.location.pathname === '/' || window.location.pathname === '/home') {
    
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
      
        window.location.href = '/' + href;
      
      }
    } else {
      
      window.location.href = href;
    
    }
  };

  
  const isNavItemActive = (href: string) => {
  
    const pathWithoutSlash = href.replace('/', '');
    return activeSection === pathWithoutSlash;
  };

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Left Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            {navItems.slice(0, 2).map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
                className={`text-gray-300 hover:text-white transition-colors font-semibold relative ${
                  isNavItemActive(item.href) ? 'text-white' : ''
                }`}
              >
                {item.label}
                {isNavItemActive(item.href) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                  />
                )}
              </a>
            ))}
            {navItems.slice(2).map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
                className={`text-gray-300 hover:text-white transition-colors font-semibold relative ${
                  isNavItemActive(item.href) ? 'text-white' : ''
                }`}
              >
                {item.label}
                {isNavItemActive(item.href) && (
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
            href="/"
            className="mx-auto"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
          >
            <img
              src="https://res.cloudinary.com/dufs2ywc7/image/upload/v1742376697/ATC_sh8p3m.png"
              alt="ATC Tech Logo"
              className="h-[100px]  md:h-[160px]  transition-transform hover:scale-105"
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
                  href={item.href}
                  key={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className={`block py-3 text-lg ${
                    isNavItemActive(item.href)
                      ? 'text-white font-bold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 space-y-4">
                
                <ShinyButtons  />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}