import Icon from '@/component/AppIcon';
import Button from '@/component/ui/Button';
import React, { useState, useEffect } from 'react';


type ProjectPreviewProps = {
  project: {
    name?: string;
    description?: string;
    liveUrl?: string;
    previewUrl?: string;
    // Add other fields as needed
  };
  onClose: () => void;
  onCodeToggle: () => void;
  showCode?: boolean;
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project, onClose, onCodeToggle, showCode = false }) => {
  const [currentDevice, setCurrentDevice] = useState('desktop');
  const [isLoading, setIsLoading] = useState(true);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    firstPaint: 0,
    interactive: 0
  });

  const devices = [
    { id: 'desktop', name: 'Desktop', icon: 'Monitor', width: '100%', height: '600px' },
    { id: 'tablet', name: 'Tablet', icon: 'Tablet', width: '768px', height: '1024px' },
    { id: 'mobile', name: 'Mobile', icon: 'Smartphone', width: '375px', height: '667px' }
  ];

  useEffect(() => {
    // Simulate loading and performance metrics
    const timer = setTimeout(() => {
      setIsLoading(false);
      setPerformanceMetrics({
        loadTime: Math.random() * 2 + 0.5,
        firstPaint: Math.random() * 1 + 0.2,
        interactive: Math.random() * 3 + 1
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, [project]);

  const currentDeviceConfig = devices?.find(d => d?.id === currentDevice);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-7xl h-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-foreground">{project?.name}</h3>
            <div className="flex items-center space-x-2">
              {devices?.map((device) => (
                <button
                  key={device?.id}
                  onClick={() => setCurrentDevice(device?.id)}
                  className={`p-2 rounded transition-colors duration-200 ${
                    currentDevice === device?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-muted-foreground'
                  }`}
                  title={device?.name}
                >
                  <Icon name={device?.icon} size={16} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onCodeToggle}
              iconName={showCode ? "Eye" : "Code"}
              iconPosition="left"
            >
              {showCode ? "Preview" : "Code"}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project?.liveUrl, '_blank')}
              iconName="ExternalLink"
              iconPosition="left"
            >
              Live Site
            </Button>

            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded transition-colors duration-200"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
        </div>

        {/* Performance Metrics */}
        {!isLoading && (
          <div className="flex items-center justify-between px-4 py-2 bg-muted text-xs">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Icon name="Zap" size={12} className="text-success" />
                <span>Load: {performanceMetrics?.loadTime?.toFixed(2)}s</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Eye" size={12} className="text-accent" />
                <span>FP: {performanceMetrics?.firstPaint?.toFixed(2)}s</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="MousePointer" size={12} className="text-warning" />
                <span>TTI: {performanceMetrics?.interactive?.toFixed(2)}s</span>
              </div>
            </div>
            <div className="text-muted-foreground">
              {currentDeviceConfig?.name} • {currentDeviceConfig?.width}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Preview Panel */}
          <div className={`${showCode ? 'w-1/2' : 'w-full'} flex flex-col`}>
            <div className="flex-1 flex items-center justify-center p-4 bg-background">
              <div
                className="bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300"
                style={{
                  width: currentDevice === 'desktop' ? '100%' : currentDeviceConfig?.width,
                  height: currentDevice === 'desktop' ? '100%' : currentDeviceConfig?.height,
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              >
                {isLoading ? (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="animate-spin">
                        <Icon name="Loader2" size={32} className="text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Loading preview...</p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={project?.previewUrl}
                    className="w-full h-full border-0"
                    title={`${project?.name} Preview`}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Code Panel */}
          {showCode && (
            <div className="w-1/2 border-l border-border flex flex-col">
              <div className="flex items-center justify-between p-3 border-b border-border bg-muted">
                <div className="flex items-center space-x-2">
                  <Icon name="Code" size={16} />
                  <span className="text-sm font-medium">Source Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <select className="text-xs bg-input border border-border rounded px-2 py-1">
                    <option>React Component</option>
                    <option>Styles (CSS)</option>
                    <option>Configuration</option>
                  </select>
                </div>
              </div>
              
              <div className="flex-1 overflow-auto">
                <pre className="p-4 text-sm font-mono bg-background text-foreground">
                  <code className="language-jsx">
{`import React, { useState, useEffect } from 'react';
import './styles.css';

const ${project?.name?.replace(/\s+/g, '')}Component = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data and initialize component
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // API call simulation
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <header className="header">
        <h1>${project?.name}</h1>
        <p>${project?.description}</p>
      </header>
      
      <main className="main-content">
        {data.map((item, index) => (
          <div key={index} className="item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ${project?.name?.replace(/\s+/g, '')}Component;`}
                  </code>
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;