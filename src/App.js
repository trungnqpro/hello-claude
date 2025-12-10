import React, { useState, useEffect } from 'react';
import { isAuthenticated, getCurrentUser } from './services/authService';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    loading: true
  });

  useEffect(() => {
    // Check authentication status on mount
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const authenticated = isAuthenticated();
    const user = getCurrentUser();

    setAuthState({
      isAuthenticated: authenticated,
      user: user,
      loading: false
    });
  };

  const handleLoginSuccess = () => {
    // Refresh auth state after successful login
    checkAuthStatus();
  };

  const handleLogout = () => {
    // Update state after logout
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false
    });
  };

  // Show loading state while checking authentication
  if (authState.loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Đang tải...</p>
      </div>
    );
  }

  // Show Login or Dashboard based on authentication state
  return (
    <div className="app">
      {authState.isAuthenticated && authState.user ? (
        <Dashboard user={authState.user} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
