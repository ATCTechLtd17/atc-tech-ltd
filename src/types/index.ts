export interface ProjectItem {
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