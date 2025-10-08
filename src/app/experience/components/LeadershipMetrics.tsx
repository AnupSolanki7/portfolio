import Icon from '@/component/AppIcon';
import React from 'react';

const LeadershipMetrics = () => {
  const leadershipStats = [
    {
      metric: '30+',
      label: 'Technical Interviews',
      description: 'Conducted comprehensive technical assessments',
      icon: 'Users',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      details: [
        'Frontend developer positions',
        'Junior to senior level candidates',
        'Technical and cultural fit assessment',
        '85% successful hire rate'
      ]
    },
    {
      metric: '5+',
      label: 'Projects Led',
      description: 'High-impact projects delivered successfully',
      icon: 'Target',
      color: 'text-success',
      bgColor: 'bg-success/10',
      details: [
        'Cross-functional team coordination',
        'Stakeholder requirement management',
        'Technical architecture decisions',
        '95% on-time delivery rate'
      ]
    },
    {
      metric: '8',
      label: 'Developers Mentored',
      description: 'Junior developers guided and trained',
      icon: 'GraduationCap',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      details: [
        'Code review and feedback',
        'Career development guidance',
        'Technical skill development',
        '100% retention rate'
      ]
    },
    {
      metric: '3x',
      label: 'Team Productivity',
      description: 'Improvement through process optimization',
      icon: 'TrendingUp',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      details: [
        'Implemented agile methodologies',
        'Automated testing processes',
        'Code quality improvements',
        'Knowledge sharing sessions'
      ]
    }
  ];

  const teamImpact = [
    {
      area: 'Code Quality',
      improvement: '40%',
      description: 'Reduction in bugs through better practices',
      icon: 'Code',
      initiatives: [
        'Implemented comprehensive code review process',
        'Established coding standards and guidelines',
        'Introduced automated testing workflows',
        'Regular refactoring sessions'
      ]
    },
    {
      area: 'Development Speed',
      improvement: '35%',
      description: 'Faster delivery through optimized workflows',
      icon: 'Zap',
      initiatives: [
        'Streamlined development processes',
        'Implemented CI/CD pipelines',
        'Created reusable component library',
        'Automated repetitive tasks'
      ]
    },
    {
      area: 'Team Knowledge',
      improvement: '60%',
      description: 'Enhanced skills through mentoring programs',
      icon: 'BookOpen',
      initiatives: [
        'Weekly knowledge sharing sessions',
        'Technical documentation creation',
        'Pair programming initiatives',
        'Internal training workshops'
      ]
    },
    {
      area: 'Project Success',
      improvement: '25%',
      description: 'Higher success rate in project deliveries',
      icon: 'Award',
      initiatives: [
        'Better requirement analysis',
        'Risk assessment and mitigation',
        'Stakeholder communication improvement',
        'Agile methodology adoption'
      ]
    }
  ];

  const recognitionItems = [
    {
      title: 'Employee of the Quarter Q3 2023',
      organization: 'Solguruz',
      description: 'Recognized for exceptional leadership and project delivery',
      date: 'September 2023',
      icon: 'Trophy'
    },
    {
      title: 'Technical Excellence Award 2023',
      organization: 'Solguruz',
      description: 'Outstanding contribution to technical innovation',
      date: 'December 2023',
      icon: 'Star'
    },
    {
      title: 'Mentorship Recognition 2024',
      organization: 'Solguruz',
      description: 'Excellence in developing junior team members',
      date: 'March 2024',
      icon: 'Heart'
    },
    {
      title: 'Top Performer 2023',
      organization: 'Solguruz',
      description: 'Consistent high performance across all projects',
      date: 'January 2024',
      icon: 'Medal'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Leadership Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leadershipStats?.map((stat, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center`}>
                <Icon name={stat?.icon} size={24} className={stat?.color} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-2xl font-bold ${stat?.color}`}>{stat?.metric}</div>
                <div className="text-sm font-medium text-foreground">{stat?.label}</div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{stat?.description}</p>
            
            <div className="space-y-2">
              {stat?.details?.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <Icon name="ArrowRight" size={12} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Team Impact Metrics */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="TrendingUp" size={20} className="text-success" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Team Impact Metrics</h3>
            <p className="text-sm text-muted-foreground">Measurable improvements achieved through leadership</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teamImpact?.map((impact, index) => (
            <div key={index} className="bg-muted/20 border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Icon name={impact?.icon} size={20} className="text-primary" />
                  <div>
                    <h4 className="font-medium text-foreground">{impact?.area}</h4>
                    <p className="text-xs text-muted-foreground">{impact?.description}</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-success">{impact?.improvement}</div>
              </div>
              
              <div className="space-y-2">
                {impact?.initiatives?.map((initiative, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={12} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{initiative}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recognition & Awards */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
            <Icon name="Award" size={20} className="text-warning" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Recognition & Awards</h3>
            <p className="text-sm text-muted-foreground">Professional achievements and peer recognition</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recognitionItems?.map((item, index) => (
            <div key={index} className="bg-muted/20 border border-border rounded-lg p-4 hover:border-warning/50 transition-colors duration-200">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={item?.icon} size={16} className="text-warning" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground mb-1">{item?.title}</h4>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                    <span>{item?.organization}</span>
                    <span>•</span>
                    <span>{item?.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Leadership Philosophy */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Lightbulb" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Leadership Philosophy</h3>
            <p className="text-sm text-muted-foreground">Core principles that guide my approach to team leadership</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <h4 className="font-medium text-foreground mb-2">People First</h4>
            <p className="text-sm text-muted-foreground">
              Investing in team members' growth and well-being creates sustainable success for everyone.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Target" size={24} className="text-success" />
            </div>
            <h4 className="font-medium text-foreground mb-2">Results Driven</h4>
            <p className="text-sm text-muted-foreground">
              Clear goals, measurable outcomes, and continuous improvement drive exceptional results.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="BookOpen" size={24} className="text-warning" />
            </div>
            <h4 className="font-medium text-foreground mb-2">Continuous Learning</h4>
            <p className="text-sm text-muted-foreground">
              Fostering a culture of learning and knowledge sharing keeps teams innovative and adaptable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipMetrics;