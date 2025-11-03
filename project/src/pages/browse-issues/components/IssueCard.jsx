import React from 'react';
import Button from '../../../components/Button';

const IssueCard = ({ issue }) => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      {/* Issue Image */}
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={issue.image}
          alt={issue.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Issue Content */}
      <div className="p-6">
        {/* Status and Time */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${issue.statusColor}`}>
            {issue.status}
          </span>
          <span className="text-sm text-muted-foreground">{issue.timeAgo}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {issue.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {issue.description}
        </p>

        {/* Issue Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Category:</span>
            <span className="text-foreground font-medium">{issue.category}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Reported by:</span>
            <div className="flex items-center space-x-2">
              <img
                src={issue.reporterAvatar}
                alt={issue.reportedBy}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-foreground font-medium">{issue.reportedBy}</span>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <Button
          variant="outline"
          fullWidth
          className="text-accent border-accent hover:bg-accent hover:text-white"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default IssueCard;