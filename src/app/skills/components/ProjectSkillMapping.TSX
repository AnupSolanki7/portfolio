import React, { useState } from 'react';
import Icon from '../../../component/AppIcon';
import Image from '../../../component/AppImage';

// Type definitions
interface Project {
  id: number;
  name: string;
  type: string;
  image: string;
  usage: string;
  complexity: 'Advanced' | 'Intermediate' | 'Emerging';
  features: string[];
  impact: string;
}

interface SkillData {
  description: string;
  projects: Project[];
}

type SkillProjects = Record<string, SkillData>;

type ComplexityLevel = 'Advanced' | 'Intermediate' | 'Emerging' ;

// Component
const ProjectSkillMapping: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('React.js');

  const skillProjects: SkillProjects = {
    'React.js': {
      description: 'Component-based UI development with modern React patterns',
      projects: [
        {
          id: 1,
          name: 'Property Dollar',
          type: 'Real Estate Platform',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop',
          usage: 'Built entire frontend with React 18, custom hooks, and context API for state management',
          complexity: 'Advanced',
          features: ['Custom Hooks', 'Context API', 'Performance Optimization', 'Component Library'],
          impact: '40% faster page loads, 60% reduction in bundle size'
        },
        {
          id: 2,
          name: 'iManagify',
          type: 'Business Management',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop',
          usage: 'Developed modular dashboard components with real-time data visualization',
          complexity: 'Intermediate',
          features: ['Dashboard Components', 'Real-time Updates', 'Form Management', 'Data Visualization'],
          impact: 'Improved user engagement by 45%, reduced development time by 30%'
        }
      ]
    },
    'TypeScript': {
      description: 'Type-safe development with advanced TypeScript patterns',
      projects: [
        {
          id: 3,
          name: 'Enterprise CRM',
          type: 'Customer Management',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
          usage: 'Implemented strict typing for complex business logic and API integrations',
          complexity: 'Advanced',
          features: ['Generic Types', 'Interface Design', 'Type Guards', 'Utility Types'],
          impact: '70% reduction in runtime errors, improved code maintainability'
        }
      ]
    },
    'Next.js': {
      description: 'Full-stack React framework with SSR and performance optimization',
      projects: [
        {
          id: 4,
          name: 'E-commerce Platform',
          type: 'Online Retail',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
          usage: 'Built SEO-optimized e-commerce site with server-side rendering and API routes',
          complexity: 'Advanced',
          features: ['SSR/SSG', 'API Routes', 'Image Optimization', 'Performance Monitoring'],
          impact: '85% improvement in SEO scores, 50% faster initial page load'
        }
      ]
    },
    'AI Integration': {
      description: 'Integrating artificial intelligence capabilities into web applications',
      projects: [
        {
          id: 5,
          name: 'Smart Content Generator',
          type: 'AI-Powered Tool',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop',
          usage: 'Integrated OpenAI GPT models for intelligent content generation and analysis',
          complexity: 'Emerging',
          features: ['OpenAI API', 'Natural Language Processing', 'Smart Recommendations', 'ML Models'],
          impact: '90% reduction in content creation time, 65% improvement in quality'
        }
      ]
    },
    'Node.js': {
      description: 'Server-side JavaScript development with Express and database integration',
      projects: [
        {
          id: 6,
          name: 'API Gateway Service',
          type: 'Backend Infrastructure',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop',
          usage: 'Developed RESTful APIs with authentication, rate limiting, and data validation',
          complexity: 'Intermediate',
          features: ['REST APIs', 'Authentication', 'Database Integration', 'Middleware'],
          impact: 'Handles 10k+ requests/minute, 99.9% uptime achieved'
        }
      ]
    },
    'Tailwind CSS': {
      description: 'Utility-first CSS framework for rapid UI development',
      projects: [
        {
          id: 7,
          name: 'Design System Library',
          type: 'Component Library',
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop',
          usage: 'Created comprehensive design system with reusable components and consistent styling',
          complexity: 'Intermediate',
          features: ['Component Library', 'Design Tokens', 'Responsive Design', 'Dark Mode'],
          impact: '60% faster development, consistent design across 5+ projects'
        }
      ]
    }
  };

  const skills: string[] = Object.keys(skillProjects);

  const getComplexityColor = (complexity: ComplexityLevel): string => {
    switch (complexity) {
      case 'Advanced': return 'text-success bg-success/10 border-success/20';
      case 'Intermediate': return 'text-warning bg-warning/10 border-warning/20';
      case 'Emerging': return 'text-error bg-error/10 border-error/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const totalProjects: number = Object.values(skillProjects).reduce(
    (acc: number, skill: SkillData) => acc + skill.projects.length, 
    0
  );

  const currentSkillData: SkillData | undefined = skillProjects[selectedSkill];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="GitBranch" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Skills in Action</h3>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Layers" size={16} />
          <span>{totalProjects} Projects</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skills Sidebar */}
        <div className="lg:col-span-1">
          <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
            Select Skill
          </h4>
          <div className="space-y-2">
            {skills.map((skill: string) => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  selectedSkill === skill
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-border text-foreground'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{skill}</span>
                  <span className="text-xs opacity-70">
                    {skillProjects[skill].projects.length} project{skillProjects[skill].projects.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-foreground mb-2">{selectedSkill}</h4>
            <p className="text-sm text-muted-foreground">
              {currentSkillData?.description}
            </p>
          </div>

          <div className="space-y-4">
            {currentSkillData?.projects.map((project: Project) => (
              <div
                key={project.id}
                className="group p-4 bg-muted hover:bg-border rounded-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="sm:w-32 sm:h-20 w-full h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                          {project.name}
                        </h5>
                        <p className="text-sm text-muted-foreground">{project.type}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full border ${getComplexityColor(project.complexity)}`}>
                        {project.complexity}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {project.usage}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.features.map((feature: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-background text-foreground rounded border"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Impact */}
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="TrendingUp" size={14} className="text-success" />
                      <span className="text-success font-medium">Impact:</span>
                      <span className="text-muted-foreground">{project.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Summary */}
          <div className="mt-6 p-4 bg-background border border-border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="BarChart3" size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">Skill Impact Summary</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Projects Built:</span>
                <span className="ml-2 font-medium text-foreground">
                  {currentSkillData?.projects.length}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Complexity Level:</span>
                <span className="ml-2 font-medium text-foreground">
                  {currentSkillData?.projects[0]?.complexity || 'Varied'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkillMapping;