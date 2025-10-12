import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        'React',
        'JavaScript',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'Redux',
        'Framer Motion',
        'Ant Design',
        'MUI'
      ]
    },
    {
      category: 'Backend & APIs',
      items: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'GraphQL',
        'Firebase'
      ]
    },
    {
      category: 'Tools & DevOps',
      items: [
        'Git',
        'Vite',
        'Webpack',
        'Docker',
        'Postman',
        'Figma',
        'VS Code',
        'Vercel'
      ]
    },
    {
      category: 'AI',
      items: [
        'OpenAI API',
        'Gemini API',
        'AWS transcribe',
        'ChatGPT Integration'
      ]
    }
  ];

  const iconsMap: Record<string, string> = {
    React: 'Code',
    JavaScript: 'Zap',
    TypeScript: 'FileText',
    'Next.js': 'Globe',
    'Tailwind CSS': 'Palette',
    Redux: 'Database',
    'Framer Motion': 'Play',
    'Ant Design': 'Monitor',
    MUI: 'Monitor',
    'Node.js': 'Server',
    'Express.js': 'Zap',
    MongoDB: 'Database',
    'REST APIs': 'Globe',
    GraphQL: 'GitMerge',
    Firebase: 'Zap',
    Git: 'GitBranch',
    Vite: 'Zap',
    Webpack: 'Zap',
    Docker: 'Box',
    Postman: 'Mail',
    Figma: 'Palette',
    'VS Code': 'Monitor',
    Vercel: 'Globe',
    Netlify: 'Globe',
    'OpenAI API': 'Zap',
    'AWS transcribe': 'Zap',
    'Gemini API': 'Zap',
    LangChain: 'Zap',
    'ChatGPT Integration': 'Zap'
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Technology Stack & AI Tools
        </h2>
        <p className="text-muted-foreground">
          The tools and technologies I use to build modern web and AI-powered applications
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {technologies.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Icon
                name={
                  category.category === 'Frontend'
                    ? 'Monitor'
                    : category.category === 'Backend & APIs'
                    ? 'Server'
                    : category.category === 'Tools & DevOps'
                    ? 'Settings'
                    : 'Zap'
                }
                size={20}
                className="mr-2 text-primary"
              />
              {category.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.items.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg border border-border text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  <Icon name={iconsMap[tech]} size={16} className="text-accent" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
