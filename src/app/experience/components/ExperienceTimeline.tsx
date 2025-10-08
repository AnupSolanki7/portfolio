import Icon from '@/component/AppIcon';
import Button from '@/component/ui/Button';
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
      description: `Leading frontend development initiatives with React ecosystem mastery.\nDriving technical excellence while mentoring junior developers and conducting interviews.\nDelivering high-impact projects that solve real business problems.`,
      achievements: [
        {
          metric: '30+',
          description: 'Technical interviews conducted',
          impact: 'Helped build strong development team'
        },
        {
          metric: '5+',
          description: 'High-impact projects led',
          impact: 'Delivered solutions driving business growth'
        },
        {
          metric: '95%',
          description: 'Project delivery success rate',
          impact: 'Consistent on-time, quality deliveries'
        },
        {
          metric: '3x',
          description: 'Team productivity improvement',
          impact: 'Through mentoring and process optimization'
        }
      ],
      keyProjects: [
        {
          name: 'Property Dollar',
          description: 'Real estate platform with advanced search and analytics',
          technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
          impact: 'Increased user engagement by 40%'
        },
        {
          name: 'iManagify',
          description: 'Enterprise management system with complex workflows',
          technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
          impact: 'Reduced operational costs by 25%'
        }
      ],
      responsibilities: [
        'Lead frontend architecture decisions and technical strategy',
        'Mentor junior developers and conduct technical interviews',
        'Collaborate with stakeholders to translate business requirements',
        'Implement best practices for code quality and performance',
        'Drive adoption of modern React patterns and tools'
      ],
      skills: ['React', 'JavaScript', 'TypeScript', 'Redux', 'Node.js', 'GraphQL', 'MongoDB', 'PostgreSQL', 'AWS'],
      recognition: [
        'Employee of the Quarter Q3 2023',
        'Technical Excellence Award 2023',
        'Mentorship Recognition 2024'
      ]
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
      description: `Built diverse web applications for startups and small businesses.\nGained experience across multiple industries and technology stacks.\nDeveloped strong client communication and project management skills.`,
      achievements: [
        {
          metric: '12+',
          description: 'Successful projects delivered',
          impact: 'Built reputation for quality and reliability'
        },
        {
          metric: '100%',
          description: 'Client satisfaction rate',
          impact: 'All projects completed to client satisfaction'
        },
        {
          metric: '8',
          description: 'Different industries served',
          impact: 'Gained diverse domain knowledge'
        },
        {
          metric: '50%',
          description: 'Repeat client rate',
          impact: 'Strong client relationships built'
        }
      ],
      keyProjects: [
        {
          name: 'E-commerce Platform',
          description: 'Custom online store with payment integration',
          technologies: ['React', 'Express', 'Stripe', 'MySQL'],
          impact: 'Generated $100K+ in first year'
        },
        {
          name: 'Healthcare Dashboard',
          description: 'Patient management system for clinic',
          technologies: ['Vue.js', 'Laravel', 'Chart.js', 'PostgreSQL'],
          impact: 'Reduced administrative time by 60%'
        }
      ],
      responsibilities: [
        'Full-stack development from concept to deployment',
        'Direct client communication and requirement gathering',
        'Project timeline management and delivery coordination',
        'Technical documentation and user training',
        'Post-launch support and maintenance'
      ],
      skills: ['React', 'Vue.js', 'Node.js', 'Laravel', 'MySQL', 'PostgreSQL', 'Stripe', 'AWS'],
      recognition: [
        'Top Rated Freelancer on Upwork',
        '5-star average client rating',
        'Featured project showcase'
      ]
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
      description: `Foundation-building experience in professional web development.\nLearned industry best practices and modern development workflows.\nContributed to real client projects under senior developer guidance.`,
      achievements: [
        {
          metric: '3',
          description: 'Client projects contributed to',
          impact: 'Gained real-world development experience'
        },
        {
          metric: '90%',
          description: 'Code review approval rate',
          impact: 'Demonstrated strong coding standards'
        },
        {
          metric: '2',
          description: 'Technologies mastered',
          impact: 'React and modern JavaScript proficiency'
        },
        {
          metric: '1',
          description: 'Full-time offer received',
          impact: 'Recognition of potential and performance'
        }
      ],
      keyProjects: [
        {
          name: 'Company Website Redesign',
          description: 'Modern responsive website with CMS integration',
          technologies: ['React', 'Gatsby', 'Contentful', 'Netlify'],
          impact: 'Improved site performance by 70%'
        },
        {
          name: 'Internal Tool Development',
          description: 'Employee time tracking and project management tool',
          technologies: ['React', 'Firebase', 'Material-UI'],
          impact: 'Streamlined internal processes'
        }
      ],
      responsibilities: [
        'Frontend component development and testing',
        'Code review participation and learning',
        'Bug fixing and feature implementation',
        'Documentation writing and maintenance',
        'Team collaboration and knowledge sharing'
      ],
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Firebase', 'Gatsby'],
      recognition: [
        'Outstanding Intern Award',
        'Full-time job offer',
        'Positive mentor feedback'
      ]
    }
  ];

  const toggleExpanded = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'text-success';
      case 'completed':
        return 'text-muted-foreground';
      default:
        return 'text-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'current':
        return 'Play';
      case 'completed':
        return 'CheckCircle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="space-y-6">
      {experiences?.map((exp, index) => (
        <div key={exp?.id} className="relative">
          {/* Timeline Line */}
          {index < experiences?.length - 1 && (
            <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
          )}
          
          {/* Timeline Node */}
          <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-card border-2 border-primary flex items-center justify-center">
            <div className={`w-2 h-2 rounded-full ${exp?.status === 'current' ? 'bg-success animate-pulse' : 'bg-primary'}`}></div>
          </div>

          {/* Experience Card */}
          <div className="ml-12 bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-200">
            {/* Card Header */}
            <div 
              className="p-6 cursor-pointer hover:bg-muted/50 transition-colors duration-200"
              onClick={() => toggleExpanded(exp?.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={exp?.logo} 
                      alt={`${exp?.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">{exp?.position}</h3>
                      <Icon 
                        name={getStatusIcon(exp?.status)} 
                        size={16} 
                        className={getStatusColor(exp?.status)}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-foreground">{exp?.company}</span>
                      <span>•</span>
                      <span>{exp?.type}</span>
                      <span>•</span>
                      <span>{exp?.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{exp?.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} className="text-muted-foreground" />
                        <span className="text-muted-foreground">{exp?.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  iconName={expandedRole === exp?.id ? "ChevronUp" : "ChevronDown"}
                  iconPosition="right"
                  className="ml-4"
                >
                  {expandedRole === exp?.id ? 'Less' : 'More'}
                </Button>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedRole === exp?.id && (
              <div className="border-t border-border bg-muted/20 animate-fade-in-up">
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Overview</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {exp?.description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp?.achievements?.map((achievement, idx) => (
                        <div key={idx} className="bg-card border border-border rounded-lg p-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl font-bold text-primary">{achievement?.metric}</div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-foreground">{achievement?.description}</div>
                              <div className="text-xs text-muted-foreground">{achievement?.impact}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Projects */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">Notable Projects</h4>
                    <div className="space-y-4">
                      {exp?.keyProjects?.map((project, idx) => (
                        <div key={idx} className="bg-card border border-border rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-medium text-foreground">{project?.name}</h5>
                            <span className="text-xs text-success bg-success/10 px-2 py-1 rounded">
                              {project?.impact}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{project?.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project?.technologies?.map((tech, techIdx) => (
                              <span 
                                key={techIdx}
                                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">Key Responsibilities</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {exp?.responsibilities?.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Icon name="ArrowRight" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills & Recognition */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp?.skills?.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recognition */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">Recognition</h4>
                      <div className="space-y-2">
                        {exp?.recognition?.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Icon name="Award" size={14} className="text-warning" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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