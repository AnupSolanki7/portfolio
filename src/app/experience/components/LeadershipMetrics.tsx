import Icon from '@/component/AppIcon';
import React from 'react';

interface LeadershipMetricsProps {
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

const LeadershipMetrics = ({ theme }: LeadershipMetricsProps) => {
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

  const leadershipData = [
    {
      section: 'metrics',
      title: 'Leadership Metrics',
      icon: 'BarChart3',
      color: t.keyword,
      items: [
        { metric: '30+', label: 'Interviews', file: 'interviews.json', color: t.keyword },
        { metric: '7+', label: 'Projects Led', file: 'projects.ts', color: t.string },
        { metric: '8', label: 'Mentored', file: 'mentorship.md', color: t.function },
        { metric: '3x', label: 'Productivity', file: 'metrics.yaml', color: t.class },
      ]
    },
    {
      section: 'impact', 
      title: 'Team Impact',
      icon: 'TrendingUp',
      color: t.success,
      items: [
        { metric: '95%', label: 'UI/UX Consistency', file: 'uiux.json', color: t.success },
        { metric: '40%', label: 'Dev Speed', file: 'speed.ts', color: t.keyword },
        { metric: '45%', label: 'Code Quality', file: 'quality.js', color: t.string },
        { metric: '3x', label: 'Collaboration', file: 'team.yaml', color: t.class },
      ]
    },
    {
      section: 'recognition',
      title: 'Recognition',
      icon: 'Award',
      color: t.warning,
      items: [
        { metric: 'Rising Star', label: 'Solguruz', file: 'award.md', color: t.warning },
        { metric: 'AI Leadership', label: 'Automation', file: 'ai.md', color: t.function },
        { metric: 'Frontend', label: 'Revamp', file: 'revamp.tsx', color: t.class },
        { metric: 'Mentorship', label: 'Recognition', file: 'mentor.md', color: t.success },
      ]
    }
  ];

  return (
    <div className="space-y-4 font-mono">
      {/* File Header */}
      <div className={`${t.comment} text-sm mb-2`}>
        {`// leadership.js - Metrics & Impact`}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leadershipData.map((section, sectionIndex) => (
          <div 
            key={section.section}
            className={`${t.surface} border ${t.border} rounded p-4 space-y-3`}
          >
            {/* Section Header */}
            <div className="flex items-center gap-2">
              <Icon name={section.icon} size={14} className={section.color} />
              <span className={`text-sm ${t.textPrimary} font-mono`}>{section.title}</span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-2">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className={`${t.surfaceLight} border ${t.border} rounded p-2 space-y-1 hover:${t.surfaceLighter} transition-colors`}
                >
                  <div className={`text-sm font-mono ${item.color}`}>
                    {item.metric}
                  </div>
                  <div className={`text-xs ${t.textSecondary} truncate`}>
                    {item.label}
                  </div>
                  <div className={`text-xs ${t.textMuted} font-mono`}>
                    {item.file}
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
          <span className={t.textMuted}>leadership.js v3.0</span>
          <span className={t.textMuted}>•</span>
          <span className={t.textMuted}>Last updated: Today</span>
        </div>
      </div>
    </div>
  );
};

export default LeadershipMetrics;