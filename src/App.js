import React, { useState, useEffect } from 'react';
import { onAuthChange } from './services/authService';
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
    // Subscribe to authentication state changes
    const unsubscribe = onAuthChange((state) => {
      setAuthState({
        ...state,
        loading: false
      });
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

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
      {authState.isAuthenticated ? (
        <Dashboard user={authState.user} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
