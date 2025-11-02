'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalStory from './components/PersonalStory';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsEvolution from './components/SkillsEvolution';
import LeadershipExperience from './components/LeadershipExperience';
import Header from '@/component/ui/Header';
import Icon from '@/component/AppIcon';
import Sidebar from '@/component/ui/Sidebar';

// Types
interface Section {
  id: string;
  title: string;
  icon: string;
  fileName: string;
  language: string;
  color: string;
}

interface QuickStat {
  label: string;
  value: string;
  icon: string;
  color: string;
  fileType: string;
}

const AboutPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('story');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showQuickStats, setShowQuickStats] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  // VS Code Dark+ Theme Colors
  const theme = {
    background: 'bg-[#1e1e1e]',
    editor: 'bg-[#1e1e1e]',
    surface: 'bg-[#252526]',
    surfaceLight: 'bg-[#2d2d30]',
    surfaceLighter: 'bg-[#3e3e42]',
    border: 'border-[#404040]',
    borderLight: 'border-[#464647]',
    textPrimary: 'text-[#d4d4d4]',
    textSecondary: 'text-[#969696]',
    textMuted: 'text-[#6a6a6a]',
    comment: 'text-[#6a9955]',
    keyword: 'text-[#569cd6]',
    string: 'text-[#ce9178]',
    function: 'text-[#dcdcaa]',
    variable: 'text-[#9cdcfe]',
    number: 'text-[#b5cea8]',
    class: 'text-[#4ec9b0]',
    accent: 'text-[#007acc]',
    success: 'text-[#4ec9b0]',
    warning: 'text-[#ce9178]',
    error: 'text-[#f44747]',
  };

  // File-based sections
  const sections: Section[] = [
    {
      id: 'story',
      title: 'Personal Story',
      icon: 'FileText',
      fileName: 'about_me.js',
      language: 'javascript',
      color: theme.function
    },
    {
      id: 'timeline',
      title: 'Experience Timeline',
      icon: 'Clock',
      fileName: 'experience.json',
      language: 'json',
      color: theme.string
    },
    {
      id: 'skills',
      title: 'Skills & Tech',
      icon: 'Code',
      fileName: 'skills.ts',
      language: 'typescript',
      color: theme.keyword
    },
    {
      id: 'leadership',
      title: 'Leadership',
      icon: 'Users',
      fileName: 'leadership.md',
      language: 'markdown',
      color: theme.class
    }
  ];

  // File-based quick stats
  const quickStats: QuickStat[] = [
    { label: 'Years Experience', value: '3+', icon: 'Calendar', color: theme.keyword, fileType: '.yaml' },
    { label: 'Projects Completed', value: '20+', icon: 'Folder', color: theme.string, fileType: '.json' },
    { label: 'Technologies', value: '15+', icon: 'Layers', color: theme.function, fileType: '.js' },
    { label: 'Code Reviews', value: '50+', icon: 'GitPullRequest', color: theme.class, fileType: '.ts' }
  ];

  // Responsive breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Terminal simulation
  const runTerminalCommand = useCallback((command: string) => {
    const output = [
      `$ ${command}`,
      '> Loading developer profile...',
      '> ✓ Profile loaded successfully',
      '> ℹ️  Type "help" for available commands'
    ];
    setTerminalOutput(output);
  }, []);

  useEffect(() => {
    if (terminalOpen) {
      runTerminalCommand('cat about_me.js');
    }
  }, [terminalOpen, runTerminalCommand]);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed(prev => !prev);
  }, []);

  const toggleQuickStats = useCallback(() => {
    setShowQuickStats(prev => !prev);
  }, []);

  const toggleTerminal = useCallback(() => {
    setTerminalOpen(prev => !prev);
  }, []);

  const handleSectionChange = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, []);

  const renderActiveSection = () => {
    const sectionComponents = {
      story: <PersonalStory />,
      timeline: <ExperienceTimeline />,
      skills: <SkillsEvolution />,
      leadership: <LeadershipExperience />
    };

    return sectionComponents[activeSection as keyof typeof sectionComponents] || <PersonalStory />;
  };

  // File icon based on language
  const getFileIcon = (language: string) => {
    const icons: { [key: string]: string } = {
      javascript: 'FileCode',
      typescript: 'FileCode',
      json: 'FileText',
      markdown: 'FileText',
      yaml: 'FileCode'
    };
    return icons[language] || 'File';
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen ${theme.background} flex items-center justify-center font-mono`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className={`w-16 h-16 ${theme.surface} rounded-lg flex items-center justify-center mb-4 mx-auto border ${theme.border}`}>
            <Icon name="Terminal" size={32} className={theme.accent} />
          </div>
          <h2 className={`text-xl font-semibold ${theme.textPrimary} mb-2 font-mono`}>Loading IDE...</h2>
          <p className={`${theme.textSecondary} text-sm font-mono`}>Initializing developer environment</p>
          <div className="flex justify-center mt-4 space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme.background} font-mono`}>
      <Header />
      
      {/* Scroll Progress Bar - VS Code style */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#1e1e1e] z-50">
        <motion.div
          className="h-full bg-[#007acc]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Your Existing Sidebar */}
        <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        {/* Main Coding-Themed Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-0' : 'md:ml-0'} w-full`}>
          <div className="flex flex-col min-h-[calc(100vh-64px)]">
            <div className={`${theme.surface} border-b ${theme.border}`}>
              <div className="flex overflow-x-auto scrollbar-hide">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-r ${theme.border} transition-all duration-200 whitespace-nowrap flex-shrink-0 min-w-[160px] font-mono text-sm ${
                      activeSection === section.id
                        ? `${theme.editor} ${theme.textPrimary} border-t-2 border-t-[#007acc]`
                        : `${theme.surface} ${theme.textSecondary} hover:${theme.surfaceLight}`
                    }`}
                  >
                    <Icon 
                      name={getFileIcon(section.language)} 
                      size={14} 
                      className={section.color} 
                    />
                    <span>{section.fileName}</span>
                    {activeSection === section.id && (
                      <Icon name="X" size={12} className={theme.textMuted} />
                    )}
                  </button>
                ))}
                
                {/* New File Button */}
                <button className={`flex items-center gap-2 px-3 ${theme.surface} hover:${theme.surfaceLight} border-r ${theme.border} text-${theme.textMuted} hover:${theme.textSecondary}`}>
                  <Icon name="Plus" size={14} />
                </button>
              </div>
            </div>

            {/* Editor Content Area */}
            <div className="flex-1 flex overflow-hidden">
          

              {/* Main Editor Area */}
              <div className="flex-1 overflow-auto">
                <div className="min-h-full">
                  {/* Editor Status Bar */}
                  <div className={`flex items-center justify-between ${theme.surfaceLight} border-b ${theme.border} px-4 py-1 text-xs`}>
                    <div className="flex items-center gap-4">
                      <span className={theme.textSecondary}>Ln 1, Col 1</span>
                      <span className={theme.textSecondary}>Spaces: 2</span>
                      <span className={theme.textSecondary}>UTF-8</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`${sections.find(s => s.id === activeSection)?.color}`}>
                        {sections.find(s => s.id === activeSection)?.language}
                      </span>
                      <span className={theme.textSecondary}>Live Share</span>
                    </div>
                  </div>

                  {/* Editor Content */}
                  <div className={`${theme.editor} p-6 min-h-full`}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mx-auto"
                      >
                        {/* Section Content */}
                        {renderActiveSection()}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal */}
            {terminalOpen && (
              <div className={`border-t ${theme.border}`}>
                <div className={`${theme.surface} border-b ${theme.border} px-4 py-2 flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <Icon name="Terminal" size={14} className={theme.textSecondary} />
                    <span className={`text-sm ${theme.textPrimary} font-mono`}>TERMINAL</span>
                  </div>
                  <button 
                    onClick={toggleTerminal}
                    className="p-1 hover:bg-[#3e3e42] rounded"
                  >
                    <Icon name="X" size={12} className={theme.textSecondary} />
                  </button>
                </div>
                <div className={`${theme.editor} p-4 font-mono text-sm h-40 overflow-auto`}>
                  {terminalOutput.map((line, index) => (
                    <div 
                      key={index} 
                      className={`${
                        line.startsWith('$') ? theme.keyword : 
                        line.startsWith('>') ? theme.textPrimary : 
                        line.includes('✓') ? theme.success : 
                        theme.comment
                      } mb-1`}
                    >
                      {line}
                    </div>
                  ))}
                  <div className="flex items-center">
                    <span className={theme.keyword}>$</span>
                    <span className={`${theme.textPrimary} ml-2 animate-pulse`}>_</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Stats Panel */}
          <AnimatePresence>
            {showQuickStats && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 z-40"
                  onClick={() => setShowQuickStats(false)}
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`fixed ${theme.surface} border ${theme.border} rounded-lg shadow-2xl z-50 ${
                    isMobile 
                      ? 'bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-11/12 max-w-sm' 
                      : 'bottom-20 right-6 w-80'
                  } overflow-hidden font-mono`}
                >
                  {/* Header */}
                  <div className={`${theme.surfaceLight} border-b ${theme.border} p-4`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon name="BarChart3" size={16} className={theme.accent} />
                        <div>
                          <h3 className={`font-semibold ${theme.textPrimary}`}>dev-stats</h3>
                          <p className={`text-xs ${theme.textSecondary}`}>developer-metrics</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowQuickStats(false)}
                        className={`p-1 hover:${theme.surfaceLighter} rounded transition-colors duration-200`}
                      >
                        <Icon name="X" size={14} className={theme.textSecondary} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {quickStats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`${theme.surfaceLight} border ${theme.border} rounded p-3 hover:border-[#007acc]/30 transition-all duration-200`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name={stat.icon} size={12} className={stat.color} />
                            <span className={`text-xs ${theme.textSecondary}`}>
                              {stat.label}
                            </span>
                          </div>
                          <div className={`text-lg font-semibold ${theme.textPrimary}`}>
                            {stat.value}
                          </div>
                          <div className={`text-xs ${theme.textMuted} mt-1`}>
                            {stat.fileType}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Floating Action Buttons */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
            {/* Terminal Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              onClick={toggleTerminal}
              className={`${theme.surfaceLighter} hover:${theme.surfaceLight} ${theme.textPrimary} rounded-full shadow-2xl transition-all duration-200 flex items-center justify-center w-12 h-12 border ${theme.border}`}
            >
              <Icon name="Terminal" size={20} className={theme.accent} />
            </motion.button>

            {/* Quick Stats Button for Mobile */}
            {isMobile && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                onClick={toggleQuickStats}
                className={`${theme.surfaceLighter} hover:${theme.surfaceLight} ${theme.textPrimary} rounded-full shadow-2xl transition-all duration-200 flex items-center justify-center w-12 h-12 border ${theme.border}`}
              >
                <Icon name="BarChart3" size={20} className={theme.function} />
              </motion.button>
            )}
          </div>

          {/* Status Bar */}
          <div className={`fixed bottom-0 left-0 right-0 ${theme.surface} border-t ${theme.border} px-4 py-2 flex items-center justify-between text-xs font-mono z-30`}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="GitBranch" size={12} className={theme.textSecondary} />
                <span className={theme.textPrimary}>main*</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Circle" size={8} className={theme.success} />
                <span className={theme.textSecondary}>Prettier</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className={theme.textSecondary}>Ln 1, Col 1</span>
              <span className={theme.textSecondary}>Spaces: 2</span>
              <span className={theme.textSecondary}>UTF-8</span>
              <span className={theme.textSecondary}>LF</span>
            </div>
          </div>

          {/* Mobile Bottom Spacer */}
          {isMobile && <div className="h-16"></div>}
        </main>
      </div>
    </div>
  );
};

export default AboutPage;