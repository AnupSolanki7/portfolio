import Icon from '@/component/AppIcon';
import React from 'react';

interface Project {
  status?: number |  string;
  views?: number | string;
  stars?: number | string;
}

interface ProjectStatsProps {
  projects: Project[];
}

const ProjectStats: React.FC<ProjectStatsProps> = ({ projects }) => {
  const stats = [
    {
      label: 'Total Projects',
      value: projects?.length,
      icon: 'FolderOpen',
      color: 'text-primary',
      bgColor: 'bg-primary bg-opacity-10'
    },
    {
      label: 'Live Projects',
      value: projects?.filter(p => p?.status === 'live')?.length,
      icon: 'Globe',
      color: 'text-success',
      bgColor: 'bg-success bg-opacity-10'
    },
    {
      label: 'Total Views',
      value: projects?.reduce((sum, p) => {
        const viewsStr = String(p?.views ?? '').replace('k', '000').replace(',', '');
        return sum + parseInt(viewsStr, 10);
      }, 0),
      icon: 'Eye',
      color: 'text-accent',
      bgColor: 'bg-accent bg-opacity-10',
      format: 'number'
    },
    {
      label: 'GitHub Stars',
      value: projects?.reduce((sum, p) => sum + parseInt(String(p?.stars ?? '0'), 10), 0),
      icon: 'Star',
      color: 'text-warning',
      bgColor: 'bg-warning bg-opacity-10'
    }
  ];

  const formatValue = (value: number, format: string | undefined) => {
    if (format === 'number' && value >= 1000) {
      return `${(value / 1000)?.toFixed(1)}k`;
    }
    return value?.toLocaleString();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat?.label}</p>
              <p className="text-2xl font-bold text-foreground">
                {formatValue(stat?.value, stat?.format)}
              </p>
            </div>
            <div className={`p-3 rounded-full ${stat?.bgColor}`}>
              <Icon name={stat?.icon} size={20} className={stat?.color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;