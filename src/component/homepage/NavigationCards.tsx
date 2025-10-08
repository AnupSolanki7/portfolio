import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Icon from '../AppIcon';

// Type definitions
interface NavigationItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  color: string;
  bgColor: string;
  borderColor: string;
  stats: string;
}

const NavigationCards: React.FC = () => {
  const router = useRouter();

  const navigationItems: NavigationItem[] = [
    {
      id: 'about',
      title: 'about.js',
      description: 'Personal story, experience timeline, and professional philosophy',
      icon: 'User',
      path: '/about',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20',
      stats: '2+ years experience'
    },
    {
      id: 'projects',
      title: 'projects.js',
      description: 'Detailed case studies with live previews and technical breakdowns',
      icon: 'FolderOpen',
      path: '/projects',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/20',
      stats: '10+ projects completed'
    },
    {
      id: 'skills',
      title: 'skills.js',
      description: 'Interactive skill matrix with proficiency levels and learning journey',
      icon: 'Code',
      path: '/skills',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/20',
      stats: '15+ technologies'
    },
    {
      id: 'experience',
      title: 'experience.js',
      description: 'Professional timeline with achievements and impact metrics',
      icon: 'Briefcase',
      path: '/experience',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/20',
      stats: 'Team leadership'
    }
  ];

  const handleCardClick = (path: string): void => {
    router.push(path);
  };

  const handleQuickActionClick = (action: string): void => {
    switch (action) {
      case 'preview':
        router.push('/preview-panel');
        break;
      case 'contact':
        // Handle contact action
        console.log('Contact action');
        break;
      case 'source':
        // Handle source view action
        console.log('Source view action');
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Explore My Portfolio
        </h2>
        <p className="text-muted-foreground">
          Navigate through different sections to learn more about my work and experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              y: -4,
              transition: { duration: 0.2 }
            }}
            className={`group relative cursor-pointer bg-card border ${item.borderColor} rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300`}
            onClick={() => handleCardClick(item.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCardClick(item.path);
              }
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                <Icon name={item.icon} size={24} className={item.color} />
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Icon name="ArrowUpRight" size={16} className="text-muted-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 font-mono">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {item.stats}
              </span>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Ready</span>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 rounded-lg border-2 ${item.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none`}></div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-12 flex flex-wrap gap-4 justify-center"
      >
        <button
          onClick={() => handleQuickActionClick('preview')}
          className="flex items-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          type="button"
        >
          <Icon name="Eye" size={18} />
          <span>Live Preview</span>
        </button>
        
        <button 
          onClick={() => handleQuickActionClick('contact')}
          className="flex items-center space-x-2 bg-card hover:bg-muted text-foreground border border-border px-6 py-3 rounded-lg font-medium transition-all duration-200"
          type="button"
        >
          <Icon name="MessageCircle" size={18} />
          <span>Get In Touch</span>
        </button>
        
        <button 
          onClick={() => handleQuickActionClick('source')}
          className="flex items-center space-x-2 bg-card hover:bg-muted text-foreground border border-border px-6 py-3 rounded-lg font-medium transition-all duration-200"
          type="button"
        >
          <Icon name="Github" size={18} />
          <span>View Source</span>
        </button>
      </motion.div>
    </div>
  );
};

export default NavigationCards;