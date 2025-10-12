import Icon from '@/component/AppIcon';
import React from 'react';

const LeadershipExperience = () => {
  const leadershipAreas = [
    {
      icon: "Users",
      title: "Technical Interviewing",
      description: "Conducted comprehensive technical assessments",
      highlights: ["30+ interviews", "15+ developers hired"]
    },
    {
      icon: "GraduationCap",
      title: "Team Mentoring",
      description: "Guided developers to senior roles",
      highlights: ["8+ mentees", "40% productivity improvement"]
    },
    {
      icon: "GitBranch",
      title: "Process Leadership",
      description: "Established development workflows",
      highlights: ["Code review standards", "Team collaboration"]
    },
    {
      icon: "Lightbulb",
      title: "Problem Solving",
      description: "Systematic approach to complex challenges",
      highlights: ["Architecture decisions", "Performance optimization"]
    }
  ];

  const interviewFocus = [
    {
      icon: "Code",
      title: "Technical Skills",
      items: ["React fundamentals", "JavaScript proficiency", "Problem-solving"]
    },
    {
      icon: "Layout",
      title: "System Design", 
      items: ["Component architecture", "State management", "Scalability"]
    },
    {
      icon: "Users",
      title: "Team Fit",
      items: ["Communication", "Collaboration", "Growth mindset"]
    }
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">

      {/* Leadership Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {leadershipAreas.map((area, index) => (
          <div key={index} className="bg-card/50 border border-border rounded-xl p-5 space-y-3 group hover:bg-card/80 transition-all duration-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Icon name={area.icon} size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground">{area.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{area.description}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {area.highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-primary/5 text-foreground px-2 py-1 rounded border border-primary/10"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Interview Focus */}
      <div className="bg-card/30 border border-border rounded-xl p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="ClipboardCheck" size={18} className="text-primary" />
            <h4 className="font-semibold text-foreground">Interview Focus Areas</h4>
          </div>
          <p className="text-sm text-muted-foreground">Key evaluation criteria for technical interviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {interviewFocus.map((focus, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Icon name={focus.icon} size={18} className="text-primary" />
              </div>
              <h5 className="font-medium text-foreground">{focus.title}</h5>
              <div className="space-y-1">
                {focus.items.map((item, idx) => (
                  <div key={idx} className="text-xs text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Icon name="Compass" size={18} className="text-primary" />
          <h4 className="font-semibold text-foreground">Leadership Philosophy</h4>
        </div>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Creating more leaders, not followers. Focusing on empowerment, growth mindset, 
          and helping individuals leverage their strengths while developing new capabilities.
        </p>
      </div>
    </div>
  );
};

export default LeadershipExperience;