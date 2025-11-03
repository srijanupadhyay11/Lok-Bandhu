import React from 'react';
import IssueCard from './IssueCard';

const IssuesGrid = ({ filters }) => {
  // Mock data for issues
  const mockIssues = [
    {
      id: 1,
      title: 'Pothole on Main Street',
      description: 'A large pothole has formed on Main Street near the intersection with Elm Avenue, causing a hazard for drivers.',
      image: 'pot hole.jpg',
      status: 'In Progress',
      statusColor: 'bg-warning text-warning-foreground',
      category: 'Pothole',
      timeAgo: '2 days ago',
      reportedBy: 'Sarah Miller',
      reporterAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    },
    {
      id: 2,
      title: 'Broken Streetlight',
      description: 'The streetlight at the corner of Elm and Oak has been out for several nights, making the area very dark.',
      image: 'broken street light.jpg',
      status: 'Reported',
      statusColor: 'bg-accent text-accent-foreground',
      category: 'Street Light',
      timeAgo: '5 days ago',
      reportedBy: 'David Lee',
      reporterAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    },
    {
      id: 3,
      title: 'Graffiti on Wall',
      description: 'Graffiti was sprayed on the community center wall. It has since been cleaned by the city.',
      image: 'drawing in wall.jpg',
      status: 'Resolved',
      statusColor: 'bg-success text-success-foreground',
      category: 'Graffiti',
      timeAgo: '1 week ago',
      reportedBy: 'Emily Chen',
      reporterAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    },
    {
      id: 4,
      title: 'Overflowing Trash Cans',
      description: 'The trash cans in the park are overflowing, attracting pests and creating an unpleasant environment for visitors.',
      image: 'garbage.jpg',
      status: 'Reported',
      statusColor: 'bg-accent text-accent-foreground',
      category: 'Overflowing Trash Cans',
      timeAgo: '10 days ago',
      reportedBy: 'Michael Brown',
      reporterAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    },
    {
      id: 5,
      title: 'Fallen Tree Blocking Path',
      description: 'A large tree has fallen across the walking path in Central Park after the recent storm.',
      image: 'fallen tree.jpg',
      status: 'In Progress',
      statusColor: 'bg-warning text-warning-foreground',
      category: 'Fallen Tree',
      timeAgo: '3 days ago',
      reportedBy: 'Jessica Wilson',
      reporterAvatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    },
    {
      id: 6,
      title: 'Water Leak on Sidewalk',
      description: 'There is a continuous water leak from an underground pipe causing flooding on the sidewalk.',
      image: 'drain likage.jpg',
      status: 'Reported',
      statusColor: 'bg-accent text-accent-foreground',
      category: 'Water Leak',
      timeAgo: '1 day ago',
      reportedBy: 'Robert Davis',
      reporterAvatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    }
  ];

  return (
    <div>
      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          Showing {mockIssues.length} issues
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="border border-input rounded-md px-3 py-1 text-sm bg-background">
            <option>Most Recent</option>
            <option>Oldest First</option>
            <option>Most Urgent</option>
          </select>
        </div>
      </div>

      {/* Issues Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockIssues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-12 space-x-2">
        <button className="p-2 text-muted-foreground hover:text-foreground">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="w-8 h-8 bg-error text-white rounded-md font-medium">1</button>
        <button className="w-8 h-8 text-muted-foreground hover:text-foreground">2</button>
        <button className="w-8 h-8 text-muted-foreground hover:text-foreground">3</button>
        <span className="text-muted-foreground">...</span>
        <button className="w-8 h-8 text-muted-foreground hover:text-foreground">10</button>
        
        <button className="p-2 text-muted-foreground hover:text-foreground">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IssuesGrid;