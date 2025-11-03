import React from 'react';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Icon from '../../../components/AppIcon';
import LocationPicker from '../../../components/LocationPicker';

const FilterSidebar = ({ filters, onFilterChange, onApplyFilters }) => {
  const categoryOptions = [
    { value: '', label: 'All Categories' },
    { value: 'pothole', label: 'Pothole' },
    { value: 'streetlight', label: 'Street Light' },
    { value: 'trash-cans', label: 'Overflowing Trash Cans' },
    { value: 'drainage', label: 'Overflowing Drainage' },
    { value: 'fallen-tree', label: 'Fallen Tree' },
    { value: 'graffiti', label: 'Graffiti' },
    { value: 'road-damage', label: 'Road Damage' },
    { value: 'water-leak', label: 'Water Leak' },
    { value: 'traffic-signal', label: 'Traffic Signal Issue' }
  ];

  const statusOptions = [
    { value: '', label: 'All Statuses' },
    { value: 'reported', label: 'Reported' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'resolved', label: 'Resolved' },
    { value: 'closed', label: 'Closed' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-lg font-semibold text-foreground mb-6">Filters</h2>
      
      <div className="space-y-6">
        {/* Search by Keyword */}
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Search by keyword
          </label>
          <div className="relative">
            <Icon 
              name="Search" 
              size={16} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
            />
            <input
              type="text"
              placeholder="Pothole, streetlight..."
              className="pl-10 pr-4 py-2 w-full border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <Select
            label="Category"
            options={categoryOptions}
            value={filters.category}
            onChange={(value) => onFilterChange('category', value)}
            placeholder="All Categories"
          />
        </div>

        {/* Location Filter */}
        <LocationPicker
          value={filters.location}
          onChange={(value) => onFilterChange('location', value)}
          placeholder="City, neighborhood, or ZIP"
        />

        {/* Status Filter */}
        <div>
          <Select
            label="Status"
            options={statusOptions}
            value={filters.status}
            onChange={(value) => onFilterChange('status', value)}
            placeholder="All Statuses"
          />
        </div>

        {/* Apply Filters Button */}
        <Button
          variant="default"
          fullWidth
          onClick={onApplyFilters}
          className="bg-error hover:bg-error/90 text-white"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;