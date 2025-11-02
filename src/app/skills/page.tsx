'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/component/ui/Sidebar';
import Header from '@/component/ui/Header';
import Icon from '@/component/AppIcon';
import Image from '@/component/AppImage';

const SkillsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
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

  // 🧠 Updated Skill Areas
  const skillAreas = [
    {
      icon: 'Monitor',
      title: 'Frontend Development',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Redux',
        'Tailwind CSS',
        'Ant Design',
        'Vite.js'
      ],
      level: 'Expert',
      fileType: 'frontend.tsx',
      color: theme.keyword
    },
    {
      icon: 'Server',
      title: 'Backend & API Integration',
      skills: [
        'Node.js',
        'Feather.js',
        'Express',
        'REST APIs',
        'GraphQL',
        'MongoDB',
        'MySQL'
      ],
      level: 'Proficient',
      fileType: 'backend.js',
      color: theme.string
    },
    {
      icon: 'Cpu',
      title: 'AI & Automation',
      skills: [
        'Gemini API',
        'OpenAI API',
        'AWS Transcribe',
        'Intelligent Workflow Automation'
      ],
      level: 'Intermediate',
      fileType: 'ai-integration.ts',
      color: theme.function
    },
    {
      icon: 'Tool',
      title: 'Tools & Platforms',
      skills: [
        'Git',
        'GitHub',
        'Vercel',
        'NextAuth',
        'SEO Optimization',
        'Cross-browser Compatibility',
        'Performance Tuning'
      ],
      level: 'Advanced',
      fileType: 'tools.json',
      color: theme.class
    }
  ];

  // 🏅 Updated Certifications
  const certifications = [
    {
      id: 1,
      title: 'React Developer (w/ Redux, Hooks, GraphQL)',
      issuer: 'Udemy',
      date: '2023',
      category: 'frontend',
      status: 'completed',
      image: 'https://lottie.host/43b12e20-94f8-4e80-a816-0029de06e7d8/hZ9NMQxxGl.gif',
      skills: ['React', 'Hooks', 'Redux', 'GraphQL'],
      fileType: 'cert-react.md'
    },
    {
      id: 2,
      title: 'Python for Everybody',
      issuer: 'Coursera',
      date: '2021',
      category: 'programming',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop',
      skills: ['Python','SQL'],
      fileType: 'cert-js.md'
    },
  ];

  const navigationSections = [
    { id: 'overview', label: 'skills.js', icon: 'Code', color: theme.keyword },
  ];

  // ✅ Simulated Loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Responsive Check
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 💻 Terminal Simulation
  const runTerminalCommand = (command: string) => {
    const output = [
      `$ ${command}`,
      '> Fetching skills database...',
      '> ✓ Loaded React, Next.js, and AI integration modules',
      '> 🧠 Optimizing UI performance and automation stack',
      '> ✅ Profile successfully compiled'
    ];
    setTerminalOutput(output);
  };

  useEffect(() => {
    if (terminalOpen) runTerminalCommand('cat skills.json');
  }, [terminalOpen]);

  const toggleTerminal = () => setTerminalOpen(prev => !prev);
  const toggleSidebar = () => setIsSidebarCollapsed(prev => !prev);

  if (isLoading) {
    return (
      <div className={`min-h-screen ${theme.background} flex items-center justify-center font-mono`}>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <div className={`w-16 h-16 ${theme.surface} rounded-lg flex items-center justify-center mb-4 mx-auto border ${theme.border}`}>
            <Icon name="Code" size={32} className={theme.accent} />
          </div>
          <h2 className={`text-xl font-semibold ${theme.textPrimary} mb-2`}>Loading Skills...</h2>
          <p className={`${theme.textSecondary} text-sm`}>Initializing developer profile</p>
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
      <div className="flex">
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />

        {/* Main Section */}
        <main className="flex-1">
          <div className="flex flex-col min-h-[calc(100vh-64px)]">

            {/* File Tabs */}
            <div className={`${theme.surface} border-b ${theme.border}`}>
              <div className="flex overflow-x-auto scrollbar-hide">
                {navigationSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-r ${theme.border} text-sm ${
                      activeSection === section.id
                        ? `${theme.editor} ${theme.textPrimary} border-t-2 border-t-[#007acc]`
                        : `${theme.surface} ${theme.textSecondary} hover:${theme.surfaceLight}`
                    }`}
                  >
                    <Icon name={section.icon} size={14} className={section.color} />
                    <span>{section.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex overflow-hidden">
              <div className="flex-1 overflow-auto">
                <div className={`${theme.editor} p-6`}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSection}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mx-auto"
                    >
                      {activeSection === 'overview' && (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillAreas.map((area, i) => (
                              <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`${theme.surface} border ${theme.border} rounded-lg p-6 hover:${theme.surfaceLight} transition-all duration-300`}
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className={`w-12 h-12 ${theme.surfaceLight} rounded-lg flex items-center justify-center border ${theme.border}`}>
                                    <Icon name={area.icon} size={20} className={area.color} />
                                  </div>
                                  <div>
                                    <h3 className={`font-semibold ${theme.textPrimary}`}>{area.title}</h3>
                                    <span className={`text-xs ${area.color}`}>{area.level}</span>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {area.skills.map((skill) => (
                                    <span key={skill} className={`px-3 py-1 text-xs ${theme.surfaceLight} ${theme.textSecondary} rounded-full border ${theme.border}`}>
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                                <div className={`text-xs ${theme.textMuted} mt-2`}>{area.fileType}</div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Certifications */}
                          <div className={`mt-8 ${theme.surface} border ${theme.border} mt-8 rounded-lg p-6`}>
                            <div className="flex items-center gap-2 mb-4">
                              <Icon name="Award" size={20} className={theme.success} />
                              <h3 className={`font-semibold ${theme.textPrimary}`}>Certifications & Awards</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {certifications.slice(0, 2).map((cert) => (
                                <div key={cert.id} className={`flex items-center gap-3 p-3 ${theme.surfaceLight} rounded-lg border ${theme.border}`}>
                                  <Image src={cert.image} alt={cert.issuer} className="w-10 h-10 rounded-lg object-cover" />
                                  <div>
                                    <h4 className={`font-medium ${theme.textPrimary} text-sm`}>{cert.title}</h4>
                                    <p className={`text-xs ${theme.textSecondary}`}>{cert.issuer} • {cert.date}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {activeSection === 'certifications' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {certifications.map((cert, i) => (
                            <motion.div
                              key={cert.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`${theme.surface} border ${theme.border} rounded-lg p-4`}
                            >
                              <div className="flex items-start gap-3 mb-2">
                                <Image src={cert.image} alt={cert.issuer} className="w-12 h-12 rounded-lg object-cover" />
                                <div>
                                  <h3 className={`font-semibold ${theme.textPrimary}`}>{cert.title}</h3>
                                  <p className={`text-xs ${theme.textSecondary}`}>{cert.issuer}</p>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {cert.skills.map((s) => (
                                  <span key={s} className={`px-2 py-1 text-xs ${theme.surfaceLight} ${theme.accent} rounded-full border ${theme.border}`}>
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Current Focus */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 text-center"
                  >
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Icon name="Target" size={18} className={theme.warning} />
                      <span className={`text-sm ${theme.textSecondary}`}>Currently Exploring</span>
                    </div>
                    <p className={`${theme.textPrimary} font-medium`}>
                      AI-Powered Features in React Apps & Performance Optimization
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Terminal Section */}
            {terminalOpen && (
              <div className={`border-t ${theme.border}`}>
                <div className={`${theme.surface} border-b ${theme.border} px-4 py-2 flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <Icon name="Terminal" size={14} className={theme.textSecondary} />
                    <span className={`text-sm ${theme.textPrimary}`}>TERMINAL</span>
                  </div>
                  <button onClick={toggleTerminal} className="p-1 hover:bg-[#3e3e42] rounded">
                    <Icon name="X" size={12} className={theme.textSecondary} />
                  </button>
                </div>
                <div className={`${theme.editor} p-4 font-mono text-sm h-40 overflow-auto`}>
                  {terminalOutput.map((line, i) => (
                    <div key={i} className={line.startsWith('$') ? theme.keyword : theme.textPrimary}>
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
        </main>
      </div>
    </div>
  );
};

export default SkillsPage;
