import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/component/AppIcon';

interface ProjectStatsProps {
  stats: {
    totalProjects?: number;
    liveProjects?: number;
    technologiesUsed?: number;
    totalUsers?: string;
  };
}

const ProjectStats: React.FC<ProjectStatsProps> = ({ stats }) => {
  const statItems = [
    {
      icon: 'FolderOpen',
      label: 'Projects',
      value: stats?.totalProjects,
      color: 'text-primary'
    },
    {
      icon: 'ExternalLink',
      label: 'Live',
      value: stats?.liveProjects,
      color: 'text-success'
    },
    {
      icon: 'Code',
      label: 'Technologies',
      value: stats?.technologiesUsed,
      color: 'text-accent'
    },
    {
      icon: 'Users',
      label: 'Users',
      value: stats?.totalUsers,
      color: 'text-secondary'
    }
  ];

  return (
    <div className="text-center space-y-6 mb-8">
      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <Icon name="BarChart3" size={18} />
        <span className="text-sm font-medium">Project Overview</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statItems?.map((item, index) => (
          <motion.div
            key={item?.label}
            className="bg-card/50 border border-border rounded-xl p-4 group hover:bg-card/80 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="space-y-2">
              <div className={`text-2xl font-bold ${item?.color} group-hover:scale-110 transition-transform duration-300`}>
                {item?.value}
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Icon name={item?.icon} size={14} />
                <span>{item?.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStats;