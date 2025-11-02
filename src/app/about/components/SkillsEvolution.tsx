import Icon from '@/component/AppIcon';
import React, { useState } from 'react';

interface SkillsEvolutionProps {
  theme?: {
    background: string;
    editor: string;
    surface: string;
    surfaceLight: string;
    surfaceLighter: string;
    border: string;
    borderLight: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    comment: string;
    keyword: string;
    string: string;
    function: string;
    variable: string;
    number: string;
    class: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
  };
}

type Skill = {
  name: string;
  category: string;
  icon: string;
  file: string;
};

type SkillCategory = {
  title: string;
  icon: string;
  fileType: string;
  color: string;
  skills: Skill[];
};

const SkillsEvolution = ({ theme }: SkillsEvolutionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const t = theme || {
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

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: "Monitor",
      fileType: "frontend.ts",
      color: t.keyword,
      skills: [
        { name: "React", category: "Library", icon: "Code", file: "react.js" },
        { name: "TypeScript", category: "Language", icon: "Code", file: "typescript.ts" },
        { name: "Next.js", category: "Framework", icon: "Globe", file: "next.js" },
        { name: "Tailwind CSS", category: "Styling", icon: "Palette", file: "tailwind.css" },
        { name: "JavaScript", category: "Language", icon: "Code", file: "javascript.js" }
      ]
    },
    {
      title: "Backend",
      icon: "Server", 
      fileType: "backend.js",
      color: t.string,
      skills: [
        { name: "Node.js", category: "Runtime", icon: "Server", file: "node.js" },
        { name: "Express", category: "Framework", icon: "Code", file: "express.js" },
        { name: "MongoDB", category: "Database", icon: "Database", file: "mongodb.js" },
        { name: "REST APIs", category: "Architecture", icon: "Api", file: "rest.js" }
      ]
    },
    {
      title: "Tools",
      icon: "Settings",
      fileType: "tools.json",
      color: t.function,
      skills: [
        { name: "Git & GitHub", category: "Version Control", icon: "GitBranch", file: "git.md" },
        { name: "VS Code", category: "Editor", icon: "Code", file: "vscode.json" },
        { name: "Vite", category: "Build Tool", icon: "Zap", file: "vite.js" },
        { name: "Figma", category: "Design", icon: "Palette", file: "figma.json" }
      ]
    },
    {
      title: "Soft Skills",
      icon: "Users",
      fileType: "soft-skills.md",
      color: t.class,
      skills: [
        { name: "Technical Interviewing", category: "Hiring", icon: "Users", file: "interviews.md" },
        { name: "Team Mentoring", category: "Leadership", icon: "GraduationCap", file: "mentoring.md" },
        { name: "Problem Solving", category: "Analytical", icon: "Lightbulb", file: "problem-solving.md" },
        { name: "Project Leadership", category: "Management", icon: "Target", file: "leadership.md" }
      ]
    }
  ];

  const currentCategory = skillCategories.find(cat => cat.title.toLowerCase() === selectedCategory) || skillCategories[0];

  return (
    <div className="space-y-4 font-mono">
      {/* File Header */}
      <div className={`${t.comment} text-sm mb-2`}>
        {`// skills-evolution.js - Tech Stack Categories`}
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2">
        {skillCategories.map((category) => (
          <button
            key={category.title}
            onClick={() => setSelectedCategory(category.title.toLowerCase())}
            className={`flex items-center gap-2 px-3 py-2 rounded border transition-colors ${
              selectedCategory === category.title.toLowerCase()
                ? `${t.surfaceLight} ${t.textPrimary} border ${t.border}`
                : `${t.surface} ${t.textSecondary} border ${t.border} hover:${t.surfaceLight}`
            }`}
          >
            <Icon name={category.icon} size={14} className={category.color} />
            <span className="text-sm font-mono">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {currentCategory.skills.map((skill, index) => (
          <div 
            key={index}
            className={`${t.surface} border ${t.border} rounded p-3 hover:${t.surfaceLight} transition-colors`}
          >
            <div className="flex items-start gap-3">
              {/* Skill Icon */}
              <div className={`w-8 h-8 ${t.surfaceLight} rounded flex items-center justify-center border ${t.border}`}>
                <Icon name={skill.icon} size={14} className={currentCategory.color} />
              </div>
              
              {/* Skill Info */}
              <div className="flex-1 min-w-0">
                <div className={`text-sm ${t.textPrimary} font-mono`}>
                  {skill.name}
                </div>
                <div className={`text-xs ${t.textSecondary} mt-1`}>
                  {skill.category}
                </div>
                <div className={`text-xs ${t.textMuted} font-mono mt-1`}>
                  {skill.file}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={`${t.surface} border ${t.border} rounded p-3 text-center`}>
        <div className="flex items-center justify-center gap-2 text-xs">
          <Icon name="Code" size={10} className={t.keyword} />
          <span className={t.textMuted}>skills-evolution.js</span>
          <span className={t.textMuted}>•</span>
          <span className={t.textMuted}>{currentCategory.skills.length} skills</span>
          <span className={t.textMuted}>•</span>
          <span className={t.textMuted}>{currentCategory.fileType}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsEvolution;