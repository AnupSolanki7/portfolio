"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Icon from "../AppIcon";
import Button from "./Button";

interface NavItem {
  path: string;
  label: string;
  icon: string;
  file: string;
}

const Header: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const commandPaletteRef = useRef<HTMLDivElement>(null);

  const navigationItems: NavItem[] = [
    { path: "/", label: "Home", icon: "Home", file: "index.js" },
    { path: "/about", label: "About", icon: "User", file: "about.js" },
    { path: "/projects", label: "Projects", icon: "FolderOpen", file: "projects.js" },
    { path: "/skills", label: "Skills", icon: "Code", file: "skills.js" },
    { path: "/experience", label: "Experience", icon: "Briefcase", file: "experience.js" },
  ];

  // Responsive breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const filteredItems = navigationItems.filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.file.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moreMenuRef.current && 
        !moreMenuRef.current.contains(event.target as Node) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target as Node)
      ) {
        setIsMoreOpen(false);
      }
      if (
        commandPaletteRef.current &&
        !commandPaletteRef.current.contains(event.target as Node) &&
        isCommandPaletteOpen
      ) {
        setIsCommandPaletteOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCommandPaletteOpen]);

  // Close dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsMoreOpen(false);
    };

    if (isMoreOpen) {
      window.addEventListener("scroll", handleScroll, true);
    }
    
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [isMoreOpen]);

  // 🕒 Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // ⌨️ Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isCommandPaletteOpen) {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
      if (e.key === "Escape") {
        if (isCommandPaletteOpen) {
          setIsCommandPaletteOpen(false);
          setSearchQuery("");
        }
        if (isMoreOpen) {
          setIsMoreOpen(false);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isCommandPaletteOpen, isMoreOpen]);

  const handleNavigation = useCallback(
    (path: string) => {
      router.push(path);
      setIsCommandPaletteOpen(false);
      setIsMoreOpen(false);
      setSearchQuery("");
    },
    [router]
  );

  const handleCloseTab = useCallback((e: React.MouseEvent, path: string) => {
    e.stopPropagation();
  }, []);

  const activeTab = navigationItems.find((item) => item.path === pathname) ?? navigationItems[0];

  // Responsive tab configuration
  const getVisibleTabs = () => {
    if (isMobile) {
      return navigationItems.slice(0, 2); // Show only 2 tabs on mobile
    } else if (isTablet) {
      return navigationItems.slice(0, 4); // Show 4 tabs on tablet
    }
    return navigationItems; // Show all tabs on desktop
  };

  const getDropdownItems = () => {
    const visibleTabs = getVisibleTabs();
    return navigationItems.filter(item => !visibleTabs.includes(item));
  };

  const visibleTabs = getVisibleTabs();
  const dropdownItems = getDropdownItems();

  // Format time for mobile
  const formatTime = (date: Date) => {
    if (isMobile) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    return date.toLocaleTimeString();
  };

  return (
    <>
      {/* Header Bar */}
      <header className="bg-card border-b border-border h-12 flex items-center justify-between relative z-50">
        {/* Left: Logo */}
        <div className="flex items-center px-3 sm:px-4 space-x-2 flex-shrink-0">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <Icon name="Code" size={14} color="white" />
          </div>
          <span className={`text-foreground font-semibold ${
            isMobile ? "text-xs hidden sm:block" : "text-sm"
          }`}>
            CodeFolio
          </span>
        </div>

        {/* Center: File Tabs */}
        <div className="flex-1 flex items-center h-max overflow-x-auto overflow-y-hidden scrollbar-hide relative min-w-0">
          {/* Visible Tabs */}
          {visibleTabs.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`vs-code-tab flex items-center space-x-2 px-3 flex-shrink-0 min-w-max ${
                pathname === item.path ? "active" : ""
              }`}
            >
              <Icon name={item.icon} size={isMobile ? 12 : 14} />
              <span className={`${isMobile ? "text-xs" : "text-xs"} truncate max-w-20 sm:max-w-none`}>
                {isMobile ? item.file.replace('.js', '') : item.file}
              </span>
              {pathname === item.path && (
                <div 
                  className="ml-1 hover:bg-muted rounded p-0.5 transition-colors flex-shrink-0"
                  onClick={(e) => handleCloseTab(e, item.path)}
                >
                  <Icon name="X" size={12} />
                </div>
              )}
            </button>
          ))}

          {/* "More" Dropdown for hidden items */}
          {dropdownItems.length > 0 && (
            <div className="relative flex-shrink-0" ref={moreMenuRef}>
              <button 
                ref={moreButtonRef}
                className={`vs-code-tab flex items-center space-x-1 px-3 ${
                  isMoreOpen ? "bg-muted" : ""
                }`}
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                <Icon name="MoreHorizontal" size={14} />
                {!isMobile && <span className="text-xs">More</span>}
                <Icon 
                  name="ChevronDown" 
                  size={12} 
                  className={`transition-transform duration-200 ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {/* Dropdown Menu */}
              {isMoreOpen && (
                <div className="fixed bg-popover border border-border rounded-md shadow-lg z-50 min-w-48 py-1 mt-1"
                  style={{
                    top: moreButtonRef.current ? moreButtonRef.current.getBoundingClientRect().bottom + window.scrollY : 0,
                    left: moreButtonRef.current ? 
                      (isMobile ? 8 : moreButtonRef.current.getBoundingClientRect().left + window.scrollX) : 0,
                    right: isMobile ? 8 : 'auto',
                  }}
                >
                  {dropdownItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-muted transition-colors ${
                        pathname === item.path ? "bg-muted" : ""
                      }`}
                    >
                      <Icon name={item.icon} size={14} />
                      <span className="flex-1 text-left">{item.file}</span>
                      {pathname === item.path && (
                        <Icon name="Check" size={12} className="text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: Search + Status + Contact */}
        <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 flex-shrink-0">
          {/* Search Button - Icon only on mobile */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="flex items-center space-x-1 px-2 py-1 text-xs bg-muted hover:bg-border rounded transition-colors duration-200"
          >
            <Icon name="Search" size={12} />
            {!isMobile && (
              <>
                <span>Search</span>
                <kbd className="hidden sm:inline-block px-1 py-0.5 text-xs bg-border rounded">/</kbd>
              </>
            )}
          </button>

          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Status Indicator - Simplified on mobile */}
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              {!isMobile && <span className="text-xs">Available</span>}
            </div>

            {/* Contact Button - Icon only on mobile */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation("/contact")}
              iconName="MessageCircle"
              iconPosition="left"
              className={`text-xs ${isMobile ? "px-2" : ""}`}
            >
              {isMobile ? "" : "Contact"}
            </Button>
          </div>
        </div>
      </header>

      {/* Command Palette - Responsive */}
      {isCommandPaletteOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-10 sm:pt-20 px-2 sm:px-4">
          <div 
            ref={commandPaletteRef}
            className="command-palette w-full max-w-lg animate-fade-in bg-popover border border-border rounded-lg shadow-lg"
          >
            <div className="flex items-center px-3 sm:px-4 py-3 border-b border-border">
              <Icon name="Search" size={16} className="text-muted-foreground mr-3" />
              <input
                type="text"
                placeholder="Search files, commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm sm:text-base"
                autoFocus
              />
              <kbd className="px-2 py-1 text-xs bg-muted rounded hidden sm:inline">ESC</kbd>
            </div>

            <div className="max-h-48 sm:max-h-64 overflow-y-auto">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className="w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 hover:bg-muted text-left transition-colors duration-200"
                  >
                    <Icon name={item.icon} size={isMobile ? 14 : 16} className="text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-foreground truncate">{item.file}</div>
                      <div className="text-xs text-muted-foreground truncate">{item.label}</div>
                    </div>
                    {index < 9 && !isMobile && (
                      <kbd className="px-2 py-1 text-xs bg-muted rounded flex-shrink-0">⌘ {index + 1}</kbd>
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-6 sm:py-8 text-center text-muted-foreground">
                  <Icon name="Search" size={isMobile ? 20 : 24} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No results found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Status Bar - Responsive */}
      <div className="status-bar bg-primary text-primary-foreground flex items-center justify-between px-3 sm:px-4 text-xs">
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide flex-1">
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Icon name="GitBranch" size={12} />
            <span className="hidden xs:inline">main</span>
          </div>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Icon name="AlertCircle" size={12} />
            <span>0</span>
          </div>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Icon name="AlertTriangle" size={12} />
            <span>0</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 ml-4 flex-shrink-0">
          {!isMobile && (
            <>
              <span className="hidden sm:inline truncate max-w-20">{activeTab?.file}</span>
              <span className="hidden md:inline">JavaScript</span>
              <span className="hidden lg:inline">UTF-8</span>
              <span className="hidden lg:inline">LF</span>
            </>
          )}
          <span className="flex-shrink-0">{formatTime(currentTime)}</span>
        </div>
      </div>

      {/* Mobile Safe Area Spacer */}
      {isMobile && <div className="h-4"></div>}
    </>
  );
};

export default Header;