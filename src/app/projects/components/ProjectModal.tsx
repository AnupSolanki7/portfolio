import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '@/component/AppImage';
import Icon from '@/component/AppIcon';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const handleImageNavigation = (direction: string) => {
    if (direction === 'next') {
      setActiveImageIndex((prev) => 
        prev === project?.gallery?.length - 1 ? 0 : prev + 1
      );
    } else {
      setActiveImageIndex((prev) => 
        prev === 0 ? project?.gallery?.length - 1 : prev - 1
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-card border border-border rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-foreground">{project?.title}</h2>
                <p className="text-sm text-muted-foreground">{project?.category} • {project?.year}</p>
              </div>
              
              <div className="flex items-center gap-2">
                {project?.liveUrl && (
                  <button
                    onClick={() => window.open(project?.liveUrl, '_blank')}
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Icon name="ExternalLink" size={16} />
                    <span>Live Demo</span>
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col max-h-[calc(90vh-80px)]">
              {/* Image Gallery */}
              <div className="relative h-64">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                {project?.gallery?.length > 1 && (
                  <>
                    <button
                      onClick={() => handleImageNavigation('prev')}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Icon name="ChevronLeft" size={16} color="white" />
                    </button>
                    <button
                      onClick={() => handleImageNavigation('next')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Icon name="ChevronRight" size={16} color="white" />
                    </button>
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project?.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.techStack?.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {project?.features && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project?.features?.slice(0, 4).map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {project?.achievements && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Achievements</h3>
                    <div className="space-y-2">
                      {project?.achievements?.slice(0, 3).map((achievement: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Award" size={14} className="text-warning flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonials */}
                {project?.testimonials && project.testimonials.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Feedback</h3>
                    <div className="space-y-3">
                      {project?.testimonials?.slice(0, 2).map((testimonial: any, index: number) => (
                        <div key={index} className="bg-muted/30 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground italic mb-2">
                            "{testimonial?.feedback}"
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                              <Icon name="User" size={12} className="text-primary" />
                            </div>
                            <div className="text-xs">
                              <div className="text-foreground">{testimonial?.name}</div>
                              <div className="text-muted-foreground">{testimonial?.role}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;