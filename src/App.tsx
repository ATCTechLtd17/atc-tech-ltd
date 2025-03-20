/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import lenis from "./smoothScroll";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";

export const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Initialize smooth scroll
    //@ts-ignore
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Simulate initial loading or handle actual asset loading
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1800); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {initialLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
        >
          <div className="flex flex-col items-center">
          <Loading/>
            
          
          </div>
        </motion.div>
      ) : (
        <RouterProvider router={router} />
      )}
    </AnimatePresence>
  );
};