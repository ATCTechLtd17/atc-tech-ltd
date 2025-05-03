import { motion } from 'framer-motion';

interface LoadingProps {
  fullScreen?: boolean;
  message?: string;
}

export default function Loading({ fullScreen = false, message = 'Loading...' }: LoadingProps) {
  const containerClasses = fullScreen 
    ? "fixed inset-0 flex items-center justify-center bg-black/80 z-50" 
    : "flex items-center justify-center py-8";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={containerClasses}
    >
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 relative">
          {/* Spinning outer ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-t-2 border-blue-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Counter-spinning inner ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-r-2 border-purple-500"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Pulsing center */}
          <motion.div 
            className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        {message && (
          <motion.p 
            className="mt-4 text-xl font-light"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {message}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}