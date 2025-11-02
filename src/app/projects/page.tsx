"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import ProjectModal from "./components/ProjectModal";
import ProjectStats from "./components/ProjectStats";
import FeaturedProject from "./components/FeaturedProject";
import Icon from "@/component/AppIcon";
import Header from "@/component/ui/Header";
import Sidebar from "@/component/ui/Sidebar";

const ProjectsPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Enhanced project data with animated images
  const projects = [
    {
      id: 1,
      title: "Property Management App",
      category: "Real Estate",
      description:
        "Comprehensive property management system built with React, Vite, and Feather.js — enabling seamless loan tracking, insurance management, and admin dashboards for real estate businesses.",
      image: "/images/property_app.jpg",
      techStack: ["React", "Vite.js", "Feather.js"],
      year: "2024",
      status: "live",
      featured: true,
      liveUrl: "https://propertydollar.com",
      githubUrl: "https://github.com/anupsolanki/property-dollar",
      fileType: "real-estate.js"
    },
    {
      id: 2,
      title: "Hotel Management App",
      category: "Hospitality",
      description:
        "Hotel and property management platform built with React and Ant Design — featuring role-based access, booking management, and real-time analytics dashboards.",
      image: "/images/hotel_app.webp",
      techStack: ["React", "Ant Design"],
      year: "2023",
      status: "live",
      featured: true,
      liveUrl: "https://imanagify.com",
      githubUrl: "https://github.com/anupsolanki/imanagify",
      fileType: "hospitality.ts"
    },
    {
      id: 3,
      title: "TravelEase",
      category: "Tours & Travel",
      description:
        "Next.js and Node-powered CRM for travel agencies with enquiry-to-booking conversion, commission tracking, and automated monthly reports.",
      image: "/images/travel_app.png",
      techStack: ["Next.js", "React", "Node.js", "MongoDB"],
      year: "2024",
      status: "live",
      featured: true,
      liveUrl: "https://travelease.ai",
      githubUrl: "https://github.com/anupsolanki/travelease",
      fileType: "travel.json"
    },
    {
      id: 4,
      title: "BenchPage",
      category: "Recruitment",
      description:
        "A social networking platform for recruiters and bench sales professionals built using React, Node.js, and MySQL — offering chat, resume generation, and analytics.",
      image: "/images/bench_app.webp",
      techStack: ["React", "Node.js", "MySQL"],
      year: "2023",
      status: "live",
      featured: false,
      liveUrl: "https://benchpage.io",
      githubUrl: "https://github.com/anupsolanki/benchpage",
      fileType: "recruitment.js"
    },
    {
      id: 5,
      title: "Grocery App",
      category: "E-commerce",
      description:
        "E-commerce grocery platform built using Next.js with NextAuth for secure authentication and an intuitive React-based admin panel for managing products and orders.",
      image: "/images/grocery_app.png",
      techStack: ["Next.js", "React", "NextAuth"],
      year: "2024",
      status: "live",
      featured: false,
      liveUrl: "https://groceryapp.shop",
      githubUrl: "https://github.com/anupsolanki/groceryapp",
      fileType: "ecommerce.ts"
    },
    {
      id: 6,
      title: "Recaply",
      category: "AI / Productivity",
      description:
        "AI-powered offline meeting summarizer built with Next.js, Node.js, Gemini API, and AWS Transcribe — for real-time transcription, translation, and intelligent summaries.",
      image: "/images/recaply_app.webp",
      techStack: ["Next.js", "React", "Node.js", "Gemini API", "AWS Transcribe"],
      year: "2025",
      status: "development",
      featured: false,
      liveUrl: null,
      githubUrl: "https://github.com/anupsolanki/recaply",
      fileType: "ai.md"
    },
  ];

  // Mock statistics
  const projectStats = {
    totalProjects: projects?.length,
    liveProjects: projects?.filter((p) => p?.status === "live")?.length,
    technologiesUsed: [...new Set(projects.flatMap((p) => p.techStack))]?.length,
    totalUsers: "50K+",
  };

  // Categories for navigation
  const categories = [
    { value: null, label: "All Projects", icon: "Folder", color: theme.textPrimary },
    { value: "Real Estate", label: "Real Estate", icon: "Home", color: theme.string },
    { value: "Hospitality", label: "Hospitality", icon: "Building", color: theme.keyword },
    { value: "Tours & Travel", label: "Travel", icon: "Plane", color: theme.function },
    { value: "Recruitment", label: "Recruitment", icon: "Users", color: theme.class },
    { value: "E-commerce", label: "E-commerce", icon: "ShoppingCart", color: theme.success },
    { value: "AI / Productivity", label: "AI", icon: "Brain", color: theme.warning },
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

  // Terminal simulation
  const runTerminalCommand = (command: string) => {
    const output = [
      `$ ${command}`,
      '> Loading project portfolio...',
      '> ✓ Found 6 projects across 6 categories',
      '> ℹ️  Type "projects --help" for more options'
    ];
    setTerminalOutput(output);
  };

  useEffect(() => {
    if (terminalOpen) {
      runTerminalCommand('ls -la projects/');
    }
  }, [terminalOpen]);

  // Show all projects - no filtering
  const displayedProjects = projects;

  const featuredProject = selectedCategory ? projects.filter((p) => p.category === selectedCategory) : projects;

  const handleViewDetails = (project: React.SetStateAction<null>) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const toggleTerminal = () => {
    setTerminalOpen(prev => !prev);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${theme.background} font-mono`}>
      <Header />
      
      <div className="flex">
        {/* Your Existing Sidebar */}
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
        />
        
        {/* Main Coding-Themed Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-0' : 'md:ml-0'} w-full`}>
          <div className="flex flex-col min-h-[calc(100vh-64px)]">


            {/* File Tabs Navigation */}
            <div className={`${theme.surface} border-b ${theme.border}`}>
              <div className="flex overflow-x-auto scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex items-center gap-2 px-4 py-3 border-r ${theme.border} transition-all duration-200 whitespace-nowrap flex-shrink-0 min-w-[140px] font-mono text-sm ${
                      selectedCategory === category.value
                        ? `${theme.editor} ${theme.textPrimary} border-t-2 border-t-[#007acc]`
                        : `${theme.surface} ${theme.textSecondary} hover:${theme.surfaceLight}`
                    }`}
                  >
                    <Icon 
                      name={category.icon} 
                      size={14} 
                      className={category.color} 
                    />
                    <span>{category.label}</span>
                  </button>
                ))}
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
                      <span className={theme.textSecondary}>Projects: {displayedProjects.length}</span>
                      <span className={theme.textSecondary}>Filter: {selectedCategory}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={theme.success}>{projectStats.liveProjects} Live</span>
                      <span className={theme.textSecondary}>Last Updated: Today</span>
                    </div>
                  </div>

                  {/* Editor Content */}
                  <div className={`${theme.editor} p-6 min-h-full`}>
                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                      {featuredProject.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <ProjectCard
                            project={project}
                            onViewDetails={handleViewDetails}
                            // theme={theme}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className={`text-center space-y-6 mt-12 p-6 ${theme.surface} rounded-lg border ${theme.border}`}>
                      <div className="space-y-2">
                        <h3 className={`text-lg font-semibold ${theme.textPrimary}`}>
                          Interested in collaboration?
                        </h3>
                        <p className={theme.textSecondary}>
                          Let's build something amazing together
                        </p>
                      </div>
                      <button
                        onClick={() => (window.location.href = "mailto:anupsolanki.dev@gmail.com")}
                        className={`inline-flex items-center gap-2 px-6 py-3 ${theme.surfaceLight} hover:${theme.surfaceLighter} ${theme.textPrimary} rounded-lg border ${theme.border} transition-all duration-200 font-mono text-sm`}
                      >
                        <Icon name="Mail" size={16} className={theme.accent} />
                        <span>Start Conversation</span>
                      </button>
                    </div>
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
          </div>

          {/* Status Bar */}
          <div className={`fixed bottom-0 left-0 right-0 ${theme.surface} border-t ${theme.border} px-4 py-2 flex items-center justify-between text-xs font-mono z-30`}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="GitBranch" size={12} className={theme.textSecondary} />
                <span className={theme.textPrimary}>projects-portfolio</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Circle" size={8} className={theme.success} />
                <span className={theme.textSecondary}>Live: {projectStats.liveProjects}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className={theme.textSecondary}>Projects: {displayedProjects.length}</span>
              <span className={theme.textSecondary}>Filter: {selectedCategory}</span>
              <span className={theme.textSecondary}>UTF-8</span>
            </div>
          </div>

          {/* Mobile Bottom Spacer */}
          {isMobile && <div className="h-16"></div>}
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
          // theme={theme}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;