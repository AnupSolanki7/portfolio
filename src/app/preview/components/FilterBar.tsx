import Icon from '@/component/AppIcon';
import React from 'react';


type FilterBarProps = {
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  sortBy: string;
  onSortChange: (sortId: string) => void;
  viewMode: string;
  onViewModeChange: (viewModeId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ 
  activeFilter, 
  onFilterChange, 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange,
  searchQuery,
  onSearchChange 
}) => {
  const filters = [
    { id: 'all', label: 'All Projects', icon: 'Grid3x3', count: 12 },
    { id: 'featured', label: 'Featured', icon: 'Star', count: 4 },
    { id: 'live', label: 'Live', icon: 'Globe', count: 8 },
    { id: 'development', label: 'In Development', icon: 'Wrench', count: 2 },
    { id: 'archived', label: 'Archived', icon: 'Archive', count: 2 }
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent', icon: 'Clock' },
    { id: 'popular', label: 'Most Popular', icon: 'TrendingUp' },
    { id: 'alphabetical', label: 'A-Z', icon: 'ArrowUpAZ' },
    { id: 'technology', label: 'Technology', icon: 'Code' }
  ];

  const viewModes = [
    { id: 'grid', icon: 'Grid3x3', label: 'Grid View' },
    { id: 'list', icon: 'List', label: 'List View' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      {/* Search Bar */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-1 relative">
          <Icon 
            name="Search" 
            size={16} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="text"
            placeholder="Search projects, technologies, or descriptions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={16} />
            </button>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-muted rounded-md p-1">
          {viewModes?.map((mode) => (
            <button
              key={mode?.id}
              onClick={() => onViewModeChange(mode?.id)}
              className={`p-2 rounded transition-colors duration-200 ${
                viewMode === mode?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title={mode?.label}
            >
              <Icon name={mode?.icon} size={16} />
            </button>
          ))}
        </div>
      </div>
      {/* Filters and Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => onFilterChange(filter?.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-border'
              }`}
            >
              <Icon name={filter?.icon} size={14} />
              <span>{filter?.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                activeFilter === filter?.id
                  ? 'bg-primary-foreground text-primary'
                  : 'bg-background text-muted-foreground'
              }`}>
                {filter?.count}
              </span>
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <div className="relative group">
            <button className="flex items-center space-x-2 px-3 py-2 bg-muted hover:bg-border rounded-md text-sm transition-colors duration-200">
              <Icon name={sortOptions?.find(s => s?.id === sortBy)?.icon || 'Clock'} size={14} />
              <span>{sortOptions?.find(s => s?.id === sortBy)?.label || 'Most Recent'}</span>
              <Icon name="ChevronDown" size={14} />
            </button>
            
            <div className="absolute right-0 top-full mt-1 bg-popover border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-48">
              {sortOptions?.map((option) => (
                <button
                  key={option?.id}
                  onClick={() => onSortChange(option?.id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-muted text-left transition-colors duration-200 ${
                    sortBy === option?.id ? 'bg-muted text-primary' : 'text-foreground'
                  }`}
                >
                  <Icon name={option?.icon} size={14} />
                  <span>{option?.label}</span>
                  {sortBy === option?.id && (
                    <Icon name="Check" size={14} className="ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;