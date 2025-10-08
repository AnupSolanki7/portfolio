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
      title: 'Personal Story',
      icon: 'User',
      description: 'Background and philosophy'
    },
    {
      id: 'timeline',
      title: 'Experience Timeline',
      icon: 'Clock',
      description: 'Professional journey'
    },
    {
      id: 'skills',
      title: 'Skills Evolution',
      icon: 'TrendingUp',
      description: 'Technical growth'
    },
    {
      id: 'leadership',
      title: 'Leadership',
      icon: 'Crown',
      description: 'Mentoring & interviews'
    }
  ];

  useEffect(() => {
    // Simulate loading time for realistic experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

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
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading about.js...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-60'}`}>
          <div className="flex h-[calc(100vh-84px)]">
            {/* Code Editor Area */}
            <div className="flex-1 flex flex-col">
              {/* Editor Header */}
              <div className="bg-card border-b border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Icon name="FileText" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">about.js</span>
                      <span className="text-xs text-muted-foreground">• Personal & Professional Story</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Icon name="Users" size={12} />
                      <span>Anup Solanki</span>
                    </div>
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Section Navigation */}
              <div className="bg-card border-b border-border p-4">
                <div className="flex flex-wrap gap-2">
                  {sections?.map((section) => (
                    <button
                      key={section?.id}
                      onClick={() => setActiveSection(section?.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === section?.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-border'
                      }`}
                    >
                      <Icon name={section?.icon} size={14} />
                      <span className="font-medium">{section?.title}</span>
                      <span className="text-xs opacity-75 hidden sm:inline">
                        {section?.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 overflow-y-auto">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  {/* Code Comment Header */}
                  <div className="mb-6 font-mono text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-success">/**</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-success"> * @file</span>
                      <span className="text-foreground">about.js</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-success"> * @author</span>
                      <span className="text-foreground">Anup Solanki</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-success"> * @description</span>
                      <span className="text-foreground">Personal story, experience timeline, and professional philosophy</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-success"> * @section</span>
                      <span className="text-primary">{sections?.find(s => s?.id === activeSection)?.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-success"> */</span>
                    </div>
                  </div>

                  {/* Dynamic Content */}
                  {renderActiveSection()}
                </motion.div>
              </div>
            </div>

            {/* Mini Preview Panel */}
            <div className="hidden xl:block w-80 bg-card border-l border-border">
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Icon name="Eye" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Quick Preview</span>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Current Section Info */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={sections?.find(s => s?.id === activeSection)?.icon as string} size={14} className="text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      {sections?.find(s => s?.id === activeSection)?.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {sections?.find(s => s?.id === activeSection)?.description}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Quick Stats</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="text-foreground">2+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interviews:</span>
                      <span className="text-foreground">30+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Projects Led:</span>
                      <span className="text-foreground">5+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Team Size:</span>
                      <span className="text-foreground">8+ Members</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Helper */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Info" size={14} className="text-primary" />
                    <span className="text-sm font-medium text-primary">Navigation Tip</span>
                  </div>
                  <p className="text-xs text-foreground">
                    Use the section tabs above to explore different aspects of my professional journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;