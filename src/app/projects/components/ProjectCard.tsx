import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '@/component/AppImage';
import Button from '@/component/ui/Button';
import Icon from '@/component/AppIcon';

type Project = {
  image: string;
  title: string;
  category: string;
  status: string;
  featured?: boolean;
  description: string;
  techStack: string[];
  metrics?: {
    performance?: string | number;
    users?: string | number;
    impact?: string | number;
  };
  liveUrl?: null | string;
  year?: string | number;
};

type ProjectCardProps = {
  project: Project;
  onViewDetails: (project: any) => void;
  onViewLive: (project: any) => void;
  onViewCode: (project: any) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails, onViewLive, onViewCode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={`status-indicator ${project?.status === 'live' ? 'available' : project?.status === 'development' ? 'busy' : 'offline'}`}>
            <div className={`w-2 h-2 rounded-full mr-1 ${
              project?.status === 'live' ? 'bg-success' : 
              project?.status === 'development' ? 'bg-warning' : 'bg-muted'
            }`}></div>
            <span className="text-xs capitalize">{project?.status}</span>
          </div>
        </div>

        {/* Quick Actions Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {project?.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              iconPosition="left"
              onClick={() => onViewLive(project)}
              className="bg-background/90 backdrop-blur-sm"
            >
              Live Demo
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            iconName="Github"
            iconPosition="left"
            onClick={() => onViewCode(project)}
            className="bg-background/90 backdrop-blur-sm"
          >
            Code
          </Button>
        </motion.div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{project?.title}</h3>
            <p className="text-sm text-muted-foreground">{project?.category}</p>
          </div>
          <div className="flex items-center space-x-1">
            {project?.featured && (
              <div className="w-2 h-2 bg-accent rounded-full" title="Featured Project" />
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.techStack?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-mono"
            >
              {tech}
            </span>
          ))}
          {project?.techStack?.length > 4 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{project?.techStack?.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-muted/30 rounded-md">
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">{project?.metrics?.performance}</div>
            <div className="text-xs text-muted-foreground">Performance</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">{project?.metrics?.users}</div>
            <div className="text-xs text-muted-foreground">Users</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">{project?.metrics?.impact}</div>
            <div className="text-xs text-muted-foreground">Impact</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onViewDetails(project)}
            className="text-primary hover:text-primary"
          >
            View Details
          </Button>
          
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Icon name="Calendar" size={12} />
            <span>{project?.year}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;