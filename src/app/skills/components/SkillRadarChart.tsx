import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import Icon from '../../../component/AppIcon';

const SkillRadarChart = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const skillCategories:any = {
    frontend: {
      name: 'Frontend Development',
      color: '#007ACC',
      data: [
        { skill: 'React.js', proficiency: 95, experience: '2+ years' },
        { skill: 'JavaScript/ES6+', proficiency: 90, experience: '2+ years' },
        { skill: 'TypeScript', proficiency: 85, experience: '1.5 years' },
        { skill: 'HTML5/CSS3', proficiency: 95, experience: '2+ years' },
        { skill: 'Tailwind CSS', proficiency: 90, experience: '1.5 years' },
        { skill: 'Next.js', proficiency: 80, experience: '1 year' }
      ]
    },
    backend: {
      name: 'Backend & APIs',
      color: '#4EC9B0',
      data: [
        { skill: 'Node.js', proficiency: 75, experience: '1 year' },
        { skill: 'REST APIs', proficiency: 85, experience: '1.5 years' },
        { skill: 'GraphQL', proficiency: 70, experience: '8 months' },
        { skill: 'MongoDB', proficiency: 65, experience: '8 months' },
        { skill: 'PostgreSQL', proficiency: 60, experience: '6 months' },
        { skill: 'Express.js', proficiency: 70, experience: '1 year' }
      ]
    },
    tools: {
      name: 'Tools & DevOps',
      color: '#FFCC02',
      data: [
        { skill: 'Git/GitHub', proficiency: 90, experience: '2+ years' },
        { skill: 'VS Code', proficiency: 95, experience: '2+ years' },
        { skill: 'Webpack/Vite', proficiency: 80, experience: '1.5 years' },
        { skill: 'Docker', proficiency: 60, experience: '6 months' },
        { skill: 'AWS', proficiency: 55, experience: '4 months' },
        { skill: 'CI/CD', proficiency: 65, experience: '8 months' }
      ]
    },
    emerging: {
      name: 'AI & Emerging Tech',
      color: '#F44747',
      data: [
        { skill: 'AI Integration', proficiency: 75, experience: '8 months' },
        { skill: 'Machine Learning', proficiency: 60, experience: '6 months' },
        { skill: 'Web3/Blockchain', proficiency: 45, experience: '3 months' },
        { skill: 'PWA', proficiency: 80, experience: '1 year' },
        { skill: 'WebAssembly', proficiency: 40, experience: '2 months' },
        { skill: 'Micro-frontends', proficiency: 65, experience: '6 months' }
      ]
    }
  };

  const CustomTooltip = ({ active, payload, label }:any) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="text-foreground font-medium">{label}</p>
          <p className="text-primary text-sm">Proficiency: {data?.proficiency}%</p>
          <p className="text-muted-foreground text-xs">Experience: {data?.experience}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Target" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Skill Proficiency Matrix</h3>
        </div>
        <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
          {Object.entries(skillCategories)?.map(([key, category]:any) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-3 py-1 text-xs rounded transition-all duration-200 ${
                selectedCategory === key
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category?.name?.split(' ')?.[0]}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skillCategories?.[selectedCategory]?.data}>
              <PolarGrid stroke="var(--color-border)" />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10, fill: 'var(--color-muted-foreground)' }}
              />
              <Radar
                name="Proficiency"
                dataKey="proficiency"
                stroke={skillCategories?.[selectedCategory]?.color}
                fill={skillCategories?.[selectedCategory]?.color}
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Skill Details */}
        <div className="space-y-3">
          <h4 className="text-md font-medium text-foreground mb-4">
            {skillCategories?.[selectedCategory]?.name} Details
          </h4>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {skillCategories?.[selectedCategory]?.data?.map((skill:any, index:any) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-border transition-colors duration-200">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{skill?.skill}</span>
                    <span className="text-xs text-muted-foreground">{skill?.proficiency}%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2 mb-1">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${skill?.proficiency}%`,
                        backgroundColor: skillCategories?.[selectedCategory]?.color
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{skill?.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRadarChart;