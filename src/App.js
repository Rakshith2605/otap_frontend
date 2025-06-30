import React, { useState } from 'react';
import LoginPage from './components/auth/LoginPage';
import LoadingTransition from './components/auth/LoadingTransition';
import ChatInterface from './components/chat/ChatInterface';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('loading');
    setTimeout(() => setCurrentPage('chat'), 2000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
      {currentPage === 'loading' && <LoadingTransition />}
      {currentPage === 'chat' && <ChatInterface onLogout={handleLogout} />}
    </div>
  );
}

export default App;