import { motion } from "framer-motion";
import { Globe, X } from "lucide-react";
import { useEffect } from "react";

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

interface ProjectDetailModalProps {
  project: ProjectItem;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    // Save current scroll position
    const scrollY = window.scrollY;
    
    // Prevent body scrolling
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    
    // Restore scrolling when modal closes
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-modal="true" role="dialog">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal container */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <motion.div 
          className="relative mx-auto w-full max-w-4xl rounded-2xl bg-gradient-to-b from-[#0F1A2F] to-[#0A1120] shadow-xl border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button - fixed position at top right */}
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white hover:bg-white/20"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="p-5 sm:p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center pb-5 sm:pb-6">
              <project.icon className="mr-3 h-8 w-8 text-[#0F79B9] sm:h-10 sm:w-10 sm:mr-4" />
              <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl pr-10">
                {project.title}
              </h2>
            </div>
            
            {/* Content */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Left column */}
              <div>
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-56 w-full object-cover sm:h-64"
                  />
                </div>
                
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">Project Overview</h3>
                  <p className="text-sm text-[#A0A0A0] sm:text-base">
                    {project.longDescription || project.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">Technology Stack</h3>
                  <p className="text-sm text-[#A0A0A0] sm:text-base">{project.techStack}</p>
                </div>
                
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#0F79B9] to-[#107EC1] py-3 px-6 font-medium text-white transition-all hover:shadow-lg hover:shadow-[#0F79B9]/30"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Visit Live Project
                </a>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-[#A0A0A0] sm:text-base">
                        <div className="mr-2 mt-1 text-[#0F79B9]">•</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {project.challenges && project.solutions && (
                  <>
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">Challenges</h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, i) => (
                          <li key={`challenge-${i}`} className="flex items-start text-sm text-[#A0A0A0] sm:text-base">
                            <div className="mr-2 mt-1 text-[#0F79B9]">•</div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">Our Solutions</h3>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, i) => (
                          <li key={`solution-${i}`} className="flex items-start text-sm text-[#A0A0A0] sm:text-base">
                            <div className="mr-2 mt-1 text-[#0F79B9]">•</div>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
                
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;