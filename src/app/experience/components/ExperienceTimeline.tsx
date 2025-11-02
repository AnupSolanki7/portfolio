import Icon from '@/component/AppIcon';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceTimelineProps {
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

const ExperienceTimeline = ({ theme }: ExperienceTimelineProps) => {
  const [expandedRole, setExpandedRole] = useState<string | null>('solguruz');

  // Default theme if not provided
  const defaultTheme = {
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

  const t = theme || defaultTheme;

  const experiences = [
    {
      id: 'solguruz',
      company: 'Solguruz',
      position: 'Frontend Developer',
      duration: '2022 - Present',
      period: '2+ Years',
      location: 'Ahmedabad, India',
      type: 'Full-time',
      status: 'current',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
      description: 'Leading frontend development with React ecosystem mastery, mentoring developers, and delivering high-impact projects.',
      achievements: [
        '30+ technical interviews conducted',
        '5+ high-impact projects led',
        '95% project delivery success rate',
        '3x team productivity improvement'
      ],
      skills: ['React', 'TypeScript', 'Redux', 'Node.js', 'GraphQL', 'MongoDB'],
      fileType: 'solguruz.js'
    },
    {
      id: 'freelance',
      company: 'Freelance Projects',
      position: 'Full Stack Developer',
      duration: '2021 - 2022',
      period: '1 Year',
      location: 'Remote',
      type: 'Contract',
      status: 'completed',
      logo: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&h=100&fit=crop&crop=center',
      description: 'Built diverse web applications for startups and small businesses across multiple industries.',
      achievements: [
        '12+ successful projects delivered',
        '100% client satisfaction rate',
        '8 different industries served',
        '50% repeat client rate'
      ],
      skills: ['React', 'Vue.js', 'Node.js', 'MySQL', 'PostgreSQL', 'AWS'],
      fileType: 'freelance.ts'
    },
    {
      id: 'internship',
      company: 'TechStart Solutions',
      position: 'Frontend Developer Intern',
      duration: '2021 (6 months)',
      period: '6 Months',
      location: 'Ahmedabad, India',
      type: 'Internship',
      status: 'completed',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&crop=center',
      description: 'Foundation-building experience in professional web development with real client projects.',
      achievements: [
        '3 client projects contributed to',
        '90% code review approval rate',
        '2 technologies mastered',
        'Full-time offer received'
      ],
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Firebase'],
      fileType: 'internship.json'
    }
  ];

  const toggleExpanded = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <div className="space-y-8 font-mono">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="relative">
          {/* Timeline Line */}
          {index < experiences.length - 1 && (
            <div className={`absolute left-6 top-20 w-0.5 h-full ${t.surfaceLight}`}></div>
          )}
          
          {/* Timeline Node */}
          <div className={`absolute left-5 top-8 w-3 h-3 rounded-full ${t.surface} border-2 ${exp.status === 'current' ? t.success : t.accent} flex items-center justify-center`}>
            <div className={`w-1.5 h-1.5 rounded-full ${exp.status === 'current' ? t.success : t.accent} ${exp.status === 'current' ? 'animate-pulse' : ''}`}></div>
          </div>

          {/* Experience Card */}
          <div className={`ml-12 ${t.surface} border ${t.border} rounded-lg overflow-hidden hover:${t.surfaceLight} transition-all duration-300`}>
            {/* Card Header */}
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleExpanded(exp.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-lg overflow-hidden ${t.surfaceLight} flex-shrink-0 border ${t.border}`}>
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className={`text-lg font-semibold ${t.textPrimary}`}>{exp.position}</h3>
                      {exp.status === 'current' && (
                        <div className={`w-2 h-2 ${t.success} rounded-full animate-pulse`}></div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <span className={`font-medium ${t.textPrimary}`}>{exp.company}</span>
                      <span className={t.textMuted}>•</span>
                      <span className={t.textSecondary}>{exp.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={14} className={t.textMuted} />
                        <span className={t.textSecondary}>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={14} className={t.textMuted} />
                        <span className={t.textSecondary}>{exp.period}</span>
                      </div>
                    </div>

                    {/* File Type Badge */}
                    <div className={`inline-flex items-center gap-1 px-2 py-1 ${t.surfaceLight} rounded text-xs ${t.textMuted} border ${t.border}`}>
                      <Icon name="FileCode" size={10} />
                      <span>{exp.fileType}</span>
                    </div>
                  </div>
                </div>
                
                <button className={`p-2 hover:${t.surfaceLight} rounded-lg transition-colors`}>
                  <Icon 
                    name={expandedRole === exp.id ? "ChevronUp" : "ChevronDown"} 
                    size={16} 
                    className={t.textMuted}
                  />
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedRole === exp.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`border-t ${t.border} ${t.surfaceLight} px-6 py-4 space-y-4`}
                >
                  {/* Description */}
                  <div>
                    <div className={`flex items-center gap-2 mb-2 text-xs ${t.textMuted} uppercase tracking-wide`}>
                      <Icon name="FileText" size={12} />
                      <span>DESCRIPTION</span>
                    </div>
                    <p className={`text-sm ${t.textSecondary} leading-relaxed`}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className={`flex items-center gap-2 mb-3 text-xs ${t.textMuted} uppercase tracking-wide`}>
                      <Icon name="CheckCircle" size={12} className={t.success} />
                      <span>KEY ACHIEVEMENTS</span>
                    </div>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${t.success} flex-shrink-0`}></div>
                          <span className={t.textSecondary}>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <div className={`flex items-center gap-2 mb-3 text-xs ${t.textMuted} uppercase tracking-wide`}>
                      <Icon name="Code" size={12} className={t.keyword} />
                      <span>TECHNOLOGIES</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1 text-xs ${t.surfaceLighter} ${t.textPrimary} rounded border ${t.border} font-mono`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                      exp.status === 'current' 
                        ? `${t.success} ${t.surfaceLight} border ${t.border}`
                        : `${t.textMuted} ${t.surface} border ${t.border}`
                    }`}>
                      <Icon 
                        name={exp.status === 'current' ? "PlayCircle" : "CheckCircle"} 
                        size={10} 
                      />
                      <span className="font-mono">
                        {exp.status === 'current' ? 'ACTIVE' : 'COMPLETED'}
                      </span>
                    </div>
                    
                    <div className={`text-xs ${t.textMuted} font-mono`}>
                      {exp.type.toUpperCase()}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}

      {/* Timeline Footer */}
      <div className={`text-center pt-6 border-t ${t.border}`}>
        <div className={`inline-flex items-center gap-2 px-3 py-1 ${t.surfaceLight} rounded-lg border ${t.border}`}>
          <Icon name="Code" size={12} className={t.keyword} />
          <span className={`text-xs ${t.textMuted} font-mono`}>
            Total Experience: {experiences.length} roles • 3+ years
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;