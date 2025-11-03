import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    
    // Redirect to login page
    navigate('/employee-login');
  };

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <AppImage
            src="/assets/images/WhatsApp_Image_2025-09-01_at_23.01.47_1a7b7201-1757006885467.jpg"
            alt="NIDAAN Logo"
            className="h-8 w-auto object-contain" />

          <span className="text-lg font-semibold text-foreground">NIDAAN</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon name="User" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <p className="font-medium text-foreground">EMP0001</p>
            <p className="text-sm text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-error/10 text-error font-medium transition-smooth">

              <Icon name="LayoutDashboard" size={20} color="var(--color-error)" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-smooth">

              <Icon name="AlertCircle" size={20} color="currentColor" />
              <span>Issues</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-border">
        <button
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-smooth w-full text-left"
          onClick={handleLogout}
        >
          <Icon name="LogOut" size={20} color="currentColor" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;