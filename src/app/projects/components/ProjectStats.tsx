import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/component/AppIcon';

interface ProjectStatsProps {
  stats: {
    totalProjects?: number;
    liveProjects?: number;
    technologiesUsed?: number;
    totalUsers?: string;
    avgPerformance?: number;
    clientSatisfaction?: number;
  };
}

const ProjectStats: React.FC<ProjectStatsProps> = ({ stats }) => {
  const statItems = [
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: stats?.totalProjects,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'ExternalLink',
      label: 'Live Projects',
      value: stats?.liveProjects,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Code',
      label: 'Technologies Used',
      value: stats?.technologiesUsed,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Users',
      label: 'Total Users Impacted',
      value: stats?.totalUsers,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: 'TrendingUp',
      label: 'Avg Performance Score',
      value: `${stats?.avgPerformance}/100`,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'Star',
      label: 'Client Satisfaction',
      value: `${stats?.clientSatisfaction}/5`,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="BarChart3" size={20} className="text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Project Statistics</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems?.map((item, index) => (
          <motion.div
            key={item?.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={`w-12 h-12 ${item?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <Icon name={item?.icon} size={20} className={item?.color} />
            </div>
            <div className="text-xl font-bold text-foreground mb-1">{item?.value}</div>
            <div className="text-xs text-muted-foreground">{item?.label}</div>
          </motion.div>
        ))}
      </div>
      {/* Additional Insights */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">Most Used Technology</div>
            <div className="text-lg font-semibold text-foreground">React.js</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">Average Project Duration</div>
            <div className="text-lg font-semibold text-foreground">3-6 months</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">Success Rate</div>
            <div className="text-lg font-semibold text-success">100%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;