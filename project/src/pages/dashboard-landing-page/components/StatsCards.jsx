import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsCards = () => {
  const stats = [
    {
      title: 'New Issues',
      count: 25,
      icon: 'Plus',
      color: 'accent',
      bgColor: 'bg-accent/10',
      iconColor: 'var(--color-accent)'
    },
    {
      title: 'Pending Issues',
      count: 75,
      icon: 'Clock',
      color: 'warning',
      bgColor: 'bg-warning/10',
      iconColor: 'var(--color-warning)'
    },
    {
      title: 'Resolved Issues',
      count: 150,
      icon: 'CheckCircle',
      color: 'success',
      bgColor: 'bg-success/10',
      iconColor: 'var(--color-success)'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats?.map((stat, index) => (
        <div key={index} className="bg-card p-6 rounded-lg border border-border elevation-subtle">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {stat?.title}
              </p>
              <p className="text-3xl font-semibold text-foreground">
                {stat?.count}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-lg ${stat?.bgColor} flex items-center justify-center`}>
              <Icon name={stat?.icon} size={24} color={stat?.iconColor} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;