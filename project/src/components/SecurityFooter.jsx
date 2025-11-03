import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityFooter = () => {
  const currentYear = new Date()?.getFullYear();

  return (
    <footer className="w-full bg-card border-t border-border py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} NIDAAN. All rights reserved.
          </div>

          {/* Security Badges */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Shield" size={16} color="var(--color-success)" />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Lock" size={16} color="var(--color-success)" />
              <span>Encrypted</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="CheckCircle" size={16} color="var(--color-success)" />
              <span>Secure</span>
            </div>
          </div>

          {/* Support Link */}
          <div className="text-sm">
            <span className="text-muted-foreground">Need help? </span>
            <button className="text-accent hover:text-accent/80 font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SecurityFooter;