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
        <span className="text-muted-foreground text-xs w-8 text-right pr-2 select-none">
          {i + 1}
        </span>
        <span className="flex-1">
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

  return (
    <motion.div
      className="w-[550px] max-w-3xl bg-card border border-border rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-muted px-4 py-2 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-xs text-muted-foreground ml-4">
            ~/anupsolanki/portfolio/
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Play" size={14} className="text-green-500" />
          <span className="text-xs text-green-500">Running</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-card border-b border-border overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center space-x-2 px-4 py-2 text-sm border-r border-border cursor-pointer transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-background text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <Icon name={tab.icon} size={14} />
            <span>{tab.label}</span>
          </div>
        ))}
      </div>

      {/* Code Body */}
      <div className="relative">
        <div className="p-4 bg-background font-mono text-sm overflow-x-auto h-96 overflow-y-auto leading-relaxed">
          {highlightSyntax(codeExamples[activeTab])}
        </div>

        {isTyping && (
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-card px-3 py-1 rounded border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Typing...</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-2 text-xs">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="GitBranch" size={12} />
            <span>main</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="CheckCircle" size={12} />
            <span>No issues</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span>JS</span>
          <span>UTF-8</span>
          <span>LF</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CodePreview;
