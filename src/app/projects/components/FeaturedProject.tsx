import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/component/AppIcon';
import Image from '@/component/AppImage';
import Button from '@/component/ui/Button';

type FeaturedProjectProps = {
  project: {
    title: string;
    description: string;
    gallery: string[];
    metrics?: {
      performance?: string | number;
      users?: string | number;
      impact?: string | number;
    };
    techStack?: string[];
    features?: string[];
    liveUrl?: string | null;
    githubUrl?: string;
    [key: string]: any;
  };
  onViewDetails: (project: any) => void;
};

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, onViewDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg overflow-hidden mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Star" size={16} color="white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Featured Project</h2>
              <p className="text-sm text-muted-foreground">Showcasing exceptional work</p>
            </div>
          </div>
          
          <div className="status-indicator available">
            <div className="w-2 h-2 bg-success rounded-full mr-1"></div>
            <span>Live & Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Image Gallery */}
          <div className="relative">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src={project?.gallery?.[currentImageIndex]}
                alt={`${project?.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {project?.gallery?.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon name="ChevronLeft" size={20} color="white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon name="ChevronRight" size={20} color="white" />
                  </button>
                </>
              )}
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {project?.gallery?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{project?.title}</h3>
              <p className="text-muted-foreground mb-4">{project?.description}</p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-card rounded-lg border border-border">
                  <div className="text-lg font-bold text-primary">{project?.metrics?.performance}</div>
                  <div className="text-xs text-muted-foreground">Performance</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border border-border">
                  <div className="text-lg font-bold text-success">{project?.metrics?.users}</div>
                  <div className="text-xs text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border border-border">
                  <div className="text-lg font-bold text-accent">{project?.metrics?.impact}</div>
                  <div className="text-xs text-muted-foreground">Business Impact</div>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project?.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md font-mono border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {project?.features?.slice(0, 4)?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant="default"
                iconName="Eye"
                iconPosition="left"
                onClick={() => onViewDetails(project)}
              >
                View Details
              </Button>
              
              {project?.liveUrl && (
                <Button
                  variant="outline"
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() => project?.liveUrl && window.open(project.liveUrl, '_blank')}
                >
                  Live Demo
                </Button>
              )}
              
              <Button
                variant="outline"
                iconName="Github"
                iconPosition="left"
                onClick={() => window.open(project?.githubUrl, '_blank')}
              >
                Source Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;