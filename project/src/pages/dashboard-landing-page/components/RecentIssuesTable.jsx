import React from 'react';

const RecentIssuesTable = () => {
  const issues = [
    {
      id: 'ISS-001',
      reportedDate: '2025-09-01',
      issueType: 'Pothole',
      status: 'Pending',
      department: 'Roads',
      statusColor: 'bg-warning text-warning-foreground'
    },
    {
      id: 'ISS-002', 
      reportedDate: '2025-09-02',
      issueType: 'Streetlight Outage',
      status: 'Assigned',
      department: 'Electrical',
      statusColor: 'bg-accent text-accent-foreground'
    },
    {
      id: 'ISS-003',
      reportedDate: '2025-09-03',
      issueType: 'Garbage Overflow',
      status: 'Resolved',
      department: 'Sanitation',
      statusColor: 'bg-success text-success-foreground'
    },
    {
      id: 'ISS-004',
      reportedDate: '2025-09-03',
      issueType: 'Water Leak',
      status: 'New',
      department: 'Water',
      statusColor: 'bg-error text-error-foreground'
    },
    {
      id: 'ISS-005',
      reportedDate: '2025-09-04',
      issueType: 'Traffic Signal Malfunction',
      status: 'Pending',
      department: 'Traffic',
      statusColor: 'bg-warning text-warning-foreground'
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Issue ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Reported Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Issue Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Department
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-card divide-y divide-border">
          {issues?.map((issue, index) => (
            <tr key={index} className="hover:bg-muted/50 transition-smooth">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                {issue?.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                {issue?.reportedDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                {issue?.issueType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${issue?.statusColor}`}>
                  {issue?.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                {issue?.department}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button className="text-accent hover:text-accent/80 font-medium transition-smooth">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentIssuesTable;