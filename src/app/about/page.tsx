'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalStory from './components/PersonalStory';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsEvolution from './components/SkillsEvolution';
import LeadershipExperience from './components/LeadershipExperience';
import Header from '@/component/ui/Header';
import Icon from '@/component/AppIcon';
import Sidebar from '@/component/ui/Sidebar';

const AboutPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('story');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showQuickStats, setShowQuickStats] = useState(false);

  const sections = [
    {
      id: 'story',
      title: 'Story',
      icon: 'User',
      color: 'text-blue-400'
    },
    {
      id: 'timeline',
      title: 'Timeline',
      icon: 'Clock',
      color: 'text-green-400'
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: 'TrendingUp',
      color: 'text-purple-400'
    },
    {
      id: 'leadership',
      title: 'Leadership',
      icon: 'Crown',
      color: 'text-orange-400'
    }
  ];

  // Responsive breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Close quick stats when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.quick-stats-panel') && !target.closest('.quick-stats-button')) {
        setShowQuickStats(false);
      }
    };

    if (showQuickStats) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showQuickStats]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleQuickStats = () => {
    setShowQuickStats(!showQuickStats);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'story':
        return <PersonalStory />;
      case 'timeline':
        return <ExperienceTimeline />;
      case 'skills':
        return <SkillsEvolution />;
      case 'leadership':
        return <LeadershipExperience />;
      default:
        return <PersonalStory />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'} w-full`}>
          <div className="flex flex-col h-[calc(100vh-64px)]">
            {/* Minimal Header */}
            <div className="bg-card/50 border-b border-border p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={isMobile ? 16 : 20} color="white" />
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-lg sm:text-xl font-semibold text-foreground truncate">About</h1>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      Anup Solanki • Full Stack Developer
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                    <span className="whitespace-nowrap">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation - Responsive */}
            <div className="bg-card/30 border-b border-border px-4 sm:px-6 py-3">
              <div className="flex overflow-x-auto scrollbar-hide gap-1">
                {sections?.map((section, index) => (
                  <React.Fragment key={section?.id}>
                    <button
                      onClick={() => setActiveSection(section?.id)}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                        activeSection === section?.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon 
                        name={section?.icon} 
                        size={isMobile ? 14 : 16} 
                        className={section?.color} 
                      />
                      <span>{section?.title}</span>
                    </button>
                    {index < sections.length - 1 && !isMobile && (
                      <div className="w-px h-4 bg-border mx-1 my-auto"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile Navigation Indicators */}
              {isMobile && (
                <div className="flex justify-center gap-1 mt-2">
                  {sections.map((section) => (
                    <div
                      key={section.id}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        activeSection === section.id ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto h-full">
              <div className="max-w-full mx-auto h-full">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {/* Content */}
                  <div className="bg-card/50 rounded-xl border h-full border-border p-4 sm:p-6">
                    {renderActiveSection()}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Quick Stats Floating Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            onClick={toggleQuickStats}
            className={`quick-stats-button fixed bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-40 ${
              isMobile 
                ? 'bottom-4 right-4 w-12 h-12' 
                : 'bottom-6 right-6 w-14 h-14'
            }`}
          >
            <Icon name="BarChart3" size={isMobile ? 20 : 24} />
          </motion.button>

          {/* Quick Stats Panel - Animated */}
          <AnimatePresence>
            {showQuickStats && (
              <>
                {/* Backdrop for mobile */}
                {isMobile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setShowQuickStats(false)}
                  />
                )}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`quick-stats-panel fixed bg-card border border-border rounded-lg shadow-lg z-40 ${
                    isMobile 
                      ? 'bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-11/12 max-w-sm' 
                      : 'bottom-20 right-6 w-64'
                  } p-4`}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setShowQuickStats(false)}
                    className="absolute top-3 right-3 p-1 hover:bg-muted rounded transition-colors duration-200"
                  >
                    <Icon name="X" size={14} className="text-muted-foreground" />
                  </button>

                  <div className="flex items-center gap-3 mb-3">
                    <div className={`bg-primary rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isMobile ? 'w-6 h-6' : 'w-8 h-8'
                    }`}>
                      <Icon name="BarChart3" size={isMobile ? 12 : 16} color="white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground truncate">Quick Stats</h3>
                      <p className="text-xs text-muted-foreground">At a glance</p>
                    </div>
                  </div>
                  
                  <div className={`space-y-2 ${isMobile ? 'text-xs' : 'text-xs'}`}>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="font-medium text-foreground">2+ Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Projects</span>
                      <span className="font-medium text-foreground">15+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Technologies</span>
                      <span className="font-medium text-foreground">12+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Interviews</span>
                      <span className="font-medium text-foreground">30+</span>
                    </div>
                  </div>

                  {/* View More Button */}
                  <button className="w-full mt-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-xs font-medium transition-colors duration-200">
                    View Full Stats
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Navigation Helper - Responsive */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className={`fixed bg-primary/10 border border-primary/20 rounded-lg ${
              isMobile 
                ? 'bottom-16 left-4 right-4 mx-auto max-w-xs text-center' 
                : 'bottom-6 left-6'
            } px-3 py-2 z-30`}
          >
            <div className="flex items-center gap-2 text-xs justify-center">
              <Icon name="MousePointer" size={12} className="text-primary flex-shrink-0" />
              <span className="text-foreground">
                {isMobile ? 'Tap sections to navigate' : 'Click sections to navigate'}
              </span>
            </div>
          </motion.div>

          {/* Mobile Bottom Spacer */}
          {isMobile && <div className="h-20"></div>}
        </main>
      </div>
    </div>
  );
};

export default AboutPage;