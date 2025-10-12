import Icon from '@/component/AppIcon';
import React, { useState } from 'react';

const ExperienceTimeline = () => {
  const [expandedRole, setExpandedRole] = useState<string | null>('solguruz');

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
      skills: ['React', 'TypeScript', 'Redux', 'Node.js', 'GraphQL', 'MongoDB']
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
      skills: ['React', 'Vue.js', 'Node.js', 'MySQL', 'PostgreSQL', 'AWS']
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
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Firebase']
    }
  ];

  const toggleExpanded = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="relative">
          {/* Timeline Line */}
          {index < experiences.length - 1 && (
            <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
          )}
          
          {/* Timeline Node */}
          <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-card border-2 border-primary flex items-center justify-center">
            <div className={`w-2 h-2 rounded-full ${exp.status === 'current' ? 'bg-success animate-pulse' : 'bg-primary'}`}></div>
          </div>

          {/* Experience Card */}
          <div className="ml-12 bg-card/50 border border-border rounded-xl overflow-hidden hover:bg-card/80 transition-all duration-300">
            {/* Card Header */}
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleExpanded(exp.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                      {exp.status === 'current' && (
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Icon name={expandedRole === exp.id ? "ChevronUp" : "ChevronDown"} size={16} />
                </button>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedRole === exp.id && (
              <div className="border-t border-border bg-muted/20 px-6 py-4 space-y-4">
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements</h4>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;