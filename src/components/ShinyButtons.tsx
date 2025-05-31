/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';

const ShinyButton = ({ href, gradient, children }:any) => {
  return (
    <motion.a
      href={href}
      target="_blank"                   /* Opens in a new tab */
      rel="noopener noreferrer"         /* Prevents security vulnerabilities */
      className={`
        relative px-2 py-1 rounded-2xl shadow-lg 
        overflow-hidden group
        ${gradient} text-white font-semibold text-sm
      `}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 0%, transparent 0%)"
        }}
        whileHover={{
          background: [
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 0%, transparent 0%)",
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0) 100%, transparent 100%)"
          ]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
};

const ShinyButtons = () => {
  return (
    <div className="flex gap-4">
      <ShinyButton 
        href="#infinity-hub" 
        gradient="bg-gradient-to-r from-blue-500 to-sky-600"
      >
        Infinity Hub
      </ShinyButton>
      
      <ShinyButton 
        href="https://atcacademy.online/" 
        gradient="bg-gradient-to-r from-teal-500 to-sky-600"
      >
        ATC Soft Academy
      </ShinyButton>
    </div>
  );
};

export default ShinyButtons;
