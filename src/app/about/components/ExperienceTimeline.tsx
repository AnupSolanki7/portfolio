import Icon from '@/component/AppIcon';
import React from 'react';

const ExperienceTimeline = () => {
  const timelineData = [
    {
      id: 1,
      period: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Solguruz LLP",
      location: "Ahmedabad, India",
      type: "Full-time",
      status: "current",
      achievements: [
        "Led development of 5+ high-impact React applications including Property Dollar and iManagify",
        "Conducted 30+ technical interviews, establishing robust hiring standards",
        "Mentored junior developers, improving team productivity by 40%",
        "Implemented modern React patterns reducing code complexity by 35%",
        "Collaborated with cross-functional teams to deliver projects 20% ahead of schedule"
      ],
      technologies: ["React 18", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit", "Node.js"],
      icon: "Briefcase",
      color: "primary"
    },
    {
      id: 2,
      period: "2021 - 2022",
      title: "Frontend Developer",
      company: "Solguruz LLP",
      location: "Ahmedabad, India",
      type: "Full-time",
      status: "completed",
      achievements: [
        "Developed responsive web applications using React and modern CSS frameworks",
        "Integrated RESTful APIs and implemented state management solutions",
        "Optimized application performance resulting in 50% faster load times",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Participated in code reviews and maintained high code quality standards"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Bootstrap", "Git", "REST APIs"],
      icon: "Code",
      color: "secondary"
    },
    {
      id: 3,
      period: "2020 - 2021",
      title: "Junior Frontend Developer",
      company: "Freelance Projects",
      location: "Remote",
      type: "Contract",
      status: "completed",
      achievements: [
        "Built 10+ responsive websites for small businesses and startups",
        "Learned modern JavaScript frameworks and development tools",
        "Implemented responsive designs with mobile-first approach",
        "Gained experience with version control and collaborative development",
        "Developed strong problem-solving and client communication skills"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "WordPress"],
      icon: "Laptop",
      color: "accent"
    },
    {
      id: 4,
      period: "2019 - 2020",
      title: "Computer Science Education",
      company: "Gujarat Technological University",
      location: "Gujarat, India",
      type: "Education",
      status: "completed",
      achievements: [
        "Completed Bachelor\'s degree in Computer Science Engineering",
        "Specialized in web technologies and software development",
        "Led university tech club organizing coding competitions",
        "Completed internship projects in web development",
        "Graduated with distinction and technical excellence award"
      ],
      technologies: ["C++", "Java", "Python", "Database Systems", "Web Technologies", "Software Engineering"],
      icon: "GraduationCap",
      color: "success"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'text-success';
      case 'completed':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  const getIconBgColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary text-primary-foreground';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground';
      case 'accent':
        return 'bg-accent text-accent-foreground';
      case 'success':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Clock" size={20} className="text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Professional Journey</h3>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

        {timelineData?.map((item, index) => (
          <div key={item?.id} className="relative flex gap-6 pb-8 last:pb-0">
            {/* Timeline Icon */}
            <div className={`relative z-10 w-12 h-12 rounded-full ${getIconBgColor(item?.color)} flex items-center justify-center flex-shrink-0`}>
              <Icon name={item?.icon} size={18} />
              {item?.status === 'current' && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card">
                  <div className="w-2 h-2 bg-success rounded-full m-0.5 animate-pulse"></div>
                </div>
              )}
            </div>

            {/* Timeline Content */}
            <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors duration-200">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{item?.title}</h4>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>{item?.company}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{item?.location}</span>
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-1">
                  <span className={`text-sm font-medium ${getStatusColor(item?.status)}`}>
                    {item?.period}
                  </span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {item?.type}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h5>
                <ul className="space-y-1">
                  {item?.achievements?.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="ChevronRight" size={12} className="text-primary mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {item?.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;