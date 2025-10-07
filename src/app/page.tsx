'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/component/ui/Header';
import Icon from '@/component/AppIcon';
import Sidebar from '@/component/ui/Sidebar';
import CodePreview from '@/component/homepage/CodePreview';
import RecentActivity from '@/component/homepage/RecentActivity';
import WelcomeHero from '@/component/homepage/WelcomeHero';
import NavigationCards from '@/component/homepage/NavigationCards';
import TechStack from '@/component/homepage/TechStack';

const HomepageMainEditorInterface = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activePanel, setActivePanel] = useState('welcome');
  const [isLoading, setIsLoading] = useState(true);

  const panels = [
    { id: 'welcome', label: 'Welcome', icon: 'Home' },
    { id: 'preview', label: 'Code Preview', icon: 'Code' },
    { id: 'navigation', label: 'Navigation', icon: 'Map' },
    { id: 'tech', label: 'Tech Stack', icon: 'Layers' },
    { id: 'activity', label: 'Activity', icon: 'Activity' }
  ];

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderActivePanel = () => {
    switch (activePanel) {
      case 'welcome':
        return (
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <WelcomeHero />
            <div className="flex-shrink-0">
              <CodePreview />
            </div>
          </div>
        );
      case 'preview':
        return (
          <div className="flex justify-center">
            <CodePreview />
          </div>
        );
      case 'navigation':
        return <NavigationCards />;
      case 'tech':
        return <TechStack />;
      case 'activity':
        return (
          <div className="flex justify-center">
            <RecentActivity />
          </div>
        );
      default:
        return (
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <WelcomeHero />
            <div className="flex-shrink-0">
              <CodePreview />
            </div>
          </div>
        );
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
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Icon name="Code" size={32} color="white" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            CodeFolio Studio
          </h2>
          <p className="text-muted-foreground mb-4">Initializing development environment...</p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        {/* Main Content Area */}
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'}`}>
          {/* Panel Navigation */}
          <div className="bg-card border-b border-border">
            <div className="flex items-center overflow-x-auto">
              {panels?.map((panel) => (
                <button
                  key={panel?.id}
                  onClick={() => setActivePanel(panel?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm border-r border-border transition-colors duration-200 whitespace-nowrap ${
                    activePanel === panel?.id
                      ? 'bg-background text-foreground border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={panel?.icon} size={14} />
                  <span>{panel?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="min-h-[calc(100vh-8rem)] overflow-y-auto">
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6"
            >
              {renderActivePanel()}
            </motion.div>
          </div>

          {/* Floating Action Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50"
            onClick={() => setActivePanel('navigation')}
          >
            <Icon name="Compass" size={24} />
          </motion.button>

          {/* Terminal Hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="fixed bottom-8 left-8 bg-card border border-border rounded-lg px-4 py-2 shadow-lg z-40"
          >
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="Terminal" size={14} className="text-accent" />
              <span className="text-muted-foreground">Press</span>
              <kbd className="px-2 py-1 bg-muted rounded text-xs">/</kbd>
              <span className="text-muted-foreground">to search</span>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default HomepageMainEditorInterface;