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

  const router = useRouter();
  const pathname = usePathname();
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  const navigationItems: NavItem[] = [
    { path: "/", label: "Home", icon: "Home", file: "index.js" },
    { path: "/about", label: "About", icon: "User", file: "about.js" },
    { path: "/projects", label: "Projects", icon: "FolderOpen", file: "projects.js" },
    { path: "/skills", label: "Skills", icon: "Code", file: "skills.js" },
    { path: "/experience", label: "Experience", icon: "Briefcase", file: "experience.js" },
  ];

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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when scrolling (optional)
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
    // Add your close tab logic here
    console.log("Close tab:", path);
  }, []);

  const activeTab = navigationItems.find((item) => item.path === pathname) ?? navigationItems[0];

  // Items to show in main tabs vs dropdown
  const mainTabs = navigationItems.slice(0, 5);
  const dropdownItems = navigationItems.slice(5);

  return (
    <>
      {/* Header Bar */}
      <header className="bg-card border-b border-border h-12 flex items-center justify-between relative z-50">
        {/* Left: Logo */}
        <div className="flex items-center px-4 space-x-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <Icon name="Code" size={14} color="white" />
          </div>
          <span className="text-foreground font-semibold text-sm">CodeFolio Studio</span>
        </div>

        {/* Center: File Tabs */}
        <div className="flex-1 flex items-center h-max overflow-x-auto overflow-y-hidden relative">
          {/* Main Tabs */}
          {mainTabs.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`vs-code-tab flex items-center space-x-2 px-3 flex-shrink-0 ${
                pathname === item.path ? "active" : ""
              }`}
            >
              <Icon name={item.icon} size={14} />
              <span className="text-xs truncate">{item.file}</span>
              {pathname === item.path && (
                <div 
                  className="ml-1 hover:bg-muted rounded p-0.5 transition-colors"
                  onClick={(e) => handleCloseTab(e, item.path)}
                >
                  <Icon name="X" size={12} />
                </div>
              )}
            </button>
          ))}

          {/* "More" Dropdown */}
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
                <span className="text-xs">More</span>
                <Icon 
                  name="ChevronDown" 
                  size={12} 
                  className={`transition-transform duration-200 ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {/* Dropdown Menu - positioned outside the scrolling container */}
              {isMoreOpen && (
                <div className="fixed bg-popover border border-border rounded-md shadow-lg z-50 min-w-48 py-1 mt-1"
                  style={{
                    top: moreButtonRef.current ? moreButtonRef.current.getBoundingClientRect().bottom + window.scrollY : 0,
                    left: moreButtonRef.current ? moreButtonRef.current.getBoundingClientRect().left + window.scrollX : 0,
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
        <div className="flex items-center space-x-2 px-4">
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="flex items-center space-x-1 px-2 py-1 text-xs bg-muted hover:bg-border rounded transition-colors duration-200"
          >
            <Icon name="Search" size={12} />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-block px-1 py-0.5 text-xs bg-border rounded">/</kbd>
          </button>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="hidden sm:inline">Available</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation("/preview")}
              iconName="MessageCircle"
              iconPosition="left"
              className="text-xs"
            >
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Command Palette */}
      {isCommandPaletteOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="command-palette w-full max-w-lg mx-4 animate-fade-in">
            <div className="flex items-center px-4 py-3 border-b border-border">
              <Icon name="Search" size={16} className="text-muted-foreground mr-3" />
              <input
                type="text"
                placeholder="Search files, commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none"
                autoFocus
              />
              <kbd className="px-2 py-1 text-xs bg-muted rounded">ESC</kbd>
            </div>

            <div className="max-h-64 overflow-y-auto">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-muted text-left transition-colors duration-200"
                  >
                    <Icon name={item.icon} size={16} className="text-muted-foreground" />
                    <div className="flex-1">
                      <div className="text-sm text-foreground">{item.file}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                    </div>
                    {index < 9 && (
                      <kbd className="px-2 py-1 text-xs bg-muted rounded">⌘ {index + 1}</kbd>
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-muted-foreground">
                  <Icon name="Search" size={24} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No results found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Status Bar */}
      <div className="status-bar bg-primary text-primary-foreground flex items-center justify-between px-4 text-xs">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="GitBranch" size={12} />
            <span>main</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="AlertCircle" size={12} />
            <span>0</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="AlertTriangle" size={12} />
            <span>0</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span>{activeTab?.file}</span>
          <span>JavaScript</span>
          <span>UTF-8</span>
          <span>LF</span>
          <span>{currentTime.toLocaleTimeString()}</span>
        </div>
      </div>
    </>
  );
};

export default Header;