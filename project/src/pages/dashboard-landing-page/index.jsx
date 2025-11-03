import React from 'react';
import Sidebar from './components/Sidebar';
import StatsCards from './components/StatsCards';
import RecentIssuesTable from './components/RecentIssuesTable';

const DashboardLandingPage = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border px-8 py-6">
          <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-8">
          {/* Statistics Cards */}
          <div className="mb-8">
            <StatsCards />
          </div>

          {/* Recent Issues Table */}
          <div className="bg-card rounded-lg border border-border">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Recent Issues</h2>
            </div>
            <RecentIssuesTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLandingPage;