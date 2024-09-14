// wealth-wise-frontend/src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import DashboardPage from '../pages/DashboardPage';
import { useSelector } from 'react-redux';

const AppRoutes = ({ toggleTheme }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route
        path="/auth"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <AuthPage toggleTheme={toggleTheme} />}
      />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <DashboardPage toggleTheme={toggleTheme} /> : <Navigate to="/auth" />}
      />
      {/* Add other protected routes here */}
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
};

export default AppRoutes;
