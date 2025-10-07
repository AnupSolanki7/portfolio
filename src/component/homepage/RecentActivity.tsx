import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';

// Type definitions
interface Activity {
  id: number;
  type: string;
  action: string;
  description: string;
  timestamp: Date;
  icon: string;
  color: string;
  bgColor: string;
}

const RecentActivity: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  const activities: Activity[] = [
    {
      id: 1,
      type: 'commit',
      action: 'Pushed to main',
      description: 'Updated portfolio homepage with new animations',
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
      icon: 'GitCommit',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      id: 2,
      type: 'deploy',
      action: 'Deployed to production',
      description: 'Property Dollar v2.1.0 - Enhanced user dashboard',
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
      icon: 'Rocket',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      id: 3,
      type: 'review',
      action: 'Code review completed',
      description: 'Reviewed React component optimization PR',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      icon: 'Eye',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      id: 4,
      type: 'meeting',
      action: 'Team standup completed',
      description: 'Discussed sprint progress and upcoming features',
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      icon: 'Users',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10'
    },
    {
      id: 5,
      type: 'learning',
      action: 'Completed course module',
      description: 'Advanced React Patterns and Performance',
      timestamp: new Date(Date.now() - 10800000), // 3 hours ago
      icon: 'BookOpen',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getTimeAgo = (timestamp: Date): string => {
    const diff = currentTime.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  const handleRefresh = (): void => {
    setCurrentTime(new Date());
    // Add any additional refresh logic here
  };

  const handleFilter = (): void => {
    // Add filter logic here
    console.log('Filter clicked');
  };

  const handleViewAll = (): void => {
    // Add view all logic here
    console.log('View all activity');
  };

  return (
    <div className="w-full max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground flex items-center">
            <Icon name="Activity" size={20} className="mr-2 text-primary" />
            Recent Activity
          </h2>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live updates</span>
          </div>
        </div>
      </motion.div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-muted px-4 py-3 border-b border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Activity Feed</span>
            <div className="flex items-center space-x-2">
              <button 
                className="p-1 hover:bg-border rounded transition-colors duration-200"
                onClick={handleRefresh}
                type="button"
                title="Refresh"
              >
                <Icon name="RotateCcw" size={14} className="text-muted-foreground" />
              </button>
              <button 
                className="p-1 hover:bg-border rounded transition-colors duration-200"
                onClick={handleFilter}
                type="button"
                title="Filter"
              >
                <Icon name="Filter" size={14} className="text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Activity List */}
        <div className="max-h-96 overflow-y-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-4 hover:bg-muted/50 transition-colors duration-200 border-b border-border last:border-b-0"
            >
              {/* Icon */}
              <div className={`p-2 rounded-lg ${activity.bgColor} flex-shrink-0`}>
                <Icon name={activity.icon} size={16} className={activity.color} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-foreground truncate">
                    {activity.action}
                  </h4>
                  <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                    {getTimeAgo(activity.timestamp)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-muted px-4 py-3 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Last updated: {currentTime.toLocaleTimeString()}</span>
            <button 
              className="flex items-center space-x-1 hover:text-foreground transition-colors duration-200"
              onClick={handleViewAll}
              type="button"
            >
              <Icon name="ExternalLink" size={12} />
              <span>View all activity</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 grid grid-cols-3 gap-4"
      >
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">24</div>
          <div className="text-xs text-muted-foreground">Commits this week</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-accent mb-1">5</div>
          <div className="text-xs text-muted-foreground">PRs reviewed</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-500 mb-1">98%</div>
          <div className="text-xs text-muted-foreground">Uptime</div>
        </div>
      </motion.div>
    </div>
  );
};

export default RecentActivity;