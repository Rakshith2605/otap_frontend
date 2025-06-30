import React, { useState, useEffect } from 'react';
import { ChevronRight, Loader2, AlertCircle } from 'lucide-react';

function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowAnimation(false), 3000);
  }, []);

  const handleLogin = () => {
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (username === 'root' && password === 'Jio@75034') {
        onLoginSuccess();
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Dots */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              backgroundColor: ['#00d4ff', '#0099ff', '#2a2d7c', '#5c5f9e', '#00ffcc'][Math.floor(Math.random() * 5)],
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Initial Animation */}
      {showAnimation && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="bg-indigo-900 rounded-full p-8 animate-bounce">
            <h1 className="text-white text-6xl font-bold">Jio</h1>
          </div>
        </div>
      )}

      {/* Login Form */}
      <div className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-1000 ${showAnimation ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-900 rounded-full mb-4">
            <span className="text-white text-2xl font-bold">Jio</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Welcome to OTAP</h2>
          <p className="text-gray-600 mt-2">Network Engineers RAG System</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              placeholder="Enter your username"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              placeholder="Enter your password"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-indigo-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-800 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Logging in...
              </>
            ) : (
              <>
                Login
                <ChevronRight size={20} />
              </>
            )}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo credentials: root / Jio@75034</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;