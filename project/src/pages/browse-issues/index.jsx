import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FilterSidebar from './components/FilterSidebar';
import IssuesGrid from './components/IssuesGrid';

const BrowseIssues = () => {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    status: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleApplyFilters = () => {
    // Filter logic will be implemented here
    console.log('Applied filters:', filters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Browse Issues</h1>
          <p className="text-muted-foreground">
            Explore and discover civic issues reported by your fellow citizens.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-80 flex-shrink-0">
            <FilterSidebar 
              filters={filters}
              onFilterChange={handleFilterChange}
              onApplyFilters={handleApplyFilters}
            />
          </div>

          {/* Main Content - Issues Grid */}
          <div className="flex-1">
            <IssuesGrid filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseIssues;