/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Users, Layers, Shield, BarChart } from "lucide-react";
import { useState } from "react";
import ProjectDetailModal from "../components/ProjectModal";


interface ProjectItem {
  title: string;
  description: string;
  features: string[];
  icon: React.FC<{ className?: string }>;
  liveLink: string;
  techStack: string;
  image: string;
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
}

const projectsList: ProjectItem[] = [
  {
    title: "CPC - Cloth Processing Center",
    description: "A comprehensive procurement and contract management system designed for organizations to streamline their purchasing processes.",
    features: [
      "Supplier management and evaluation",
      "Contract lifecycle tracking",
      "Budget monitoring and reporting",
      "Document management system",
      "Approval workflows and automation",
      "Procurement analytics dashboard"
    ],
    icon: Layers,
    liveLink: "https://cpc.atctechltd.com",
    techStack: "React, Node.js, PostgreSQL, Docker",
    image: "https://res.cloudinary.com/darsho77o/image/upload/v1745233247/Screenshot_2025-04-21_170021_id587l.png",
    longDescription: "The CPC system revolutionizes procurement processes by digitizing and automating workflows that were previously manual. It provides end-to-end visibility into the procurement lifecycle, from requisition to payment, while ensuring compliance with organizational policies and government regulations.",
    challenges: [
      "Complex approval hierarchies across multiple departments",
      "Integration with legacy financial systems",
      "Real-time budget tracking requirements",
      "Document version control and audit trails"
    ],
    solutions: [
      "Implemented customizable workflow engine",
      "Developed secure API integrations with existing ERP",
      "Created real-time budget dashboards with alerts",
      "Built document management with version history"
    ]
  },
  {
    title: "InfinityHUB - Ticketing Platform",
    description: "An online ticketing system for events and transportation, providing seamless booking experiences and management tools.",
    features: [
      "Event and seat management",
      "Secure online payment processing",
      "Mobile ticket generation",
      "Real-time availability tracking",
      "Customer management system",
      "Analytics and reporting dashboard"
    ],
    icon: ShoppingCart,
    liveLink: "https://infinityhubbd.online",
    techStack: "React, Tailwind, Redux, RTK Query, PosgreSQL, Prisma ",
    image: "https://res.cloudinary.com/darsho77o/image/upload/v1745232928/Screenshot_2025-04-21_165424_mwly7o.png",
    longDescription: "Infinity UB is a comprehensive ticketing solution serving both event organizers and transportation providers. The platform handles high-volume booking periods with ease while providing organizers with powerful tools to manage venues, seating, and customer communications.",
    challenges: [
      "Handling concurrent bookings during peak sales",
      "Preventing duplicate bookings",
      "Mobile-friendly ticket display",
      "Integrating multiple payment gateways"
    ],
    solutions: [
      "Implemented queue-based booking system",
      "Developed real-time seat locking mechanism",
      "Created responsive ticket templates",
      "Built modular payment gateway integration"
    ]
  }
];
 
const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  return (
    <div>
      <section className="py-12 md:py-20 relative" id="projects">
        <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-[#0F79B9] to-[#107EC1] bg-clip-text text-transparent">
            Our Featured Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {projectsList.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative group h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F79B9]/20 to-[#107EC1]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full flex flex-col transition-all duration-300 group-hover:translate-y-1">
                  {/* Project image */}
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <project.icon className="w-8 h-8 text-[#0F79B9] mr-3" />
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-[#A0A0A0] text-lg mb-6">{project.description}</p>
                  
                  {/* Project Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-y-2">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="text-[#A0A0A0] flex items-start">
                          <div className="text-[#0F79B9] mr-2 mt-1">•</div>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 4 && (
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="text-[#0F79B9] hover:text-[#0F79B9]/80 text-sm mt-2 text-left"
                        >
                          +{project.features.length - 4} more features...
                        </button>
                      )}
                    </ul>
                  </div>
                  
                  {/* Technology Stack */}
                  <div className="text-[#A0A0A0] mt-auto mb-6 flex items-center">
                    <Shield className="w-5 h-5 text-[#0F79B9] mr-2" />
                    <span className="font-semibold text-white mr-2">Tech Stack:</span> {project.techStack}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 px-4 text-center font-medium rounded-lg bg-gradient-to-r from-[#0F79B9] to-[#107EC1] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#0F79B9]/30"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </div>
                    </motion.a>
                    
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="block w-full py-3 px-4 text-center font-medium rounded-lg bg-white/10 text-white transition-all duration-300 hover:bg-white/20"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          
          
          {/* Call to Action */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Ready to build your next digital solution?</h3>
            <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
              Our team specializes in developing custom software tailored to your business needs. 
              Let's transform your vision into reality.
            </p>
            <a
              href="/contact"
              className="inline-block py-4 px-8 rounded-full bg-gradient-to-r from-[#0F79B9] to-[#107EC1] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#0F79B9]/30"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Render Project Detail Modal as a separate component */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;