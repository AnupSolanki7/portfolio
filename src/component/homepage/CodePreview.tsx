"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../AppIcon";

interface Tab {
  id: string;
  label: string;
  icon: string;
}

const CodePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const codeExamples: Record<string, string> = {
    about: `const aboutMe = {
  name: "Anup Solanki",
  role: "Frontend Developer",
  experience: 2,
  company: "Solguruz",
  specialties: ["React.js", "Next.js", "Tailwind CSS", "AI Integration"],
  achievements: ["Rising Star Award 🏆", "Led Frontend Projects", "30+ Interviews Conducted"],
  location: "India",
  mindset: "Building beautiful, high-performing UIs that feel alive."
};`,
    skills: `const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
  backend: ["Node.js", "Express.js", "MongoDB"],
  tools: ["Git", "VS Code", "Postman", "Figma", "Vercel"],
  focus: "Modern, scalable, and visually engaging web applications."
};`,
    projects: `const projects = [
  {
    name: "Property Dollar",
    description: "Manages property loans, insurance, and admin operations.",
    tech: ["React", "Redux", "Node", "MUI"],
  },
  {
    name: "iManagify",
    description: "Hotel management system for bookings and staff workflow.",
    tech: ["React", "Tailwind", "Express", "MongoDB"],
  },
  {
    name: "Messenger & Expense Tracker",
    description: "Personal projects showcasing real-time chat and smart finance tracking.",
    tech: ["React", "Firebase", "Chart.js"],
  },
  {
    name: "SEO-Optimized Website",
    description: "A website ranking on Google for client niche keywords.",
    tech: ["Next.js", "Framer Motion", "Vercel"],
  }
];`,
    contact: `const contact = {
  email: "anupsolanki.dev@gmail.com",
  github: "github.com/anupsolanki",
  linkedin: "linkedin.com/in/anupsolanki",
  portfolio: "anupsolanki.dev",
  message: "Let's collaborate to build something amazing!"
};`,
  };

  const tabs: Tab[] = [
    { id: "about", label: "about.js", icon: "User" },
    { id: "skills", label: "skills.js", icon: "Zap" },
    { id: "projects", label: "projects.js", icon: "Folder" },
    { id: "contact", label: "contact.js", icon: "Mail" },
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
    const timer = setTimeout(() => setIsTyping(false), 1800);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const highlightSyntax = (code: string): React.ReactNode => {
    const keywords = [
      "const",
      "let",
      "var",
      "import",
      "from",
      "export",
      "return",
      "if",
      "else",
      "function",
      "new",
      "true",
      "false",
    ];

    return code.split("\n").map((line, i) => (
      <div key={i} className="flex">
        <span className={`text-muted-foreground select-none flex-shrink-0 ${
          isMobile ? "text-xs w-6 pr-1" : "text-xs w-8 pr-2"
        }`}>
          {i + 1}
        </span>
        <span className="flex-1 overflow-x-auto">
          {line.split(/(\b\w+\b)/).map((part, j) => {
            if (keywords.includes(part)) {
              return (
                <span key={j} className="text-blue-400">
                  {part}
                </span>
              );
            } else if (/["'].*["']/.test(part)) {
              return (
                <span key={j} className="text-green-400">
                  {part}
                </span>
              );
            } else if (/:/.test(part)) {
              return (
                <span key={j} className="text-pink-400">
                  {part}
                </span>
              );
            }
            return part;
          })}
        </span>
      </div>
    ));
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1500);
  };

  // Responsive width calculation
  const getContainerWidth = () => {
    if (isMobile) return "w-full max-w-full";
    if (isTablet) return "w-full max-w-2xl";
    return "w-full max-w-3xl";
  };

  // Responsive code height
  const getCodeHeight = () => {
    if (isMobile) return "h-64";
    if (isTablet) return "h-80";
    return "h-96";
  };

  return (
    <motion.div
      className={`${getContainerWidth()} bg-card border border-border rounded-lg overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-muted px-3 sm:px-4 py-2 border-b border-border">
        <div className="flex items-center space-x-2 overflow-hidden">
          <div className="flex space-x-1 flex-shrink-0">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-xs text-muted-foreground ml-2 sm:ml-4 truncate">
            {isMobile ? "~/portfolio/" : "~/anupsolanki/portfolio/"}
          </span>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Icon name="Play" size={isMobile ? 12 : 14} className="text-green-500" />
          <span className="text-xs text-green-500">Running</span>
        </div>
      </div>

      {/* Tabs - Horizontal scroll on mobile */}
      <div className="flex bg-card border-b border-border overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center space-x-2 px-3 py-2 flex-shrink-0 border-r border-border cursor-pointer transition-colors duration-200 ${
              isMobile ? "text-xs" : "text-sm"
            } ${
              activeTab === tab.id
                ? "bg-background text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <Icon name={tab.icon} size={isMobile ? 12 : 14} />
            <span className={isMobile ? "hidden xs:inline" : ""}>
              {isMobile ? tab.label.replace('.js', '') : tab.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile Tab Indicators */}
      {isMobile && (
        <div className="flex justify-center space-x-1 py-1 bg-muted/50 border-b border-border">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                activeTab === tab.id ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      )}

      {/* Code Body */}
      <div className="relative">
        <div className={`p-3 sm:p-4 bg-background font-mono overflow-x-auto ${getCodeHeight()} overflow-y-auto leading-relaxed ${
          isMobile ? "text-xs" : "text-sm"
        }`}>
          {highlightSyntax(codeExamples[activeTab])}
        </div>

        {isTyping && (
          <motion.div 
            className={`absolute bg-card border border-border rounded flex items-center space-x-2 ${
              isMobile ? "bottom-2 right-2 px-2 py-1 text-xs" : "bottom-4 right-4 px-3 py-1 text-xs"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            <span className="text-muted-foreground whitespace-nowrap">Typing...</span>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className={`flex items-center justify-between bg-primary text-primary-foreground ${
        isMobile ? "px-3 py-1 text-xs" : "px-4 py-2 text-xs"
      }`}>
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide flex-1">
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Icon name="GitBranch" size={isMobile ? 10 : 12} />
            <span className={isMobile ? "hidden xs:inline" : ""}>main</span>
          </div>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Icon name="CheckCircle" size={isMobile ? 10 : 12} />
            <span className={isMobile ? "hidden sm:inline" : ""}>No issues</span>
          </div>
        </div>
        
        <div className={`flex items-center space-x-2 sm:space-x-4 ml-2 flex-shrink-0 ${
          isMobile ? "text-xs" : ""
        }`}>
          <span className={isMobile ? "hidden sm:inline" : ""}>JS</span>
          <span className={isMobile ? "hidden md:inline" : ""}>UTF-8</span>
          <span className={isMobile ? "hidden md:inline" : ""}>LF</span>
          {isMobile && (
            <span className="text-xs opacity-80">
              {tabs.find(tab => tab.id === activeTab)?.label.replace('.js', '')}
            </span>
          )}
        </div>
      </div>

      {/* Mobile Quick Actions */}
      {isMobile && (
        <div className="flex bg-muted/50 border-t border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-1 flex items-center justify-center py-2 text-xs transition-colors ${
                activeTab === tab.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon name={tab.icon} size={12} />
              <span className="ml-1 hidden xs:inline">
                {tab.label.replace('.js', '')}
              </span>
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CodePreview;