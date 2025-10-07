import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: 'Code', level: 95, color: 'text-blue-400' },
        { name: 'JavaScript', icon: 'Zap', level: 90, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: 'FileText', level: 85, color: 'text-blue-500' },
        { name: 'Next.js', icon: 'Globe', level: 88, color: 'text-gray-400' },
        { name: 'Tailwind CSS', icon: 'Palette', level: 92, color: 'text-cyan-400' }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', icon: 'GitBranch', level: 90, color: 'text-orange-400' },
        { name: 'Vite', icon: 'Zap', level: 85, color: 'text-purple-400' },
        { name: 'REST APIs', icon: 'Globe', level: 88, color: 'text-green-400' },
        { name: 'Redux', icon: 'Database', level: 82, color: 'text-purple-500' },
        { name: 'Framer Motion', icon: 'Play', level: 80, color: 'text-pink-400' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Technology Stack
        </h2>
        <p className="text-muted-foreground">
          Technologies I work with to build exceptional web applications
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {technologies?.map((category, categoryIndex) => (
          <motion.div
            key={category?.category}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: categoryIndex * 0.2 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
              <Icon 
                name={category?.category === 'Frontend' ? 'Monitor' : 'Settings'} 
                size={20} 
                className="mr-2 text-primary" 
              />
              {category?.category}
            </h3>

            <div className="space-y-4">
              {category?.items?.map((tech, index) => (
                <motion.div
                  key={tech?.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Icon name={tech?.icon} size={16} className={tech?.color} />
                      <span className="text-foreground font-medium">{tech?.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{tech?.level}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${tech?.level}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: categoryIndex * 0.2 + index * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 bg-card border border-border rounded-lg p-6"
      >
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="TrendingUp" size={20} className="text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Currently Learning</h3>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {['Three.js', 'GraphQL', 'Docker', 'AWS', 'Node.js']?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border hover:border-primary hover:text-primary transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;