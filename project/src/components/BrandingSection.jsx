import React from 'react';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const BrandingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex justify-center mb-3">
          <AppImage
            src="/assets/images/WhatsApp_Image_2025-09-01_at_23.01.47_1a7b7201-1757006885467.jpg"
            alt="NIDAAN Logo"
            className="h-16 w-auto object-contain"
          />
        </div>
        <p className="text-lg text-muted-foreground font-medium">
          Employee Portal
        </p>
      </div>

      {/* Features */}
      <div className="space-y-6 max-w-sm">
        <div className="flex items-center space-x-4 text-left">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Shield" size={24} color="var(--color-accent)" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">
              Secure Access
            </h3>
            <p className="text-xs text-muted-foreground">
              Enterprise-grade security for all employees
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-left">
          <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Users" size={24} color="var(--color-success)" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">
              Team Collaboration
            </h3>
            <p className="text-xs text-muted-foreground">
              Connect with colleagues across departments
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-left">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Zap" size={24} color="var(--color-secondary)" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">
              Fast Performance
            </h3>
            <p className="text-xs text-muted-foreground">
              Optimized for productivity and efficiency
            </p>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Icon name="Lock" size={16} color="var(--color-success)" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} color="var(--color-success)" />
            <span>Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingSection;