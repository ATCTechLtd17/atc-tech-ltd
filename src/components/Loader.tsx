import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="w-12 h-12 border-t-4 border-yellow-500 rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Loader;
