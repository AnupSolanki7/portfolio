import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';

// Type definitions
interface CodeExample {
  title: string;
  language: string;
  code: string;
}

interface CodeExamples {
  [key: string]: CodeExample;
}

interface Tab {
  id: string;
  label: string;
  icon: string;
}

const CodePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('component');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const codeExamples: CodeExamples = {
    component: {
      title: 'React Component',
      language: 'jsx',
      code: `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="p-6 bg-card rounded-lg border"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm">Active: {count}s</span>
        <button 
          className={isHovered ? 'text-primary' : 'text-muted-foreground'}
        >
          Learn More →
        </button>
      </div>
    </motion.div>
  );
};

export default InteractiveCard;`
    },
    hook: {
      title: 'Custom Hook',
      language: 'jsx',
      code: `import { useState, useEffect, useCallback } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

export default useLocalStorage;`
    },
    api: {
      title: 'API Integration',
      language: 'jsx',
      code: `import axios from 'axios';
import { useState, useEffect } from 'react';

const useApiData = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get(endpoint, {
          timeout: 10000,
          ...options
        });
        
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) {
      fetchData();
    }
  }, [endpoint]);

  const refetch = () => {
    if (endpoint) fetchData();
  };

  return { data, loading, error, refetch };
};

export default useApiData;`
    }
  };

  const tabs: Tab[] = [
    { id: 'component', label: 'Component.jsx', icon: 'FileText' },
    { id: 'hook', label: 'useHook.js', icon: 'Zap' },
    { id: 'api', label: 'api.js', icon: 'Globe' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const renderCodeWithHighlighting = (code: string): React.ReactNode => {
    const lines = code.split('\n');
    const keywords = ['import', 'export', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'try', 'catch', 'async', 'await'];
    
    return lines.map((line, index) => (
      <div key={index} className="flex">
        <span className="text-muted-foreground text-xs w-8 text-right pr-2 select-none">
          {index + 1}
        </span>
        <span className="flex-1">
          {line.split(/(\b\w+\b)/).map((part, i) => {
            if (keywords.includes(part)) {
              return <span key={i} className="text-blue-400 dark:text-blue-300">{part}</span>;
            }
            return part;
          })}
        </span>
      </div>
    ));
  };

  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1500);
  };

  const handleCloseTab = (e: React.MouseEvent, tabId: string): void => {
    e.stopPropagation();
    // Optional: Add logic to handle tab closing
    console.log(`Closing tab: ${tabId}`);
  };

  return (
    <motion.div 
      className="w-full max-w-2xl bg-card border border-border rounded-lg overflow-hidden"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Code Editor Header */}
      <div className="flex items-center justify-between bg-muted px-4 py-2 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-xs text-muted-foreground ml-4">
            ~/portfolio/src/components/
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Play" size={14} className="text-green-500" />
          <span className="text-xs text-green-500">Running</span>
        </div>
      </div>

      {/* File Tabs */}
      <div className="flex bg-card border-b border-border">
        {tabs.map((tab) => (
            <div
            key={tab.id}
            className={`flex items-center space-x-2 px-4 py-2 text-sm border-r border-border transition-colors duration-200 cursor-pointer ${
              activeTab === tab.id
              ? 'bg-background text-foreground border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
            onClick={() => handleTabClick(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            tabIndex={0}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') handleTabClick(tab.id);
            }}
            >
            <Icon name={tab.icon} size={14} />
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <button 
              className="ml-2 hover:bg-muted rounded p-0.5"
              onClick={e => handleCloseTab(e, tab.id)}
              type="button"
              tabIndex={-1}
              >
              <Icon name="X" size={10} />
              </button>
            )}
            </div>
        ))}
      </div>

      {/* Code Content */}
      <div className="relative">
        <div className="p-4 bg-background font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
          <div className="text-foreground leading-relaxed">
            {renderCodeWithHighlighting(codeExamples[activeTab]?.code)}
          </div>
        </div>
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-card px-3 py-1 rounded border border-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Typing...</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-2 text-xs">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="GitBranch" size={12} />
            <span>main</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="CheckCircle" size={12} />
            <span>No issues</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span>{codeExamples[activeTab]?.language?.toUpperCase()}</span>
          <span>UTF-8</span>
          <span>LF</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CodePreview;