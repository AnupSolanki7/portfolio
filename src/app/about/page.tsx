'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Icon name="User" size={24} color="white" />
          </div>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            About Me
          </h2>
          <p className="text-muted-foreground">Loading personal story...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'}`}>
          <div className="flex flex-col h-[calc(100vh-64px)]">
            {/* Minimal Header */}
            <div className="bg-card/50 border-b border-border p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="User" size={20} color="white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-foreground">About</h1>
                    <p className="text-sm text-muted-foreground">Anup Solanki • Full Stack Developer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal Navigation */}
            <div className="bg-card/30 border-b border-border px-6 py-4">
              <div className="flex items-center gap-1">
                {sections?.map((section, index) => (
                  <React.Fragment key={section?.id}>
                    <button
                      onClick={() => setActiveSection(section?.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === section?.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={section?.icon} size={16} className={section?.color} />
                      <span>{section?.title}</span>
                    </button>
                    {index < sections.length - 1 && (
                      <div className="w-px h-4 bg-border mx-1"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto h-full">
              <div className="max-w-full mx-auto h-full">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Content */}
                  <div className="bg-card/50 rounded-xl border h-full border-border p-6">
                    {renderActiveSection()}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-6 right-6 bg-card border border-border rounded-lg p-4 shadow-lg w-64"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Code" size={16} color="white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">Quick Stats</h3>
                <p className="text-xs text-muted-foreground">At a glance</p>
              </div>
            </div>
            
            <div className="space-y-2 text-xs">
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
            </div>
          </motion.div>

          {/* Navigation Helper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 left-6 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2"
          >
            <div className="flex items-center gap-2 text-xs">
              <Icon name="MousePointer" size={12} className="text-primary" />
              <span className="text-foreground">Click sections to navigate</span>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;