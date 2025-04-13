/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { Brain, Code, Database, Users, Server, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface StatCounter {
  value: number;
  label: string;
  icon: React.FC<{ className?: string }>;
  description: string;
  prefix?: string;
  suffix?: string;
}

const serviceStats: StatCounter[] = [
  {
    value: 50,
    label: "Software Projects",
    icon: Brain,
    description: "Enterprise-scale Softwares solutions delivered to clients worldwide",
    suffix: "+"
  },
  {
    value: 85000,
    label: "Lines of Code",
    icon: Code,
    description: "Clean, efficient code written for our custom applications",
    suffix: "+"
  },
  {
    value: 47,
    label: "Database Systems",
    icon: Database,
    description: "Robust database architectures designed and implemented",
    suffix: ""
  },
  {
    value: 99.9,
    label: "Uptime",
    icon: Server,
    description: "Guaranteed reliability for all our hosted solutions",
    prefix: "",
    suffix: "%"
  },
  {
    value: 250,
    label: "Happy Clients",
    icon: Users,
    description: "Businesses and organizations successfully served",
    suffix: "+"
  },
  {
    value: 32,
    label: "Countries Reached",
    icon: Globe,
    description: "Global reach across continents and industries",
    suffix: ""
  }
];

const CounterAnimation = ({ stat }: { stat: StatCounter }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const countStarted = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countStarted.current) {
          countStarted.current = true;
          
          const duration = 2000; // 2 seconds
          const startTime = performance.now();
          const startValue = 0;
          const endValue = stat.value;
          
          const updateCount = (timestamp: number) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smoother animation
            const easeOutQuad = (t: number) => t * (2 - t);
            const easedProgress = easeOutQuad(progress);
            
            // For decimal values like 99.9
            const isDecimal = endValue % 1 !== 0;
            const currentValue = startValue + (endValue - startValue) * easedProgress;
            
            setCount(isDecimal ? parseFloat(currentValue.toFixed(1)) : Math.floor(currentValue));
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          
          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [stat.value]);
  
  return (
    <div className="text-4xl md:text-5xl font-bold" ref={counterRef}>
      {stat.prefix || ""}{count}{stat.suffix || ""}
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <section className="py-12 md:py-20 relative" id="impact">
        <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-[#0F79B9] to-[#107EC1] bg-clip-text text-transparent">
            Our Impact By The Numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {serviceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F79B9]/20 to-[#107EC1]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:translate-y-1">
                  <stat.icon className="w-10 h-10 text-[#0F79B9] mb-4" />
                  
                  <div className="flex items-center justify-center">
                    <CounterAnimation stat={stat} />
                  </div>
                  
                  <h3 className="text-xl font-bold my-2 text-white">{stat.label}</h3>
                  <p className="text-[#A0A0A0] text-sm">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
           
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;