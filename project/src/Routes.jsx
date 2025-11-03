import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import EmployeeLogin from './pages/employee-login';
import DashboardLandingPage from './pages/dashboard-landing-page';
import BrowseIssues from './pages/browse-issues';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<EmployeeLogin />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/dashboard-landing-page" element={<DashboardLandingPage />} />
          <Route path="/browse-issues" element={<BrowseIssues />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;