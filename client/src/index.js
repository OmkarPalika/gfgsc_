import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import AuthProvider from './contexts/authContext.js';
import ErrorBoundary from './components/common/ErrorBoundary.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
