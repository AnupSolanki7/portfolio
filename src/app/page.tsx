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
  const [isMobile, setIsMobile] = useState(false);

  const panels = [
    { id: 'welcome', label: 'Welcome', icon: 'Home' },
    { id: 'preview', label: 'Preview', icon: 'Code' },
    { id: 'navigation', label: 'Navigation', icon: 'Map' },
    { id: 'tech', label: 'Tech', icon: 'Layers' },
    { id: 'activity', label: 'Activity', icon: 'Activity' }
  ];

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderActivePanel = () => {
    switch (activePanel) {
      case 'welcome':
        return (
          <div className="flex flex-col xl:flex-row items-center gap-6 lg:gap-8">
            <WelcomeHero />
            <div className="w-full xl:w-auto xl:flex-shrink-0">
              <CodePreview />
            </div>
          </div>
        );
      case 'preview':
        return (
          <div className="flex justify-center w-full">
            <CodePreview />
          </div>
        );
      case 'navigation':
        return <NavigationCards />;
      case 'tech':
        return <TechStack />;
      case 'activity':
        return (
          <div className="flex justify-center w-full">
            <RecentActivity />
          </div>
        );
      default:
        return (
          <div className="flex flex-col xl:flex-row items-center gap-6 lg:gap-8">
            <WelcomeHero />
            <div className="w-full xl:w-auto xl:flex-shrink-0">
              <CodePreview />
            </div>
          </div>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-xs mx-auto"
        >
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Icon name="Code" size={32} color="white" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            CodeFolio Studio
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">Initializing development environment...</p>
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
      <div className="flex flex-col md:flex-row">
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        {/* Main Content Area */}
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-0' : 'md:ml-0'} w-full`}>
          {/* Mobile Panel Navigation - Horizontal Scroll */}
          <div className="bg-card border-b border-border sticky top-0 z-30">
            <div className="flex items-center overflow-x-auto scrollbar-hide">
              {panels.map((panel) => (
                <button
                  key={panel.id}
                  onClick={() => setActivePanel(panel.id)}
                  className={`flex items-center space-x-2 px-3 py-3 text-xs sm:text-sm border-r border-border transition-colors duration-200 whitespace-nowrap flex-shrink-0 min-w-max ${
                    activePanel === panel.id
                      ? 'bg-background text-foreground border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={panel.icon} size={isMobile ? 12 : 14} />
                  <span className={isMobile ? 'hidden sm:inline' : ''}>
                    {isMobile ? panel.label.substring(0, 3) : panel.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="min-h-[calc(100vh-8rem)] overflow-y-auto">
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-6 lg:p-8"
            >
              {renderActivePanel()}
            </motion.div>
          </div>

          {/* Mobile Bottom Navigation */}
          {isMobile && (
            <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40 md:hidden">
              <div className="flex justify-around items-center p-2">
                {panels.slice(0, 3).map((panel) => (
                  <button
                    key={panel.id}
                    onClick={() => setActivePanel(panel.id)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 min-w-[60px] ${
                      activePanel === panel.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    <Icon name={panel.icon} size={16} />
                    <span className="text-xs mt-1">{panel.label}</span>
                  </button>
                ))}
                <button
                  onClick={() => {
                    const currentIndex = panels.findIndex(p => p.id === activePanel);
                    const nextIndex = (currentIndex + 1) % panels.length;
                    setActivePanel(panels[nextIndex].id);
                  }}
                  className="flex flex-col items-center p-2 rounded-lg text-muted-foreground"
                >
                  <Icon name="MoreHorizontal" size={16} />
                  <span className="text-xs mt-1">More</span>
                </button>
              </div>
            </div>
          )}

          {/* Floating Action Button - Responsive positioning */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className={`fixed bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50 ${
              isMobile 
                ? 'bottom-20 right-4 w-12 h-12' 
                : 'bottom-8 right-8 w-14 h-14'
            }`}
            onClick={() => setActivePanel('navigation')}
          >
            <Icon name="Compass" size={isMobile ? 20 : 24} />
          </motion.button>

          {/* Terminal Hint - Responsive positioning and text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className={`fixed bg-card border border-border rounded-lg shadow-lg z-40 ${
              isMobile
                ? 'bottom-20 left-4 px-3 py-1 text-xs'
                : 'bottom-8 left-8 px-4 py-2 text-sm'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Icon name="Terminal" size={isMobile ? 12 : 14} className="text-accent" />
              <span className="text-muted-foreground hidden sm:inline">Press</span>
              <kbd className={`bg-muted rounded ${
                isMobile ? 'px-1 py-0.5 text-xs' : 'px-2 py-1 text-xs'
              }`}>/</kbd>
              <span className="text-muted-foreground hidden sm:inline">to search</span>
              <span className="text-muted-foreground sm:hidden">Search</span>
            </div>
          </motion.div>

          {/* Mobile Safe Area Spacer */}
          {isMobile && <div className="h-16"></div>}
        </main>
      </div>
    </div>
  );
};

export default HomepageMainEditorInterface;