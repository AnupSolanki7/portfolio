import Icon from '@/component/AppIcon';
import React from 'react';

const ExperienceTimeline = () => {
  const timelineData = [
    {
      id: 1,
      period: "2023 - Present",
      title: "Software Developer (Frontend)",
      company: "Solguruz LLP",
      location: "Ahmedabad, India",
      type: "Full-time",
      status: "current",
      highlights: [
        "Leading frontend revamps using React & Next.js",
        "Implemented AI-powered automation in dashboards",
        "Conducted 30+ technical interviews for hiring",
        "Mentored 8 developers, fostering clean code culture",
        "Received 'Rising Star Award' for outstanding impact"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "MUI", "AI APIs", "Vercel"," GitHub","Next Auth"],
      icon: "Briefcase",
      color: "primary"
    },
    {
      id: 2,
      period: "2022 - 2023",
      title: "Frontend Developer",
      company: "WiseSkulls",
      location: "Ahmedabad, India",
      type: "Full-time",
      status: "completed",
      highlights: [
        "Built dynamic dashboards and admin panels",
        "Collaborated with backend teams to optimize API performance",
        "Worked on Property Dollar and iManagify platforms",
        "Enhanced UI performance and responsiveness by 40%",
        "Improved codebase structure and state management"
      ],
      technologies: ["React","Next.js", "JavaScript", "Feathers.js", "MongoDB", "Bootstrap"],
      icon: "Code",
      color: "secondary"
    },
    {
      id: 4,
      period: "2016 - 2020",
      title: "Bachelor of Engineering",
      company: "GTU University",
      location: "Gujarat, India",
      type: "Education",
      status: "completed",
      icon: "GraduationCap",
      color: "success"
    }
  ];

  const getIconBgColor = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary text-primary-foreground';
      case 'secondary': return 'bg-secondary text-secondary-foreground';
      case 'accent': return 'bg-accent text-accent-foreground';
      case 'success': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Timeline */}
      <div className="relative mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-border to-border"></div>

        {timelineData?.map((item, index) => (
          <div key={item?.id} className="relative flex gap-6 pb-8 last:pb-0 group">
            {/* Icon with Connection Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className={`w-12 h-12 rounded-xl ${getIconBgColor(item?.color)} flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
                <Icon name={item?.icon} size={18} />
              </div>
              {/* Connection Dot */}
              <div className={`absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-card ${
                item?.status === 'current' ? 'bg-success animate-pulse' : 'bg-primary'
              }`}></div>
            </div>

            {/* Content Card */}
            <div className="flex-1 bg-card/50 border border-border rounded-xl p-5 transition-all duration-200 group-hover:bg-card/80 group-hover:shadow-sm">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-foreground">{item?.title}</h4>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-medium">{item?.company}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{item?.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {item?.type}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item?.period}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-4">
                  {item?.highlights?.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-2 text-xs bg-primary/5 text-foreground rounded border border-primary/10"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1">
                {item?.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="text-center text-sm text-muted-foreground">
        <p>2+ years of professional growth in modern frontend development — React, Next.js & AI integration.</p>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
