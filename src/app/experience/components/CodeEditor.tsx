import Icon from '@/component/AppIcon';
import Button from '@/component/ui/Button';
import React, { useState, useEffect } from 'react';

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState('experience-timeline');
  const [isTyping, setIsTyping] = useState(false);
  const [currentLine, setCurrentLine] = useState(1);

  const codeFiles = [
    {
      id: 'experience-timeline',
      name: 'experience-timeline.js',
      language: 'javascript',
      content: `// Professional Experience Timeline
// Anup Solanki - Frontend Developer

const professionalJourney = {
  currentRole: {
    company: "Solguruz",
    position: "Frontend Developer",
    duration: "2022 - Present",
    location: "Ahmedabad, India",
    
    keyAchievements: [
      "Conducted 30+ technical interviews",
      "Led 5+ high-impact projects",
      "Mentored 8 junior developers",
      "Improved team productivity by 3x"
    ],
    
    technicalSkills: [
      "React.js", "JavaScript", "TypeScript",
      "Node.js", "MongoDB", "PostgreSQL"
    ],
    
    leadership: {
      interviewsConducted: 30,
      projectsLed: 5,
      teamMembersManaged: 8,
      productivityImprovement: "300%"
    }
  },
  
  previousExperience: {
    freelance: {
      duration: "2021 - 2022",
      projectsCompleted: 12,
      clientSatisfaction: "100%",
      industriesServed: 8
    },
    
    internship: {
      company: "TechStart Solutions",
      duration: "2021 (6 months)",
      achievement: "Outstanding Intern Award"
    }
  },
  
  recognition: [
    "Employee of the Quarter Q3 2023",
    "Technical Excellence Award 2023",
    "Mentorship Recognition 2024"
  ]
};

// Export professional experience data
export default professionalJourney;`
    },
    {
      id: 'leadership-metrics',
      name: 'leadership-metrics.js',
      language: 'javascript',
      content: `// Leadership Impact Metrics
// Quantified results from team leadership

const leadershipImpact = {
  teamMetrics: {
    codeQuality: {
      improvement: "40%",
      method: "Code review processes & standards"
    },
    
    developmentSpeed: {
      improvement: "35%",
      method: "Optimized workflows & CI/CD"
    },
    
    teamKnowledge: {
      improvement: "60%",
      method: "Mentoring & knowledge sharing"
    },
    
    projectSuccess: {
      improvement: "25%",
      method: "Better planning & risk management"
    }
  },
  
  interviewProcess: {
    candidatesInterviewed: 30,
    successfulHires: 25,
    averageInterviewDuration: "90 minutes",
    assessmentAreas: [
      "Technical proficiency",
      "Problem-solving approach",
      "Cultural fit",
      "Communication skills"
    ]
  },
  
  mentoringProgram: {
    developersGuided: 8,
    retentionRate: "100%",
    promotions: 3,
    skillImprovementAreas: [
      "React best practices",
      "Code architecture",
      "Testing strategies",
      "Performance optimization"
    ]
  }
};

export { leadershipImpact };`
    },
    {
      id: 'skills-matrix',
      name: 'skills-matrix.js',
      language: 'javascript',
      content: `// Technical Skills Proficiency Matrix
// Current skill levels and experience

const skillsMatrix = {
  frontend: {
    "React.js": { level: 95, experience: "2+ years", projects: 15 },
    "JavaScript": { level: 92, experience: "2+ years", projects: 20 },
    "TypeScript": { level: 88, experience: "1.5 years", projects: 8 },
    "HTML5/CSS3": { level: 95, experience: "2+ years", projects: 25 },
    "Tailwind CSS": { level: 90, experience: "1.5 years", projects: 12 }
  },
  
  backend: {
    "Node.js": { level: 82, experience: "1.5 years", projects: 12 },
    "Express.js": { level: 80, experience: "1.5 years", projects: 10 },
    "MongoDB": { level: 78, experience: "1 year", projects: 8 },
    "PostgreSQL": { level: 75, experience: "1 year", projects: 6 },
    "GraphQL": { level: 70, experience: "8 months", projects: 4 }
  },
  
  tools: {
    "Git/GitHub": { level: 90, experience: "2+ years", projects: 25 },
    "VS Code": { level: 95, experience: "2+ years", projects: 25 },
    "Docker": { level: 65, experience: "6 months", projects: 3 },
    "AWS": { level: 70, experience: "8 months", projects: 5 }
  },
  
  leadership: {
    "Team Management": { level: 85, experience: "1 year", projects: 5 },
    "Technical Interviews": { level: 90, experience: "1 year", interviews: 30 },
    "Mentoring": { level: 82, experience: "1 year", mentees: 8 }
  }
};

export default skillsMatrix;`
    }
  ];

  const activeFile = codeFiles?.find(file => file?.id === activeTab);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => (prev % 50) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (fileId: React.SetStateAction<string>) => {
    setIsTyping(true);
    setTimeout(() => {
      setActiveTab(fileId);
      setIsTyping(false);
    }, 300);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Editor Header */}
      <div className="bg-muted/20 border-b border-border">
        {/* Tab Bar */}
        <div className="flex items-center overflow-x-auto">
          {codeFiles?.map((file) => (
            <button
              key={file?.id}
              onClick={() => handleTabClick(file?.id)}
              className={`vs-code-tab flex items-center space-x-2 min-w-0 ${
                activeTab === file?.id ? 'active' : ''
              }`}
            >
              <Icon name="FileText" size={14} />
              <span className="text-xs truncate">{file?.name}</span>
              {activeTab === file?.id && (
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Editor Toolbar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="Code" size={12} />
              <span>{activeFile?.language}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Icon name="GitBranch" size={12} />
              <span>main</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="Copy"
              iconPosition="left"
              className="text-xs"
            >
              Copy
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Download"
              iconPosition="left"
              className="text-xs"
            >
              Export
            </Button>
          </div>
        </div>
      </div>
      {/* Editor Content */}
      <div className="relative">
        <div className="flex">
          {/* Line Numbers */}
          <div className="bg-muted/10 border-r border-border px-3 py-4 text-xs text-muted-foreground font-mono select-none">
            {activeFile?.content?.split('\n')?.map((_, index) => (
              <div 
                key={index} 
                className={`leading-6 text-right ${
                  index + 1 === currentLine ? 'text-primary bg-primary/10' : ''
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Code Content */}
          <div className="flex-1 p-4 font-mono text-sm overflow-x-auto">
            {isTyping ? (
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Loading file...</span>
              </div>
            ) : (
              <pre className="text-foreground leading-6">
                <code dangerouslySetInnerHTML={{
                  __html: (activeFile?.content ?? '').replace(/\/\/ (.*)/g, '<span class="text-success">// $1</span>')
                    .replace(/const|let|var|function|export|import|from/g, '<span class="text-primary">$&</span>')
                    .replace(/"([^"]*)"/g, '<span class="text-warning">"$1"</span>')
                    .replace(/\b(\d+)\b/g, '<span class="text-accent">$1</span>')
                    .replace(/\{|\}|\[|\]|\(|\)/g, '<span class="text-muted-foreground">$&</span>')
                }} />
              </pre>
            )}
          </div>
        </div>

        {/* Cursor */}
        {!isTyping && (
          <div 
            className="absolute w-0.5 h-6 bg-primary animate-blink"
            style={{
              left: `${Math.random() * 200 + 100}px`,
              top: `${currentLine * 24 + 16}px`
            }}
          ></div>
        )}
      </div>
      {/* Editor Footer */}
      <div className="bg-primary text-primary-foreground px-4 py-1 text-xs flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>Ln {currentLine}, Col 1</span>
          <span>UTF-8</span>
          <span>JavaScript</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="CheckCircle" size={12} />
            <span>No errors</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="AlertTriangle" size={12} />
            <span>0 warnings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;