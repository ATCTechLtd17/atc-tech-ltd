/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { Brain, Code, Database, Mail, Phone, MapPin, Send } from 'lucide-react';
import TechStars from '../components/TechStars';

import LogoSlider from '../components/LogoSlider';
import Services from './Services';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  icon: React.FC<{ className?: string }>;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface ContactInfo {
  icon: React.FC<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Enterprise-scale analytics platform leveraging machine learning for predictive insights.",
    image: "/api/placeholder/400/320",
    category: "AI & Machine Learning",
    icon: Brain
  },
  {
    title: "Next-Gen Code Generator",
    description: "Advanced code generation tool using transformer models and context awareness.",
    image: "/api/placeholder/400/320",
    category: "Development Tools",
    icon: Code
  },
  {
    title: "Distributed Database System",
    description: "High-performance distributed database with real-time synchronization.",
    image: "/api/placeholder/400/320",
    category: "Infrastructure",
    icon: Database
  }
];

const contactInfo: ContactInfo[] = [
  { icon: Mail, label: "Email", value: "contact@atctech.com", color: "blue" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "blue" },
  { icon: MapPin, label: "Location", value: "Silicon Valley, CA", color: "gray" }
];

export default function Home(): JSX.Element {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const words = ["Innovate.", "Transform.", "Achieve.", "Excel."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY] = useState<number>(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const autoRotateX = useMotionValue(0);
  const autoRotateY = useMotionValue(0);
  const autoRotateZ = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      autoRotateX.set(Math.sin(Date.now() / 3000) * 15);
      autoRotateY.set(Math.cos(Date.now() / 4000) * 15);
      autoRotateZ.set(Math.sin(Date.now() / 5000) * 5);
    }, 50);
    return () => clearInterval(interval);
  }, [autoRotateX, autoRotateY, autoRotateZ]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="relative bg-black overflow-x-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section id="home" className="relative h-screen md:h-[90vh] lg:h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <TechStars />
          <div className="  w-full h-full">
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
        </div>

        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0F79B9] to-[#107EC1]">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWordIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-[#808080] max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Pushing the boundaries of what's possible with cutting-edge solutions
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, backgroundColor: '#0F79B9' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-3 bg-[#0F79B9] rounded-full text-sm sm:text-lg font-semibold hover:shadow-lg hover:shadow-[#0F79B9]/25"
            >
              Explore Our Work
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative px-6 py-3 sm:px-8 sm:py-3 bg-transparent border-2 border-[#0F79B9] rounded-full text-sm sm:text-lg font-semibold inline-block overflow-hidden"
            >
              <span>Contact Us</span>
              <motion.div className="absolute top-0 left-0 h-[4px] w-0 rounded-[50px] bg-gradient-to-r from-blue-400/30 via-blue-600/30 to-blue-400 animate-pulse" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Logo Slider */}
      <LogoSlider />

      {/* Services Section */}
      <div id="services">
        <Services />
      </div>

      {/* Projects Section */}
      <section className="py-12 md:py-20 relative" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-[#0F79B9] to-[#107EC1] bg-clip-text text-transparent">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F79B9]/20 to-[#107EC1]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <project.icon className="w-6 h-6 text-[#0F79B9]" />
                    <span className="text-sm text-[#0F79B9]">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#808080] text-sm sm:text-base">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 relative" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-[#0F79B9] to-[#107EC1] bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-lg flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-500`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm md:text-base">{item.label}</p>
                      <p className="text-base md:text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "message", label: "Message", type: "textarea" }
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      rows={4}
                      className="w-full px-4 py-3 text-sm md:text-base bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      value={formState[field.id as keyof FormState]}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-4 py-3 text-sm md:text-base bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      value={formState[field.id as keyof FormState]}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                className="w-full px-6 py-3 md:py-4 bg-gradient-to-r from-[#0F79B9] to-[#107EC1] rounded-lg font-semibold flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 md:py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div>
              <h4 className="text-base md:text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                ATC Tech
              </h4>
              <p className="text-gray-400 text-sm md:text-base">
                Pioneering the future of technology through innovation and excellence.
              </p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Projects', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['AI Solutions', 'Cloud Infrastructure', 'Data Analytics', 'Custom Development'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((platform) => (
                  <a
                    key={platform}
                    href={`#${platform.toLowerCase()}`}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
              <p className="text-gray-400 text-xs md:text-sm">
                © {new Date().getFullYear()} ATC Tech. All rights reserved.
              </p>
              <div className="flex space-x-4 md:space-x-6">
                <a href="#privacy" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 500 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#0F79B9] to-[#107EC1] flex items-center justify-center hover:shadow-lg hover:shadow-blue-900/5 transition-all"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </div>
  );
}