import Icon from '@/component/AppIcon';
import React from 'react';

const SkillsProgress = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React.js', level: 95, experience: '2+ years', projects: 15 },
        { name: 'JavaScript (ES6+)', level: 92, experience: '2+ years', projects: 20 },
        { name: 'TypeScript', level: 88, experience: '1.5 years', projects: 8 },
        { name: 'HTML5/CSS3', level: 95, experience: '2+ years', projects: 25 },
        { name: 'Tailwind CSS', level: 90, experience: '1.5 years', projects: 12 },
        { name: 'Redux/Context API', level: 85, experience: '1.5 years', projects: 10 }
      ]
    },
    {
      category: 'Backend & Database',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 82, experience: '1.5 years', projects: 12 },
        { name: 'Express.js', level: 80, experience: '1.5 years', projects: 10 },
        { name: 'MongoDB', level: 78, experience: '1 year', projects: 8 },
        { name: 'PostgreSQL', level: 75, experience: '1 year', projects: 6 },
        { name: 'GraphQL', level: 70, experience: '8 months', projects: 4 },
        { name: 'REST APIs', level: 88, experience: '2 years', projects: 15 }
      ]
    },
    {
      category: 'Tools & DevOps',
      icon: 'Settings',
      skills: [
        { name: 'Git/GitHub', level: 90, experience: '2+ years', projects: 25 },
        { name: 'VS Code', level: 95, experience: '2+ years', projects: 25 },
        { name: 'Webpack/Vite', level: 75, experience: '1 year', projects: 8 },
        { name: 'Docker', level: 65, experience: '6 months', projects: 3 },
        { name: 'AWS Services', level: 70, experience: '8 months', projects: 5 },
        { name: 'CI/CD Pipelines', level: 68, experience: '6 months', projects: 4 }
      ]
    },
    {
      category: 'Soft Skills & Leadership',
      icon: 'Users',
      skills: [
        { name: 'Team Leadership', level: 85, experience: '1 year', projects: 5 },
        { name: 'Technical Interviews', level: 90, experience: '1 year', projects: 30 },
        { name: 'Code Reviews', level: 88, experience: '1.5 years', projects: 50 },
        { name: 'Mentoring', level: 82, experience: '1 year', projects: 8 },
        { name: 'Client Communication', level: 85, experience: '2 years', projects: 15 },
        { name: 'Project Management', level: 78, experience: '1.5 years', projects: 12 }
      ]
    }
  ];

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'bg-success';
    if (level >= 80) return 'bg-primary';
    if (level >= 70) return 'bg-warning';
    return 'bg-muted-foreground';
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="space-y-8">
      {skillCategories?.map((category, categoryIdx) => (
        <div key={categoryIdx} className="bg-card border border-border rounded-lg p-6">
          {/* Category Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={category?.icon} size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{category?.category}</h3>
              <p className="text-sm text-muted-foreground">
                {category?.skills?.length} skills tracked
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {category?.skills?.map((skill, skillIdx) => (
              <div key={skillIdx} className="bg-muted/20 border border-border rounded-lg p-4 hover:border-primary/50 transition-colors duration-200">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground truncate">{skill?.name}</h4>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
                      <span>{skill?.experience}</span>
                      <span>•</span>
                      <span>{skill?.projects} projects</span>
                    </div>
                  </div>
                  <div className="text-right ml-3">
                    <div className="text-sm font-semibold text-foreground">{skill?.level}%</div>
                    <div className={`text-xs px-2 py-1 rounded ${
                      skill?.level >= 90 ? 'bg-success/10 text-success' :
                      skill?.level >= 80 ? 'bg-primary/10 text-primary' :
                      skill?.level >= 70 ? 'bg-warning/10 text-warning': 'bg-muted text-muted-foreground'
                    }`}>
                      {getSkillLevelText(skill?.level)}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-border rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${getSkillLevelColor(skill?.level)}`}
                      style={{ width: `${skill?.level}%` }}
                    ></div>
                  </div>
                  
                  {/* Progress Markers */}
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Skill Stats */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{skill?.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="FolderOpen" size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{skill?.projects} projects</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Skills Summary */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Skills Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-1">
              {skillCategories?.reduce((acc, cat) => acc + cat?.skills?.filter(s => s?.level >= 90)?.length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">
              {skillCategories?.reduce((acc, cat) => acc + cat?.skills?.filter(s => s?.level >= 80 && s?.level < 90)?.length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Advanced</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning mb-1">
              {skillCategories?.reduce((acc, cat) => acc + cat?.skills?.filter(s => s?.level >= 70 && s?.level < 80)?.length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Intermediate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-1">
              {skillCategories?.reduce((acc, cat) => acc + cat?.skills?.length, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Total Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsProgress;