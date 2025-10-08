import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/component/ui/Button';
import Icon from '@/component/AppIcon';

type Category = { value: string; label: string; count?: number };
type Technology = { value: string; label: string; count?: number };
type SortOption = 'recent' | 'featured' | 'impact' | 'alphabetical';
type ViewMode = 'grid' | 'list';

interface ProjectFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  technologies: Technology[];
  selectedTech: string;
  onTechChange: (tech: string) => void;
  sortBy: string;
  onSortChange: (sort: SortOption) => void;
  viewMode: string;
  onViewModeChange: (mode: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  technologies,
  selectedTech,
  onTechChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange
}) => {
  const sortOptions = [
    { value: 'recent', label: 'Most Recent', icon: 'Clock' },
    { value: 'featured', label: 'Featured', icon: 'Star' },
    { value: 'impact', label: 'High Impact', icon: 'TrendingUp' },
    { value: 'alphabetical', label: 'A-Z', icon: 'ArrowUpDown' }
  ];

  const viewModes = [
    { value: 'grid', icon: 'Grid3X3' },
    { value: 'list', icon: 'List' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={16} className="text-primary" />
          <h3 className="text-sm font-medium text-foreground">Filter & Sort</h3>
        </div>
        
        {/* View Mode Toggle */}
        <div className="flex items-center space-x-1 bg-muted rounded-md p-1">
          {viewModes?.map((mode) => (
            <button
              key={mode?.value}
              onClick={() => onViewModeChange(mode?.value)}
              className={`p-2 rounded transition-colors duration-200 ${
                viewMode === mode?.value 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={mode?.icon} size={14} />
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories */}
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3 block">
            Category
          </label>
          <div className="space-y-2">
            {categories?.map((category) => (
              <motion.button
                key={category?.value}
                onClick={() => onCategoryChange(category?.value)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                  selectedCategory === category?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{category?.label}</span>
                <span className="text-xs opacity-70">({category?.count})</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3 block">
            Technology
          </label>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {technologies?.map((tech) => (
              <motion.button
                key={tech?.value}
                onClick={() => onTechChange(tech?.value)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                  selectedTech === tech?.value
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{tech?.label}</span>
                <span className="text-xs opacity-70">({tech?.count})</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3 block">
            Sort By
          </label>
          <div className="space-y-2">
            {sortOptions?.map((option) => (
              <motion.button
                key={option?.value}
                onClick={() => onSortChange(option?.value as SortOption)}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                  sortBy === option?.value
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon name={option?.icon} size={14} />
                <span>{option?.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3 block">
            Quick Actions
          </label>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={() => {
                onCategoryChange('all');
                onTechChange('all');
                onSortChange('recent' as SortOption);
              }}
              className="w-full justify-start"
            >
              Reset Filters
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              iconName="Star"
              iconPosition="left"
              onClick={() => {
                onCategoryChange('all');
                onSortChange('featured' as SortOption);
              }}
              className="w-full justify-start"
            >
              Show Featured
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              iconName="ExternalLink"
              iconPosition="left"
              onClick={() => window.open('https://github.com/anupsolanki', '_blank')}
              className="w-full justify-start"
            >
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;