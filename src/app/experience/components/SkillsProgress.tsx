import Icon from '@/component/AppIcon';
import React from 'react';

const SkillsProgress = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: 'Monitor',
      skills: [
        { name: 'React.js', level: 'Expert' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'Next.js', level: 'Advanced' }
      ]
    },
    {
      category: 'Backend',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'GraphQL', level: 'Intermediate' }
      ]
    },
    {
      category: 'Tools',
      icon: 'Settings',
      skills: [
        { name: 'Git/GitHub', level: 'Expert' },
        { name: 'VS Code', level: 'Expert' },
        { name: 'Docker', level: 'Learning' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'CI/CD', level: 'Learning' }
      ]
    },
    {
      category: 'Leadership',
      icon: 'Users',
      skills: [
        { name: 'Team Leadership', level: 'Advanced' },
        { name: 'Technical Interviews', level: 'Expert' },
        { name: 'Mentoring', level: 'Advanced' },
        { name: 'Project Management', level: 'Intermediate' },
        { name: 'Client Communication', level: 'Advanced' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-primary';
      case 'Advanced': return 'text-secondary';
      case 'Intermediate': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  const getLevelBgColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-primary/10';
      case 'Advanced': return 'bg-secondary/10';
      case 'Intermediate': return 'bg-accent/10';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, categoryIdx) => (
        <div key={categoryIdx} className="bg-card/50 border border-border rounded-xl p-6 space-y-4">
          {/* Category Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={category.icon} size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{category.category}</h3>
              <p className="text-sm text-muted-foreground">{category.skills.length} skills</p>
            </div>
          </div>

          {/* Skills List */}
          <div className="space-y-2">
            {category.skills.map((skill, skillIdx) => (
              <div key={skillIdx} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors">
                <span className="text-sm text-foreground font-medium">{skill.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${getLevelBgColor(skill.level)} ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;