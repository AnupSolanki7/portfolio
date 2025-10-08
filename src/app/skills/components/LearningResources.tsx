import Icon from '@/component/AppIcon';
import Button from '@/component/ui/Button';
import React, { useState } from 'react';

const LearningResources = () => {
  const [selectedCategory, setSelectedCategory] = useState('recommended');

  const resourceCategories:any = {
    recommended: {
      title: 'Recommended for You',
      description: 'Curated resources based on current skill gaps and career goals',
      resources: [
        {
          id: 1,
          title: 'Advanced React Patterns',
          type: 'Course',
          provider: 'Epic React by Kent C. Dodds',
          duration: '40 hours',
          difficulty: 'Advanced',
          rating: 4.9,
          price: 'Paid',
          description: 'Master advanced React patterns including render props, compound components, and performance optimization techniques.',
          skills: ['React.js', 'Performance', 'Design Patterns'],
          icon: 'BookOpen',
          url: '#',
          progress: 0,
          recommended: true
        },
        {
          id: 2,
          title: 'System Design for Frontend Engineers',
          type: 'Book',
          provider: 'Frontend Masters',
          duration: '12 chapters',
          difficulty: 'Intermediate',
          rating: 4.7,
          price: 'Free',
          description: 'Learn how to design scalable frontend architectures and make informed technical decisions.',
          skills: ['Architecture', 'System Design', 'Leadership'],
          icon: 'Layers',
          url: '#',
          progress: 0,
          recommended: true
        },
        {
          id: 3,
          title: 'AI-Powered Web Development',
          type: 'Workshop',
          provider: 'OpenAI Academy',
          duration: '8 hours',
          difficulty: 'Intermediate',
          rating: 4.8,
          price: 'Paid',
          description: 'Integrate AI capabilities into web applications using modern APIs and machine learning models.',
          skills: ['AI Integration', 'APIs', 'Machine Learning'],
          icon: 'Brain',
          url: '#',
          progress: 25,
          recommended: true
        }
      ]
    },
    inProgress: {
      title: 'Currently Learning',
      description: 'Resources you are actively studying',
      resources: [
        {
          id: 4,
          title: 'TypeScript Deep Dive',
          type: 'Course',
          provider: 'TypeScript Handbook',
          duration: '30 hours',
          difficulty: 'Advanced',
          rating: 4.8,
          price: 'Free',
          description: 'Comprehensive guide to advanced TypeScript features and enterprise patterns.',
          skills: ['TypeScript', 'Type Safety', 'Enterprise Development'],
          icon: 'Shield',
          url: '#',
          progress: 65,
          recommended: false
        },
        {
          id: 5,
          title: 'Next.js Performance Optimization',
          type: 'Tutorial Series',
          provider: 'Vercel',
          duration: '15 hours',
          difficulty: 'Advanced',
          rating: 4.9,
          price: 'Free',
          description: 'Learn advanced Next.js optimization techniques for production applications.',
          skills: ['Next.js', 'Performance', 'SEO'],
          icon: 'Zap',
          url: '#',
          progress: 40,
          recommended: false
        }
      ]
    },
    completed: {
      title: 'Completed Resources',
      description: 'Resources you have successfully completed',
      resources: [
        {
          id: 6,
          title: 'React Hooks Mastery',
          type: 'Course',
          provider: 'React Training',
          duration: '20 hours',
          difficulty: 'Intermediate',
          rating: 4.7,
          price: 'Paid',
          description: 'Complete guide to React Hooks including custom hooks and advanced patterns.',
          skills: ['React.js', 'Hooks', 'State Management'],
          icon: 'CheckCircle',
          url: '#',
          progress: 100,
          recommended: false,
          completedDate: '2024-08-15'
        },
        {
          id: 7,
          title: 'Modern JavaScript ES2024',
          type: 'Documentation',
          provider: 'MDN Web Docs',
          duration: '25 hours',
          difficulty: 'Intermediate',
          rating: 4.6,
          price: 'Free',
          description: 'Latest JavaScript features and best practices for modern web development.',
          skills: ['JavaScript', 'ES6+', 'Modern Syntax'],
          icon: 'CheckCircle',
          url: '#',
          progress: 100,
          recommended: false,
          completedDate: '2024-07-22'
        }
      ]
    },
    bookmarked: {
      title: 'Saved for Later',
      description: 'Resources bookmarked for future learning',
      resources: [
        {
          id: 8,
          title: 'Web3 Development Fundamentals',
          type: 'Course',
          provider: 'Ethereum Foundation',
          duration: '35 hours',
          difficulty: 'Beginner',
          rating: 4.5,
          price: 'Free',
          description: 'Introduction to blockchain development and decentralized applications.',
          skills: ['Web3', 'Blockchain', 'Smart Contracts'],
          icon: 'Bookmark',
          url: '#',
          progress: 0,
          recommended: false
        },
        {
          id: 9,
          title: 'Micro-frontend Architecture',
          type: 'Workshop',
          provider: 'Single-SPA',
          duration: '12 hours',
          difficulty: 'Advanced',
          rating: 4.4,
          price: 'Paid',
          description: 'Build scalable applications using micro-frontend architecture patterns.',
          skills: ['Architecture', 'Micro-frontends', 'Scalability'],
          icon: 'Bookmark',
          url: '#',
          progress: 0,
          recommended: false
        }
      ]
    }
  };

  const getDifficultyColor = (difficulty: any) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success bg-success/10 border-success/20';
      case 'Intermediate': return 'text-warning bg-warning/10 border-warning/20';
      case 'Advanced': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getTypeIcon = (type: any) => {
    switch (type) {
      case 'Course': return 'PlayCircle';
      case 'Book': return 'BookOpen';
      case 'Workshop': return 'Users';
      case 'Tutorial Series': return 'List';
      case 'Documentation': return 'FileText';
      default: return 'Book';
    }
  };

  const categories = [
    { key: 'recommended', label: 'Recommended', icon: 'Star' },
    { key: 'inProgress', label: 'In Progress', icon: 'Clock' },
    { key: 'completed', label: 'Completed', icon: 'CheckCircle' },
    { key: 'bookmarked', label: 'Bookmarked', icon: 'Bookmark' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="GraduationCap" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Learning Resources</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="TrendingUp" size={16} />
          <span>Continuous Learning</span>
        </div>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category?.key}
            onClick={() => setSelectedCategory(category?.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
              selectedCategory === category?.key
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-border hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={14} />
            <span>{category?.label}</span>
            <span className="text-xs opacity-70">
              ({resourceCategories?.[category?.key]?.resources?.length})
            </span>
          </button>
        ))}
      </div>
      {/* Category Description */}
      <div className="mb-6">
        <h4 className="text-md font-medium text-foreground mb-1">
          {resourceCategories?.[selectedCategory]?.title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {resourceCategories?.[selectedCategory]?.description}
        </p>
      </div>
      {/* Resources List */}
      <div className="space-y-4">
        {resourceCategories?.[selectedCategory]?.resources?.map((resource:any) => (
          <div
            key={resource?.id}
            className="group p-4 bg-muted hover:bg-border rounded-lg transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-background rounded-lg">
                <Icon name={getTypeIcon(resource?.type)} size={20} className="text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h5 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {resource?.title}
                      </h5>
                      {resource?.recommended && (
                        <Icon name="Star" size={14} className="text-warning" />
                      )}
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-2">
                      <span>{resource?.provider}</span>
                      <span>•</span>
                      <span>{resource?.duration}</span>
                      <span>•</span>
                      <span className={resource?.price === 'Free' ? 'text-success' : 'text-warning'}>
                        {resource?.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full border ${getDifficultyColor(resource?.difficulty)}`}>
                      {resource?.difficulty}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="Star" size={12} className="text-warning" />
                      <span>{resource?.rating}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {resource?.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {resource?.skills?.map((skill:any, index:any) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-background text-foreground rounded border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Progress Bar (for in-progress and completed) */}
                {resource?.progress > 0 && (
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span>Progress</span>
                      <span>{resource?.progress}%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${resource?.progress}%`,
                          backgroundColor: resource?.progress === 100 ? 'var(--color-success)' : 'var(--color-primary)'
                        }}
                      />
                    </div>
                  </div>
                )}
                
                {/* Completion Date */}
                {resource?.completedDate && (
                  <div className="text-xs text-success mb-3">
                    Completed on {new Date(resource.completedDate)?.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  {selectedCategory === 'recommended' && (
                    <>
                      <Button
                        variant="default"
                        size="sm"
                        iconName="Play"
                        iconPosition="left"
                      >
                        Start Learning
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Bookmark"
                        iconPosition="left"
                      >
                        Save for Later
                      </Button>
                    </>
                  )}
                  
                  {selectedCategory === 'inProgress' && (
                    <>
                      <Button
                        variant="default"
                        size="sm"
                        iconName="Play"
                        iconPosition="left"
                      >
                        Continue
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Pause"
                        iconPosition="left"
                      >
                        Pause
                      </Button>
                    </>
                  )}
                  
                  {selectedCategory === 'completed' && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="RotateCcw"
                        iconPosition="left"
                      >
                        Review
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Share"
                        iconPosition="left"
                      >
                        Share
                      </Button>
                    </>
                  )}
                  
                  {selectedCategory === 'bookmarked' && (
                    <>
                      <Button
                        variant="default"
                        size="sm"
                        iconName="Play"
                        iconPosition="left"
                      >
                        Start Now
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="X"
                        iconPosition="left"
                      >
                        Remove
                      </Button>
                    </>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Learning Stats */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-success">
              {resourceCategories?.completed?.resources?.length}
            </div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div>
            <div className="text-lg font-bold text-warning">
              {resourceCategories?.inProgress?.resources?.length}
            </div>
            <div className="text-xs text-muted-foreground">In Progress</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">
              {resourceCategories?.recommended?.resources?.length}
            </div>
            <div className="text-xs text-muted-foreground">Recommended</div>
          </div>
          <div>
            <div className="text-lg font-bold text-muted-foreground">
              {resourceCategories?.bookmarked?.resources?.length}
            </div>
            <div className="text-xs text-muted-foreground">Bookmarked</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningResources;