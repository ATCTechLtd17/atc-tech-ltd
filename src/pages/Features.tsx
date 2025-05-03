
import { Code, Globe, Zap, Layout, Smartphone, Cog } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces using modern frameworks like React, Vue, and Angular.",
  },
  {
    icon: <Cog className="h-8 w-8" />,
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs using Node.js, Python, or other backend technologies.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Full-Stack Solutions",
    description:
      "End-to-end web application development, seamlessly integrating frontend and backend technologies.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description:
      "Enhancing web application speed and efficiency through code optimization and best practices.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Responsive Web Design",
    description:
      "Crafting websites that provide optimal viewing experience across all devices and screen sizes.",
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces for enhanced user experience.",
  },
]

const FeatureCard = ({ feature, index }: { feature: (typeof features)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: index * 0.8 }}
      
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      {/* Glowing background animation */}
      <motion.div
        className="absolute -inset-0.5 rounded-xl opacity-65 group-hover:opacity-100 blur"
        animate={{
          background: [
          
            "linear-gradient(90deg, rgba(6,182,212,1) 0%, rgba(59,130,246,1) 100%)",
          
          
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,  // Increased from 0.9
          ease: "linear"
        }}
      />
      <div className="relative bg-gray-900 p-6 rounded-xl border border-gray-800 overflow-hidden">
        {/* Sliding light overlay */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
            mixBlendMode: "screen",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: 4,  // Increased from 2
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
            {feature.icon}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
          <p className="mt-2 text-gray-400">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Features = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  return (
    <section ref={ref} className="py-20 bg-gray-900 relative overflow-hidden" id="services">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#0F79B9] to-[#107EC1]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
         
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className=" absolute rounded-full bg-blue-300 opacity-1"
            style={{
              width: Math.random() * 10 + 50,
              height: Math.random() * 10 + 50,
              left: `${Math.random() * 200}%`,
              top: `${Math.random() * 200}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 30,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center" style={{ opacity, y }}>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Comprehensive Web Development Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Empowering businesses with cutting-edge web technologies
          </p>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features;
