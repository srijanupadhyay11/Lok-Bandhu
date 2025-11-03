import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-error rounded flex items-center justify-center">
                <Icon name="Flag" size={20} color="white" />
              </div>
              <span className="text-xl font-semibold text-foreground">Lok Bandhu</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigate('/dashboard-landing-page')}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/browse-issues')}
                className="text-foreground font-medium border-b-2 border-error pb-1"
              >
                Browse Issues
              </button>
            </div>
          </div>

          {/* Right Side - Search, Notifications, Profile */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              <div className="relative">
                <Icon 
                  name="Search" 
                  size={18} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
                />
                <input
                  type="text"
                  placeholder="Search issues..."
                  className="pl-10 pr-4 py-2 w-64 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            {/* Notifications */}
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Bell" size={20} />
            </button>

            {/* Profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="User" size={18} color="var(--color-primary)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;