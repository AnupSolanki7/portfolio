import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/component/ui/Button';
import Image from '@/component/AppImage';
import Icon from '@/component/AppIcon';

interface ProjectModalProps {
  project: any; // Replace 'any' with a more specific type if available
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImageIndex, setActiveImageIndex] = useState<any>(0);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'technical', label: 'Technical Details', icon: 'Code' },
    { id: 'impact', label: 'Impact & Results', icon: 'TrendingUp' },
    { id: 'testimonials', label: 'Testimonials', icon: 'MessageSquare' }
  ];

  const handleImageNavigation = (direction: string) => {
    if (direction === 'next') {
      setActiveImageIndex((prev: number) => 
        prev === project?.gallery?.length - 1 ? 0 : prev + 1
      );
    } else {
      setActiveImageIndex((prev: number) => 
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
            className="relative bg-card border border-border rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="FolderOpen" size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{project?.title}</h2>
                  <p className="text-sm text-muted-foreground">{project?.category} • {project?.year}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {project?.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    onClick={() => window.open(project?.liveUrl, '_blank')}
                  >
                    Live Demo
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Github"
                  iconPosition="left"
                  onClick={() => window.open(project?.githubUrl, '_blank')}
                >
                  Code
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="X"
                  onClick={onClose}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex h-[calc(90vh-120px)]">
              {/* Left Panel - Image Gallery */}
              <div className="w-1/2 relative">
                <div className="h-full relative overflow-hidden">
                  <Image
                    src={project?.gallery?.[activeImageIndex]}
                    alt={`${project?.title} screenshot ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Navigation */}
                  {project?.gallery?.length > 1 && (
                    <>
                      <button
                        onClick={() => handleImageNavigation('prev')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <Icon name="ChevronLeft" size={20} color="white" />
                      </button>
                      <button
                        onClick={() => handleImageNavigation('next')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <Icon name="ChevronRight" size={20} color="white" />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {project?.gallery?.map((_: any, index: number) => (
                          <button
                            key={index}
                            onClick={() => setActiveImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                              index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Panel - Content */}
              <div className="w-1/2 flex flex-col">
                {/* Tabs */}
                <div className="flex border-b border-border">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        activeTab === tab?.id
                          ? 'text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon name={tab?.icon} size={14} />
                      <span className="hidden lg:inline">{tab?.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                        <p className="text-muted-foreground leading-relaxed">{project?.fullDescription}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project?.features?.map((feature: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project?.techStack?.map((tech: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'technical' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Technical Implementation</h3>
                        <div className="space-y-4">
                          {project?.technicalDetails?.map((detail: { title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; code: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                            <div key={index} className="border border-border rounded-lg p-4">
                              <h4 className="text-sm font-medium text-foreground mb-2">{detail?.title}</h4>
                              <p className="text-sm text-muted-foreground mb-3">{detail?.description}</p>
                              {detail?.code && (
                                <div className="bg-muted rounded-md p-3 font-mono text-xs overflow-x-auto">
                                  <pre className="text-foreground">{detail?.code}</pre>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'impact' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Business Impact</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {Object.entries(project?.detailedMetrics)?.map(([key, value]:any) => (
                            <div key={key} className="bg-muted/30 rounded-lg p-4 text-center">
                              <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">{key?.replace(/([A-Z])/g, ' $1')}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {project?.achievements?.map((achievement: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Icon name="Trophy" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'testimonials' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Client Feedback</h3>
                      {project?.testimonials?.map((testimonial: { avatar: any; name: any; role: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; feedback: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; rating: number; }, index: React.Key | null | undefined) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <Image
                              src={testimonial?.avatar}
                              alt={testimonial?.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <div className="text-sm font-medium text-foreground">{testimonial?.name}</div>
                              <div className="text-xs text-muted-foreground">{testimonial?.role}</div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground italic">"{testimonial?.feedback}"</p>
                          <div className="flex items-center space-x-1 mt-2">
                            {[...Array(5)]?.map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={12}
                                className={i < testimonial?.rating ? 'text-warning' : 'text-muted'}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;