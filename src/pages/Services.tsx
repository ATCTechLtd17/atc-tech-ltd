/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import { Layers, Shield, Brush, Settings, Briefcase, Database, Cloud, Brain, Palette, Smartphone, Globe,Lock  } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const services = [
    {
      icon: <Layers className="h-6 w-6 text-yellow-400" />,
      title: "Software Development",
      description: "Full-cycle development solutions focused on your business objectives and long-term growth.",
      preview: "Enterprise-grade software development with emphasis on:\n\n- Scalable Architecture\n- Clean Code Practices\n- DevOps Integration\n- Cross-platform Compatibility\n- Future-proof Solutions",
      color: "bg-yellow-400/10",
      image: "https://i.ibb.co.com/pjDr4fRc/developing-programmer-development-website-design-coding-technologies.jpg"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: "Web Development",
      description: "Modern web solutions that drive engagement and support business transformation.",
      preview: "Comprehensive web development services including:\n\n- PWA Development\n- E-commerce Solutions\n- CMS Integration\n- Web Accessibility\n- Performance Optimization",
      color: "bg-blue-400/10",
      image: "https://i.ibb.co.com/vCbxfgYd/8884276.jpg"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-400" />,
      title: "App Development",
      description: "Native and cross-platform mobile solutions for seamless user experiences.",
      preview: "End-to-end mobile development covering:\n\n- iOS/Android Development\n- Cross-platform Frameworks\n- App Store Optimization\n- Push Notifications\n- Offline Functionality",
      color: "bg-purple-400/10",
      image: "https://i.ibb.co.com/fV3H6Grp/90.jpg"
    },
    {
      icon: <Palette className="h-6 w-6 text-pink-400" />,
      title: "UI/UX Design",
      description: "Human-centered design approach for intuitive digital experiences.",
      preview: "Complete design services featuring:\n\n- User Journey Mapping\n- Interactive Prototyping\n- Design Systems\n- Usability Testing\n- Accessibility Compliance",
      color: "bg-pink-400/10",
      image: "https://i.ibb.co.com/3yKpQGxW/5741225.jpg"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-400" />,
      title: "SQA & Testing",
      description: "Comprehensive quality assurance for reliable, secure solutions.",
      preview: "Quality engineering services including:\n\n- Test Automation\n- Performance Testing\n- Security Audits\n- CI/CD Pipeline Integration\n- Compliance Testing",
      color: "bg-green-400/10",
      image: "https://i.ibb.co.com/q3cv65Lt/142z-24-0105-code-testing-06-sim.jpg"
    },
    {
      icon: <Brain className="h-6 w-6 text-orange-400" />,
      title: "Artificial Intelligence",
      description: "Transformative AI solutions for intelligent business operations.",
      preview: "AI/ML implementation services:\n\n- Predictive Analytics\n- Natural Language Processing\n- Computer Vision\n- Recommendation Systems\n- Process Automation",
      color: "bg-orange-400/10",
      image: "https://i.ibb.co.com/gMh9VRpS/852.jpg"
    },
    {
      icon: <Cloud className="h-6 w-6 text-sky-400" />,
      title: "Cloud Solution",
      description: "Scalable cloud infrastructure for modern business needs.",
      preview: "Cloud services offering:\n\n- Multi-cloud Strategy\n- Serverless Architecture\n- Cloud Migration\n- Cost Optimization\n- Disaster Recovery",
      color: "bg-sky-400/10",
      image: "https://i.ibb.co.com/rPjLnVV/saas-concept-collage.jpg"
    },
    {
        //@ts-ignore
      icon: <Lock className="h-6 w-6 text-red-400" />,
      title: "Cyber Security",
      description: "Proactive protection for your digital assets and infrastructure.",
      preview: "Security solutions including:\n\n- Threat Detection\n- Vulnerability Assessment\n- SOC Services\n- Encryption Management\n- Security Training",
      color: "bg-red-400/10",
      image: "https://i.ibb.co.com/LhXJLd5x/security-system-locks-data-computer-safety-generated-by-ai.jpg"
    },
    {
      icon: <Database className="h-6 w-6 text-indigo-400" />,
      title: "Data Analytics",
      description: "Actionable insights through comprehensive data analysis.",
      preview: "Data management services:\n\n- BI Solutions\n- Big Data Processing\n- Data Warehousing\n- Dashboard Development\n- Predictive Modeling",
      color: "bg-indigo-400/10",
      image: "https://i.ibb.co.com/hjHZ5cz/business-data-analysis.jpg"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-teal-400" />,
      title: "Consulting Services",
      description: "Strategic guidance for digital transformation initiatives.",
      preview: "Advisory services covering:\n\n- Technology Assessment\n- Digital Strategy\n- Process Optimization\n- Change Management\n- ROI Analysis",
      color: "bg-teal-400/10",
      image: "https://i.ibb.co.com/dwN3v9Vr/executive-manager-woman-explaining-management-statistics-working-company-strategy-overtime-office-me.jpg"
    },
    {
      icon: <Settings className="h-6 w-6 text-cyan-400" />,
      title: "Dev Ops",
      description: "Streamlined development workflows for continuous delivery.",
      preview: "DevOps implementation including:\n\n- Infrastructure as Code\n- Containerization\n- Monitoring & Logging\n- Release Management\n- Cloud Orchestration",
      color: "bg-cyan-400/10",
      image: "https://i.ibb.co.com/67dh1qPz/7076118.jpg"
    },
    {
      icon: <Brush className="h-6 w-6 text-amber-400" />,
      title: "Graphic Design",
      description: "Visual storytelling that strengthens brand identity.",
      preview: "Creative services offering:\n\n- Brand Identity Design\n- Marketing Collateral\n- Infographics\n- Digital Illustration\n- Motion Graphics",
      color: "bg-amber-400/10",
      image: "https://i.ibb.co.com/8LQkqTc2/2564.jpg"
    }
  ];
  
//@ts-ignore
const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
    >
      <motion.div
        layout
        className="p-6"
     
      >
        <div className="flex items-center justify-between"   >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          </div>
          {/* <motion.button 
            className="px-4 py-2 bg-yellow-400 text-black rounded-full font-medium group flex items-center gap-2 hover:bg-yellow-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Service Details
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button> */}
        </div>
        
        <p className="mt-4 text-gray-400">
          {service.description}
        </p>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <motion.img
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    src={service.image}
                    alt="Service preview"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <motion.div 
                  className="text-gray-400"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {service.preview.split('\n\n').map((paragraph, i) => (
                    <div key={i} className="mb-4">
                      {paragraph.startsWith('-') ? (
                        <ul className="list-disc pl-4 space-y-2">
                          {paragraph.split('\n').map((item, j) => (
                            <motion.li 
                              key={j}
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 + (j * 0.1) }}
                            >
                              {item.replace('-', '').trim()}
                            </motion.li>
                          ))}
                        </ul>
                      ) : (
                        <p>{paragraph}</p>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-black"  id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-5xl font-bold text-white">
            Services
          </h2>
          <p className="text-2xl text-gray-400">
            We transform<br />your product into life
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;