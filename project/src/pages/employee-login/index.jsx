import React from 'react';
import Header from '../../components/Header';
import BrandingSection from './components/BrandingSection';
import LoginForm from './components/LoginForm';
import SecurityFooter from './components/SecurityFooter';

const EmployeeLogin = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex">
        <div className="w-full max-w-7xl mx-auto flex">
          {/* Left Section - Branding (Hidden on mobile) */}
          <div className="hidden lg:flex lg:w-1/2 bg-card border-r border-border">
            <BrandingSection />
          </div>

          {/* Right Section - Login Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
            <div className="w-full max-w-md">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SecurityFooter />
    </div>
  );
};

export default EmployeeLogin;