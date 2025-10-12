'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/component/AppIcon';
import Image from '@/component/AppImage';

type FeaturedProjectProps = {
  project: {
    title: string;
    description: string;
    image: string;
    techStack?: string[];
    liveUrl?: string | null;
    githubUrl?: string;
    [key: string]: any;
  };
  onViewDetails: (project: any) => void;
};

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, onViewDetails }) => {
  return (
    <motion.div
      className="bg-card/50 border border-border rounded-xl p-6 mb-8 group hover:bg-card/80 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Star" size={18} className="text-primary" />
        </div>
        <div>
          <span className="text-sm font-medium text-primary">Featured Project</span>
          <h2 className="text-xl font-bold text-foreground">{project?.title}</h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Project Image */}
        <div className="flex-shrink-0">
          <div className="relative w-64 h-48 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Project Details */}
        <div className="flex-1 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {project?.description}
          </p>

          {/* Technology Stack */}
          <div className="flex flex-wrap gap-2">
            {project?.techStack?.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => onViewDetails(project)}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="Eye" size={16} />
              <span>View Details</span>
            </button>
            
            {project?.liveUrl && (
              <button
                onClick={() => project?.liveUrl && window.open(project.liveUrl, '_blank')}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="ExternalLink" size={16} />
                <span>Live Demo</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;