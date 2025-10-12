import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Icon from '../AppIcon';

// Type definitions
interface FileItemBase {
  name: string;
  icon: string;
  description?: string;
}

interface FileItemFile extends FileItemBase {
  type: 'file';
  path?: string;
}

interface FileItemFolder extends FileItemBase {
  type: 'folder';
  expanded: boolean;
  children: FileStructureItem[];
}

type FileStructureItem = FileItemFile | FileItemFolder;

interface ExpandedFolders {
  src: boolean;
  pages: boolean;
  components: boolean;
  assets: boolean;
  [key: string]: boolean;
}

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed = false, onToggle }) => {
  const [expandedFolders, setExpandedFolders] = useState<ExpandedFolders>({
    src: true,
    pages: true,
    components: false,
    assets: false
  });
  const [isVisible, setIsVisible] = useState(!isCollapsed);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Responsive breakpoint detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fileStructure: FileStructureItem[] = [
    {
      type: 'folder',
      name: 'src',
      icon: 'Folder',
      expanded: expandedFolders.src,
      children: [
        {
          type: 'folder',
          name: 'pages',
          icon: 'Folder',
          expanded: expandedFolders.pages,
          children: [
            {
              type: 'file',
              name: 'index.js',
              icon: 'FileText',
              path: '/',
              description: 'Main editor interface'
            },
            {
              type: 'file',
              name: 'about.js',
              icon: 'User',
              path: '/about',
              description: 'About page'
            },
            {
              type: 'file',
              name: 'projects.js',
              icon: 'FolderOpen',
              path: '/projects',
              description: 'Projects showcase'
            },
            {
              type: 'file',
              name: 'skills.js',
              icon: 'Code',
              path: '/skills',
              description: 'Technical skills'
            },
            {
              type: 'file',
              name: 'experience.js',
              icon: 'Briefcase',
              path: '/experience',
              description: 'Work experience'
            },
          ]
        },
        {
          type: 'folder',
          name: 'components',
          icon: 'Folder',
          expanded: expandedFolders.components,
          children: [
            {
              type: 'file',
              name: 'Header.jsx',
              icon: 'Layout',
              description: 'Navigation header'
            },
            {
              type: 'file',
              name: 'Sidebar.jsx',
              icon: 'Sidebar',
              description: 'File explorer'
            },
            {
              type: 'file',
              name: 'CodeEditor.jsx',
              icon: 'Code',
              description: 'Code editor component'
            }
          ]
        },
        {
          type: 'folder',
          name: 'assets',
          icon: 'Folder',
          expanded: expandedFolders.assets,
          children: [
            {
              type: 'file',
              name: 'styles.css',
              icon: 'Palette',
              description: 'Global styles'
            },
            {
              type: 'file',
              name: 'images',
              icon: 'Image',
              description: 'Project images'
            }
          ]
        }
      ]
    },
    {
      type: 'file',
      name: 'package.json',
      icon: 'Package',
      description: 'Project dependencies'
    },
    {
      type: 'file',
      name: 'README.md',
      icon: 'FileText',
      description: 'Project documentation'
    },
    {
      type: 'file',
      name: '.gitignore',
      icon: 'GitBranch',
      description: 'Git ignore rules'
    }
  ];

  useEffect(() => {
    setIsVisible(!isCollapsed);
  }, [isCollapsed]);

  // Auto-close sidebar on mobile when navigating
  useEffect(() => {
    if (isMobile && isVisible) {
      onToggle();
    }
  }, [pathname, isMobile]);

  const toggleFolder = (folderName: string): void => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  const handleFileClick = (file: FileItemFile): void => {
    if (file.path) {
      router.push(file.path);
    }
  };

  const isFileItemFolder = (item: FileStructureItem): item is FileItemFolder => {
    return item.type === 'folder';
  };

  const isFileItemFile = (item: FileStructureItem): item is FileItemFile => {
    return item.type === 'file';
  };

  const renderFileTree = (items: FileStructureItem[], level = 0): React.ReactNode => {
    return items.map((item, index) => (
      <div key={`${item.name}-${index}`} className="select-none">
        <div
          className={`flex items-center justify-between py-1 px-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-accent/50 ${
            isFileItemFile(item) && item.path === pathname 
              ? 'bg-primary/10 text-primary border-r-2 border-primary' 
              : 'text-foreground'
          }`}
          style={{ paddingLeft: `${level * (isMobile ? 10 : 12) + 8}px` }}
          onClick={() => {
            if (isFileItemFolder(item)) {
              toggleFolder(item.name);
            } else if (isFileItemFile(item) && item.path) {
              handleFileClick(item);
            }
          }}
        >
          <div className="flex items-center space-x-2 flex-1 min-w-0">
            {isFileItemFolder(item) && (
              <Icon
                name="ChevronRight"
                size={isMobile ? 10 : 12}
                className={`transition-transform duration-200 flex-shrink-0 ${
                  item.expanded ? 'rotate-90' : ''
                }`}
              />
            )}
            <Icon
              name={
                isFileItemFolder(item) 
                  ? (item.expanded ? 'FolderOpen' : 'Folder') 
                  : item.icon
              }
              size={isMobile ? 12 : 14}
              className={`flex-shrink-0 ${
                isFileItemFolder(item) ? 'text-accent' : 'text-muted-foreground'
              }`}
            />
            <span className={`truncate ${isMobile ? 'text-xs' : 'text-sm'}`}>
              {item.name}
            </span>
          </div>
          
          {isFileItemFile(item) && item.path === pathname && (
            <div className="w-1 h-4 bg-primary rounded-full ml-2 flex-shrink-0"></div>
          )}
        </div>
        
        {isFileItemFolder(item) && item.expanded && item.children && (
          <div className="animate-in fade-in-50">
            {renderFileTree(item.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  // Sidebar width based on device
  const getSidebarWidth = () => {
    if (isMobile) {
      return isVisible ? 'w-64' : 'w-0';
    }
    return isVisible ? 'w-60' : 'w-0 lg:w-12';
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-12 bottom-6 bg-card border-r border-border z-40 transition-all duration-300 overflow-hidden lg:relative lg:top-0 lg:bottom-0 ${
          getSidebarWidth()
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className={`flex items-center justify-between p-3 border-b border-border ${
            !isVisible && 'lg:justify-center'
          }`}>
            {isVisible ? (
              <>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Explorer
                </span>
                <div className="flex items-center space-x-1">
                  <button
                    className="p-1 hover:bg-muted rounded transition-colors duration-200"
                    title="New File"
                    type="button"
                  >
                    <Icon name="FilePlus" size={14} />
                  </button>
                  <button
                    className="p-1 hover:bg-muted rounded transition-colors duration-200"
                    title="New Folder"
                    type="button"
                  >
                    <Icon name="FolderPlus" size={14} />
                  </button>
                  <button
                    className="p-1 hover:bg-muted rounded transition-colors duration-200 lg:hidden"
                    title="Refresh"
                    type="button"
                  >
                    <Icon name="RotateCcw" size={14} />
                  </button>
                  <button
                    onClick={onToggle}
                    className="p-1 hover:bg-muted rounded transition-colors duration-200"
                    title="Collapse"
                    type="button"
                  >
                    <Icon name="PanelLeftClose" size={14} />
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={onToggle}
                className="p-1 hover:bg-muted rounded transition-colors duration-200"
                title="Expand Sidebar"
                type="button"
              >
                <Icon name="PanelLeftOpen" size={14} />
              </button>
            )}
          </div>

          {/* File Tree */}
          {isVisible && (
            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-2">
                <div className="text-xs font-medium text-muted-foreground mb-2 px-2">
                  CODEFOLIO STUDIO
                </div>
                {renderFileTree(fileStructure)}
              </div>
            </div>
          )}

          {/* Sidebar Footer */}
          {isVisible && (
            <div className="border-t border-border p-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="GitBranch" size={12} />
                  <span>main</span>
                </div>
              </div>
            </div>
          )}

          {/* Collapsed State - Mini Navigation */}
          {!isVisible && (
            <div className="flex-1 flex flex-col items-center py-4 space-y-4">
              {fileStructure.slice(0, 3).map((item, index) => (
                <button
                  key={index}
                  className="p-2 hover:bg-muted rounded transition-colors duration-200"
                  title={item.name}
                  onClick={() => {
                    if (isFileItemFile(item) && item.path) {
                      handleFileClick(item);
                    } else if (isFileItemFolder(item)) {
                      toggleFolder(item.name);
                      onToggle(); // Expand sidebar when clicking folders
                    }
                  }}
                  type="button"
                >
                  <Icon
                    name={isFileItemFolder(item) ? 'Folder' : item.icon}
                    size={16}
                    className="text-muted-foreground"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isVisible && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Toggle Button for Mobile - Only show when sidebar is hidden on mobile */}
      {!isVisible && isMobile && (
        <button
          onClick={onToggle}
          className="fixed top-16 left-4 z-50 p-2 bg-card border border-border rounded-md shadow-lg lg:hidden"
          type="button"
        >
          <Icon name="PanelLeftOpen" size={16} />
        </button>
      )}
    </>
  );
};

export default Sidebar;