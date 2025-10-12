import Icon from '@/component/AppIcon';
import React from 'react';

const LeadershipMetrics = () => {
  const leadershipStats = [
    {
      metric: '30+',
      label: 'Interviews',
      icon: 'Users',
    },
    {
      metric: '5+',
      label: 'Projects Led',
      icon: 'Target',
    },
    {
      metric: '8',
      label: 'Mentored',
      icon: 'GraduationCap',
    },
    {
      metric: '3x',
      label: 'Productivity',
      icon: 'TrendingUp',
    }
  ];

  const teamImpact = [
    {
      area: 'Code Quality',
      improvement: '40%',
      icon: 'Code',
    },
    {
      area: 'Development Speed',
      improvement: '35%',
      icon: 'Zap',
    },
    {
      area: 'Team Knowledge',
      improvement: '60%',
      icon: 'BookOpen',
    },
    {
      area: 'Project Success',
      improvement: '25%',
      icon: 'Award',
    }
  ];

  const recognitionItems = [
    {
      title: 'Employee of the Quarter',
      organization: 'Solguruz',
      icon: 'Trophy'
    },
    {
      title: 'Technical Excellence',
      organization: 'Solguruz',
      icon: 'Star'
    },
    {
      title: 'Mentorship Recognition',
      organization: 'Solguruz',
      icon: 'Heart'
    },
    {
      title: 'Top Performer',
      organization: 'Solguruz',
      icon: 'Medal'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Leadership Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {leadershipStats.map((stat, index) => (
          <div key={index} className="bg-card/50 border border-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">{stat.metric}</div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Icon name={stat.icon} size={14} />
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Team Impact */}
      <div className="bg-card/30 border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="TrendingUp" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Team Impact</h3>
            <p className="text-sm text-muted-foreground">Measurable improvements</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamImpact.map((impact, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Icon name={impact.icon} size={18} className="text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">{impact.area}</div>
                <div className="text-sm text-primary">{impact.improvement}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recognition */}
      <div className="bg-card/30 border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Award" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Recognition</h3>
            <p className="text-sm text-muted-foreground">Professional achievements</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recognitionItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={item.icon} size={16} className="text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.organization}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Principles */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Icon name="Lightbulb" size={18} />
          <span className="text-sm font-medium">Leadership Principles</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Icon name="Users" size={20} className="text-primary mx-auto" />
            <div className="font-medium text-foreground">People First</div>
          </div>
          <div className="space-y-2">
            <Icon name="Target" size={20} className="text-primary mx-auto" />
            <div className="font-medium text-foreground">Results Driven</div>
          </div>
          <div className="space-y-2">
            <Icon name="BookOpen" size={20} className="text-primary mx-auto" />
            <div className="font-medium text-foreground">Continuous Learning</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipMetrics;