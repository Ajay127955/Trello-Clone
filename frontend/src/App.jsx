import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import { GeneratedRoutes } from './pages/generated/GeneratedRoutes';

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <Router>
          <GeneratedRoutes />
        </Router>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
