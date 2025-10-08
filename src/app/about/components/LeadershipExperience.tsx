import Icon from '@/component/AppIcon';
import React from 'react';

const LeadershipExperience = () => {
  const leadershipStats = [
    {
      icon: "Users",
      value: "30+",
      label: "Technical Interviews",
      description: "Conducted comprehensive technical assessments",
      color: "primary"
    },
    {
      icon: "UserCheck",
      value: "15+",
      label: "Developers Hired",
      description: "Successfully identified and onboarded talent",
      color: "success"
    },
    {
      icon: "GraduationCap",
      value: "8+",
      label: "Mentees Guided",
      description: "Mentored junior developers to senior roles",
      color: "accent"
    },
    {
      icon: "TrendingUp",
      value: "40%",
      label: "Team Productivity",
      description: "Improvement through mentoring and processes",
      color: "warning"
    }
  ];

  const interviewProcess = [
    {
      step: 1,
      title: "Resume Screening",
      description: "Evaluate technical background and project experience",
      duration: "15 mins",
      focus: ["Technical skills alignment", "Project complexity", "Growth trajectory"]
    },
    {
      step: 2,
      title: "Technical Assessment",
      description: "Hands-on coding challenges and problem-solving",
      duration: "45 mins",
      focus: ["React fundamentals", "JavaScript proficiency", "Problem-solving approach"]
    },
    {
      step: 3,
      title: "System Design",
      description: "Architecture discussion and scalability thinking",
      duration: "30 mins",
      focus: ["Component architecture", "State management", "Performance considerations"]
    },
    {
      step: 4,
      title: "Cultural Fit",
      description: "Team collaboration and communication assessment",
      duration: "20 mins",
      focus: ["Communication skills", "Team collaboration", "Learning mindset"]
    }
  ];

  const mentoringAreas = [
    {
      icon: "Code",
      title: "Technical Skills",
      description: "React patterns, JavaScript best practices, and modern development workflows",
      impact: "Reduced code review cycles by 50%"
    },
    {
      icon: "GitBranch",
      title: "Development Workflow",
      description: "Git workflows, code review processes, and deployment strategies",
      impact: "Improved team collaboration efficiency"
    },
    {
      icon: "Lightbulb",
      title: "Problem Solving",
      description: "Systematic debugging, performance optimization, and architectural thinking",
      impact: "Enhanced problem-solving capabilities"
    },
    {
      icon: "Users",
      title: "Soft Skills",
      description: "Communication, project management, and stakeholder interaction",
      impact: "Better cross-functional collaboration"
    }
  ];

  const getStatColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10 border-primary/20';
      case 'success':
        return 'text-success bg-success/10 border-success/20';
      case 'accent':
        return 'text-accent bg-accent/10 border-accent/20';
      case 'warning':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Crown" size={20} className="text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Leadership Experience</h3>
      </div>
      {/* Leadership Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {leadershipStats?.map((stat, index) => (
          <div key={index} className={`bg-card border rounded-lg p-6 text-center ${getStatColor(stat?.color)}`}>
            <div className="flex justify-center mb-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat?.color === 'primary' ? 'bg-primary' : stat?.color === 'success' ? 'bg-success' : stat?.color === 'accent' ? 'bg-accent' : 'bg-warning'}`}>
                <Icon name={stat?.icon} size={20} className="text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">{stat?.value}</div>
            <div className="font-medium text-foreground mb-2">{stat?.label}</div>
            <div className="text-sm text-muted-foreground">{stat?.description}</div>
          </div>
        ))}
      </div>
      {/* Interview Process */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <Icon name="ClipboardCheck" size={20} className="text-primary" />
          <h4 className="text-lg font-semibold text-foreground">Technical Interview Process</h4>
        </div>

        <div className="space-y-6">
          {interviewProcess?.map((process, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {process.step}
                </div>
              </div>
              
              <div className="flex-1 bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-foreground">{process.title}</h5>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20">
                    {process.duration}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{process.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {process.focus?.map((item, focusIndex) => (
                    <span
                      key={focusIndex}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mentoring Areas */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <Icon name="UserCheck" size={20} className="text-primary" />
          <h4 className="text-lg font-semibold text-foreground">Mentoring & Development</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentoringAreas?.map((area, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-4 hover:bg-border/50 transition-colors duration-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={area?.icon} size={18} className="text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground mb-1">{area?.title}</h5>
                  <p className="text-sm text-muted-foreground mb-2">{area?.description}</p>
                  <div className="flex items-center gap-1 text-xs text-success">
                    <Icon name="CheckCircle" size={12} />
                    <span>{area?.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Leadership Philosophy */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="Compass" size={20} className="text-primary" />
          <h4 className="text-lg font-semibold text-foreground">Leadership Philosophy</h4>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-foreground leading-relaxed mb-4">
            My approach to leadership is rooted in <strong className="text-primary">empowerment and growth</strong>. 
            I believe that the best leaders are those who create more leaders, not followers. Through my experience 
            conducting technical interviews and mentoring developers, I've learned that success comes from understanding each individual's strengths and helping them leverage those strengths while addressing areas for improvement.
          </p>
          
          <p className="text-foreground leading-relaxed">
            Whether I'm evaluating a candidate's technical skills or guiding a junior developer through complex problems, 
            my focus is always on <strong className="text-primary">potential and growth mindset</strong>. I've found that 
            technical skills can be taught, but passion, curiosity, and the willingness to learn are the true indicators 
            of long-term success in our field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipExperience;