import Icon from '@/component/AppIcon';
import React, { useState } from 'react';

type Technology = {
  name: string;
  count: number;
};

type TechnologyFilterProps = {
  technologies: Technology[];
  selectedTechs: string[];
  onTechToggle: (tech: string) => void;
};

const TechnologyFilter: React.FC<TechnologyFilterProps> = ({ technologies, selectedTechs, onTechToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const techCategories = {
    'Frontend': ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript'],
    'Styling': ['Tailwind CSS', 'Styled Components', 'SCSS', 'CSS Modules'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'Django', 'FastAPI'],
    'Database': ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase'],
    'Tools': ['Webpack', 'Vite', 'Docker', 'AWS', 'Vercel']
  };

  const getTechCount = (tech: string) => {
    return technologies?.filter(t => t?.name === tech)?.reduce((sum, t) => sum + t?.count, 0);
  };

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-500',
      'Next.js': 'bg-black',
      'Vue.js': 'bg-green-500',
      'Angular': 'bg-red-500',
      'TypeScript': 'bg-blue-600',
      'JavaScript': 'bg-yellow-500',
      'Tailwind CSS': 'bg-cyan-500',
      'Node.js': 'bg-green-600',
      'MongoDB': 'bg-green-700',
      'Firebase': 'bg-orange-500'
    };
    return colors[tech] || 'bg-muted';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
          <Icon name="Code" size={20} />
          <span>Technologies</span>
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <span>{isExpanded ? 'Show Less' : 'Show All'}</span>
          <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={16} />
        </button>
      </div>
      <div className="space-y-4">
        {Object.entries(techCategories)?.map(([category, techs]) => {
          const visibleTechs = isExpanded ? techs : techs?.slice(0, 4);
          
          return (
            <div key={category}>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {visibleTechs?.map((tech) => {
                  const count = getTechCount(tech);
                  const isSelected = selectedTechs?.includes(tech);
                  
                  if (count === 0) return null;
                  
                  return (
                    <button
                      key={tech}
                      onClick={() => onTechToggle(tech)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? 'bg-primary text-primary-foreground scale-105'
                          : 'bg-muted text-muted-foreground hover:bg-border hover:text-foreground'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${getTechColor(tech)}`}></div>
                      <span>{tech}</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                        isSelected
                          ? 'bg-primary-foreground text-primary'
                          : 'bg-background text-muted-foreground'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {selectedTechs?.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {selectedTechs?.length} technology{selectedTechs?.length !== 1 ? 'ies' : ''} selected
            </span>
            <button
              onClick={() => selectedTechs?.forEach(tech => onTechToggle(tech))}
              className="text-sm text-primary hover:text-primary-foreground hover:bg-primary px-2 py-1 rounded transition-colors duration-200"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologyFilter;