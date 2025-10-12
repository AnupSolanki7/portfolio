import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/component/AppIcon';

type Category = { value: string; label: string };

interface ProjectFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange
}) => {
  return (
    <div className="text-center space-y-6 mb-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Icon name="FolderOpen" size={18} />
          <span className="text-sm font-medium">Project Collection</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          A showcase of all projects built with modern technologies and user-centric design
        </p>
      </div>
    </div>
  );
};

export default ProjectFilter;