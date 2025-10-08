import Icon from '@/component/AppIcon';
import React, { useState } from 'react';

// Define types
type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Learning';

type Skill = {
  name: string;
  level: number;
  experience: string;
  evolution: string;
  projects: string[];
};

type SkillCategory = {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
};

type SkillCategories = {
  [key: string]: SkillCategory;
};

type CategoryKey = keyof SkillCategories;

// Component
const SkillsEvolution = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('frontend');

  const skillCategories: SkillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      color: "primary",
      skills: [
        {
          name: "React & React Hooks",
          level: 95,
          experience: "2+ years",
          evolution: "Started with class components, mastered hooks and modern patterns",
          projects: ["Property Dollar", "iManagify", "Portfolio Projects"]
        },
        {
          name: "TypeScript",
          level: 88,
          experience: "1.5+ years",
          evolution: "Adopted for type safety and better developer experience",
          projects: ["Enterprise Applications", "Component Libraries"]
        },
        {
          name: "Next.js",
          level: 85,
          experience: "1+ years",
          evolution: "Leveraged for SSR, SSG, and full-stack React applications",
          projects: ["SEO-optimized websites", "E-commerce platforms"]
        },
        {
          name: "Tailwind CSS",
          level: 92,
          experience: "2+ years",
          evolution: "Transitioned from traditional CSS to utility-first approach",
          projects: ["All recent projects", "Design systems"]
        },
        {
          name: "JavaScript (ES6+)",
          level: 90,
          experience: "3+ years",
          evolution: "From basic JS to advanced patterns and modern features",
          projects: ["All web applications", "Utility libraries"]
        }
      ]
    },
    backend: {
      title: "Backend & APIs",
      icon: "Server",
      color: "secondary",
      skills: [
        {
          name: "Node.js",
          level: 75,
          experience: "1+ years",
          evolution: "Learned for full-stack development and API creation",
          projects: ["REST APIs", "Authentication systems"]
        },
        {
          name: "Express.js",
          level: 70,
          experience: "1+ years",
          evolution: "Built RESTful APIs and middleware solutions",
          projects: ["Backend services", "API integrations"]
        },
        {
          name: "MongoDB",
          level: 65,
          experience: "1+ years",
          evolution: "NoSQL database for modern web applications",
          projects: ["User management", "Content management"]
        },
        {
          name: "REST APIs",
          level: 85,
          experience: "2+ years",
          evolution: "From consuming to creating robust API endpoints",
          projects: ["All full-stack projects", "Third-party integrations"]
        }
      ]
    },
    tools: {
      title: "Tools & Workflow",
      icon: "Settings",
      color: "accent",
      skills: [
        {
          name: "Git & GitHub",
          level: 88,
          experience: "2+ years",
          evolution: "From basic commits to advanced workflows and collaboration",
          projects: ["All projects", "Open source contributions"]
        },
        {
          name: "VS Code",
          level: 95,
          experience: "3+ years",
          evolution: "Mastered extensions, shortcuts, and productivity features",
          projects: ["Daily development", "Custom configurations"]
        },
        {
          name: "Webpack/Vite",
          level: 75,
          experience: "1.5+ years",
          evolution: "Understanding build tools and optimization techniques",
          projects: ["Custom builds", "Performance optimization"]
        },
        {
          name: "Docker",
          level: 60,
          experience: "6+ months",
          evolution: "Learning containerization for consistent deployments",
          projects: ["Development environments", "Deployment pipelines"]
        }
      ]
    },
    soft: {
      title: "Leadership & Soft Skills",
      icon: "Users",
      color: "success",
      skills: [
        {
          name: "Technical Interviews",
          level: 90,
          experience: "1+ years",
          evolution: "Conducted 30+ interviews, refined evaluation criteria",
          projects: ["Hiring process", "Team building"]
        },
        {
          name: "Mentoring",
          level: 85,
          experience: "1+ years",
          evolution: "Guided junior developers through complex problems",
          projects: ["Team development", "Knowledge sharing"]
        },
        {
          name: "Project Leadership",
          level: 80,
          experience: "1+ years",
          evolution: "Led cross-functional teams and managed deliverables",
          projects: ["Property Dollar", "iManagify"]
        },
        {
          name: "Problem Solving",
          level: 92,
          experience: "3+ years",
          evolution: "Developed systematic approach to complex challenges",
          projects: ["All development work", "Architecture decisions"]
        }
      ]
    }
  };

  const getLevelColor = (level: number): string => {
    if (level >= 90) return 'bg-success';
    if (level >= 80) return 'bg-primary';
    if (level >= 70) return 'bg-warning';
    return 'bg-muted-foreground';
  };

  const getLevelText = (level: number): SkillLevel => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Learning';
  };

  const categoryKeys = Object.keys(skillCategories) as CategoryKey[];
  const currentCategory = skillCategories[selectedCategory];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="TrendingUp" size={20} className="text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Skills Evolution</h3>
      </div>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categoryKeys.map((key) => {
          const category = skillCategories[key];
          return (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedCategory === key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-foreground border-border hover:bg-muted'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span className="text-sm font-medium">{category.title}</span>
            </button>
          );
        })}
      </div>
      
      {/* Skills Content */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-6">
          {currentCategory.skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h4 className="font-semibold text-foreground">{skill.name}</h4>
                  <span className={`px-2 py-1 text-xs rounded ${getLevelColor(skill.level)} text-white`}>
                    {getLevelText(skill.level)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>{skill.experience}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${getLevelColor(skill.level)} transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Evolution Story */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="BookOpen" size={14} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground">{skill.evolution}</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <Icon name="FolderOpen" size={14} className="text-accent mt-1 flex-shrink-0" />
                  <div className="flex flex-wrap gap-1">
                    {skill.projects.map((project, projectIndex) => (
                      <span
                        key={projectIndex}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Learning Philosophy */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="Lightbulb" size={20} className="text-primary" />
          <h4 className="text-lg font-semibold text-foreground">Continuous Learning Approach</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Icon name="Target" size={24} className="text-primary mx-auto mb-2" />
            <h5 className="font-medium text-foreground mb-1">Goal-Oriented</h5>
            <p className="text-sm text-muted-foreground">Set specific learning objectives for each technology</p>
          </div>
          
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Icon name="Repeat" size={24} className="text-secondary mx-auto mb-2" />
            <h5 className="font-medium text-foreground mb-1">Practice-Driven</h5>
            <p className="text-sm text-muted-foreground">Learn by building real-world projects</p>
          </div>
          
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Icon name="Share" size={24} className="text-accent mx-auto mb-2" />
            <h5 className="font-medium text-foreground mb-1">Knowledge Sharing</h5>
            <p className="text-sm text-muted-foreground">Teach others to reinforce learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsEvolution;