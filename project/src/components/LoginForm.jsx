import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeId: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Mock credentials for authentication
  const mockCredentials = {
    employeeId: 'EMP001',
    password: 'nidaan123'
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.employeeId?.trim()) {
      newErrors.employeeId = 'Employee ID is required';
    }
    
    if (!formData?.password?.trim()) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (formData?.employeeId === mockCredentials?.employeeId && 
          formData?.password === mockCredentials?.password) {
        // Successful login - redirect to dashboard
        navigate('/dashboard-landing-page');
      } else {
        // Failed login - show error and clear form
        setErrors({
          general: 'Invalid Employee ID or Password. Please try again.'
        });
        setFormData({
          employeeId: '',
          password: ''
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          NIDAAN
        </h1>
        <p className="text-muted-foreground text-sm">
          Employee Login Portal
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {errors?.general && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
            <Icon name="AlertCircle" size={20} color="var(--color-error)" />
            <p className="text-sm text-red-700">{errors?.general}</p>
          </div>
        )}

        <div className="space-y-4">
          <Input
            label="Employee ID"
            type="text"
            name="employeeId"
            placeholder="Enter your employee ID"
            value={formData?.employeeId}
            onChange={handleInputChange}
            error={errors?.employeeId}
            required
            disabled={isLoading}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData?.password}
            onChange={handleInputChange}
            error={errors?.password}
            required
            disabled={isLoading}
          />
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isLoading}
          iconName="LogIn"
          iconPosition="right"
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            For technical support, contact IT helpdesk
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;