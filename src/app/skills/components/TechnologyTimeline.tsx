import React, { useState } from 'react';
import Icon from '../../../component/AppIcon';

const TechnologyTimeline = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const timelineData:any = {
    '2022': {
      title: 'Foundation Year',
      subtitle: 'Building Core Skills',
      technologies: [
        {
          name: 'HTML5 & CSS3',
          level: 'Mastered',
          description: 'Semantic markup, responsive design, CSS Grid & Flexbox',
          icon: 'Code',
          color: '#E34F26'
        },
        {
          name: 'JavaScript ES6+',
          level: 'Learning',
          description: 'Modern JavaScript features, DOM manipulation, async programming',
          icon: 'Zap',
          color: '#F7DF1E'
        },
        {
          name: 'React.js',
          level: 'Beginner',
          description: 'Component-based architecture, hooks, state management',
          icon: 'Atom',
          color: '#61DAFB'
        }
      ]
    },
    '2023': {
      title: 'Growth Phase',
      subtitle: 'Expanding Expertise',
      technologies: [
        {
          name: 'React.js Advanced',
          level: 'Proficient',
          description: 'Custom hooks, context API, performance optimization',
          icon: 'Atom',
          color: '#61DAFB'
        },
        {
          name: 'TypeScript',
          level: 'Learning',
          description: 'Type safety, interfaces, generics, advanced patterns',
          icon: 'Shield',
          color: '#3178C6'
        },
        {
          name: 'Node.js & Express',
          level: 'Intermediate',
          description: 'Server-side development, REST APIs, middleware',
          icon: 'Server',
          color: '#339933'
        },
        {
          name: 'Tailwind CSS',
          level: 'Proficient',
          description: 'Utility-first CSS, responsive design, component styling',
          icon: 'Palette',
          color: '#06B6D4'
        }
      ]
    },
    '2024': {
      title: 'Specialization Era',
      subtitle: 'Advanced Development & AI Integration',
      technologies: [
        {
          name: 'Next.js',
          level: 'Advanced',
          description: 'SSR, SSG, API routes, performance optimization',
          icon: 'Layers',
          color: '#000000'
        },
        {
          name: 'AI Integration',
          level: 'Emerging',
          description: 'OpenAI APIs, machine learning models, intelligent UIs',
          icon: 'Brain',
          color: '#FF6B6B'
        },
        {
          name: 'GraphQL',
          level: 'Intermediate',
          description: 'Query optimization, Apollo Client, schema design',
          icon: 'Database',
          color: '#E10098'
        },
        {
          name: 'DevOps & Cloud',
          level: 'Learning',
          description: 'Docker, AWS, CI/CD pipelines, deployment strategies',
          icon: 'Cloud',
          color: '#FF9900'
        }
      ]
    }
  };

  const getLevelColor = (level: any) => {
    switch (level) {
      case 'Mastered': return 'text-success bg-success/10 border-success/20';
      case 'Advanced': return 'text-primary bg-primary/10 border-primary/20';
      case 'Proficient': return 'text-accent bg-accent/10 border-accent/20';
      case 'Intermediate': return 'text-warning bg-warning/10 border-warning/20';
      case 'Learning': return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'Emerging': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Clock" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Technology Learning Journey</h3>
        </div>
        <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
          {Object.keys(timelineData)?.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1 text-sm rounded transition-all duration-200 ${
                selectedYear === year
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-bold text-foreground">{timelineData?.[selectedYear]?.title}</h4>
        <p className="text-muted-foreground">{timelineData?.[selectedYear]?.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {timelineData?.[selectedYear]?.technologies?.map((tech:any, index:any) => (
          <div
            key={index}
            className="group p-4 bg-muted hover:bg-border rounded-lg transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-start space-x-3">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${tech?.color}20` }}
              >
                <Icon
                  name={tech?.icon}
                  size={20}
                  style={{ color: tech?.color }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {tech?.name}
                  </h5>
                  <span className={`px-2 py-1 text-xs rounded-full border ${getLevelColor(tech?.level)}`}>
                    {tech?.level}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tech?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Progress Indicator */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Learning Progress</span>
          <span>{selectedYear} Milestones</span>
        </div>
        <div className="mt-2 flex space-x-1">
          {Object.keys(timelineData)?.map((year, index) => (
            <div
              key={year}
              className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                parseInt(year) <= parseInt(selectedYear)
                  ? 'bg-primary' :'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyTimeline;