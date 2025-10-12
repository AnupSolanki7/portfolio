import Icon from '@/component/AppIcon';
import React, { useState } from 'react';

type Skill = {
  name: string;
  category: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
};

const SkillsEvolution = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: "Monitor",
      skills: [
        { name: "React", category: "Library", icon: "React" },
        { name: "TypeScript", category: "Language", icon: "TypeScript" },
        { name: "Next.js", category: "Framework", icon: "NextJS" },
        { name: "Tailwind CSS", category: "Styling", icon: "Tailwind" },
        { name: "JavaScript", category: "Language", icon: "JavaScript" }
      ]
    },
    {
      title: "Backend",
      icon: "Server", 
      skills: [
        { name: "Node.js", category: "Runtime", icon: "NodeJS" },
        { name: "Express", category: "Framework", icon: "Express" },
        { name: "MongoDB", category: "Database", icon: "Database" },
        { name: "REST APIs", category: "Architecture", icon: "Api" }
      ]
    },
    {
      title: "Tools",
      icon: "Settings",
      skills: [
        { name: "Git & GitHub", category: "Version Control", icon: "GitHub" },
        { name: "VS Code", category: "Editor", icon: "VSCode" },
        { name: "Vite", category: "Build Tool", icon: "Vite" },
        { name: "Figma", category: "Design", icon: "Figma" }
      ]
    },
    {
      title: "Soft Skills",
      icon: "Users",
      skills: [
        { name: "Technical Interviewing", category: "Hiring", icon: "Users" },
        { name: "Team Mentoring", category: "Leadership", icon: "GraduationCap" },
        { name: "Problem Solving", category: "Analytical", icon: "Lightbulb" },
        { name: "Project Leadership", category: "Management", icon: "Target" }
      ]
    }
  ];

  const currentCategory = skillCategories.find(cat => cat.title.toLowerCase() === selectedCategory) || skillCategories[0];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 justify-center  ">
        {skillCategories.map((category) => (
          <button
            key={category.title}
            onClick={() => setSelectedCategory(category.title.toLowerCase())}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
              selectedCategory === category.title.toLowerCase()
                ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                : 'bg-card text-foreground border-border hover:bg-muted'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span className="text-sm font-medium">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentCategory.skills.map((skill, index) => (
          <div 
            key={index}
            className="group relative bg-card/50 border border-border rounded-xl p-4 hover:bg-card/80 transition-all duration-200 hover:shadow-sm"
          >
            <div className="flex items-start gap-3">
              {/* Skill Icon */}
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                <Icon name={skill.icon} size={18} className="text-primary" />
              </div>
              
              {/* Skill Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground truncate">
                  {skill.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {skill.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy */}
      <div className="bg-card/30 border border-border rounded-xl p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Icon name="TrendingUp" size={18} className="text-primary" />
          <h4 className="font-semibold text-foreground">Continuous Growth</h4>
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Focused on mastering core technologies while exploring emerging tools and patterns
        </p>
      </div>
    </div>
  );
};

export default SkillsEvolution;