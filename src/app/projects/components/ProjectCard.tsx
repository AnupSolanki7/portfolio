import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '@/component/AppImage';
import Icon from '@/component/AppIcon';

type Project = {
  image: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveUrl?: null | string;
  year?: string | number;
};

type ProjectCardProps = {
  project: Project;
  onViewDetails: (project: any) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-card/50 border border-border rounded-xl overflow-hidden group hover:bg-card/80 transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* View Overlay */}
        <motion.button
          onClick={() => onViewDetails(project)}
          className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 text-white">
            <Icon name="Eye" size={18} />
            <span className="font-medium">View Project</span>
          </div>
        </motion.button>
      </div>

      {/* Project Content */}
      <div className="p-5 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project?.title}
            </h3>
            {project?.liveUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  project?.liveUrl && window.open(project.liveUrl, '_blank');
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 hover:bg-primary/10 rounded"
              >
                <Icon name="ExternalLink" size={16} className="text-primary" />
              </button>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{project?.category}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1">
          {project?.techStack?.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
          {project?.techStack?.length > 3 && (
            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
              +{project?.techStack?.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;