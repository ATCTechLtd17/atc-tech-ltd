/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import LogoSlider from '../components/LogoSlider';
import Services from './Services';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
export default function Home(): JSX.Element {


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

  return (
    <div className="relative bg-black overflow-x-hidden" ref={containerRef}>
   
      {/* Hero Section */}
<section id="home" className="relative h-screen md:h-[90vh] lg:h-screen w-full flex items-center justify-center">
  <div className="absolute inset-0 z-0">
   
    <div className="w-full h-full">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://res.cloudinary.com/dufs2ywc7/video/upload/v1742199162/FDownloader.Net_AQMYQvhY8SHti7kBmuXaKQupVw2BJGGUGKFb0YRSd76XN45LtIMeQSa613Uxo-yUEBkIvNmg1mro5krxJg5DaKR-_720p__HD_ynxk1z.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
     
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
    
    <p className="text-base sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
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

     
      <div id="services">
        <Services />
      </div>

     
      
      <Projects/>
    
      <Contact/>

    
      
    </div>
  );
}