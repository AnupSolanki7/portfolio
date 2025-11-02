import Icon from '@/component/AppIcon';
import React from 'react';

interface SkillsProgressProps {
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

const SkillsProgress = ({ theme }: SkillsProgressProps) => {
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

  const skillsData = [
    {
      section: 'frontend',
      title: 'Frontend',
      icon: 'Monitor',
      color: t.keyword,
      items: [
        { name: 'React.js', level: 'Expert', file: 'react.js' },
        { name: 'TypeScript', level: 'Advanced', file: 'typescript.ts' },
        { name: 'Next.js', level: 'Advanced', file: 'next.js' },
        { name: 'Tailwind', level: 'Expert', file: 'tailwind.css' },
      ]
    },
    {
      section: 'backend',
      title: 'Backend', 
      icon: 'Server',
      color: t.string,
      items: [
        { name: 'Node.js', level: 'Advanced', file: 'node.js' },
        { name: 'Express', level: 'Advanced', file: 'express.js' },
        { name: 'MongoDB', level: 'Intermediate', file: 'mongodb.js' },
        { name: 'PostgreSQL', level: 'Intermediate', file: 'postgresql.sql' },
      ]
    },
    {
      section: 'tools',
      title: 'Tools',
      icon: 'Settings',
      color: t.function,
      items: [
        { name: 'Git/GitHub', level: 'Expert', file: 'git.md' },
        { name: 'VS Code', level: 'Expert', file: 'vscode.json' },
        { name: 'Docker', level: 'Learning', file: 'docker.yaml' },
        { name: 'AWS', level: 'Intermediate', file: 'aws.json' },
      ]
    },
    {
      section: 'leadership',
      title: 'Leadership',
      icon: 'Users',
      color: t.class,
      items: [
        { name: 'Team Lead', level: 'Advanced', file: 'team.md' },
        { name: 'Interviews', level: 'Expert', file: 'interviews.md' },
        { name: 'Mentoring', level: 'Advanced', file: 'mentoring.md' },
        { name: 'Project Mgmt', level: 'Intermediate', file: 'project.md' },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return t.success;
      case 'Advanced': return t.keyword;
      case 'Intermediate': return t.string;
      case 'Learning': return t.warning;
      default: return t.textMuted;
    }
  };

  return (
    <div className="space-y-4 font-mono">
      {/* File Header */}
      <div className={`${t.comment} text-sm mb-2`}>
        {`// skills.js - Tech Stack & Proficiencies`}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillsData.map((section, sectionIndex) => (
          <div 
            key={section.section}
            className={`${t.surface} border ${t.border} rounded p-4 space-y-3`}
          >
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name={section.icon} size={14} className={section.color} />
                <span className={`text-sm ${t.textPrimary} font-mono`}>{section.title}</span>
              </div>
              <div className={`text-xs ${t.textMuted}`}>
                {section.items.length} files
              </div>
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-4 gap-2">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className={`flex items-center flex-col justify-between p-2 ${t.surfaceLight} border ${t.border} rounded hover:${t.surfaceLighter} transition-colors`}
                >
                  <div className="flex flex-col items-center gap-2 min-w-0 flex-1">
                    <Icon name="FileCode" size={12} className={t.textMuted} />
                    <div className="min-w-0 flex flex-col">
                      <div className={`text-sm ${t.textPrimary} truncate`}>
                        {item.name}
                      </div>
                      <div className={`text-xs ${t.textMuted} font-mono truncate`}>
                        {item.file}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`text-xs px-2 py-1 rounded border ${t.border} ${getLevelColor(item.level)} font-mono`}>
                    {item.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={`${t.surface} border ${t.border} rounded p-3 text-center`}>
        <div className="flex items-center justify-center gap-2 text-xs">
          <Icon name="Code" size={10} className={t.keyword} />
          <span className={t.textMuted}>skills.js v2.0</span>
          <span className={t.textMuted}>•</span>
          <span className={t.textMuted}>{skillsData.flatMap(s => s.items).length} technologies</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsProgress;