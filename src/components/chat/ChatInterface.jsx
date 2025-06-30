import React, { useState, useEffect, useRef } from 'react';
import { Send, Menu, X, User, Bot, LogOut } from 'lucide-react';

function ChatInterface({ onLogout }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: 'Welcome to OTAP! I\'m your AI assistant for network engineering queries. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      // Simulate API call - replace with actual API call
      setTimeout(() => {
        const assistantMessage = {
          id: Date.now() + 1,
          type: 'assistant',
          content: `I understand you're asking about "${inputMessage}". In a production environment, this would connect to your backend API for intelligent network engineering responses.`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const handleTextareaChange = (e) => {
    setInputMessage(e.target.value);
    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:relative w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-30 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Jio</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">OTAP</h3>
                <p className="text-xs text-gray-600">Network Engineers RAG</p>
              </div>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <button className="w-full text-left p-3 rounded-lg bg-indigo-50 text-indigo-900 font-medium hover:bg-indigo-100 transition-colors">
            + New Chat
          </button>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 mb-3">Recent Chats</h4>
            <div className="space-y-2">
              <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                <p className="text-sm text-gray-800 truncate">Network Configuration Help</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                <p className="text-sm text-gray-800 truncate">Troubleshooting Guide</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">root</p>
              <p className="text-xs text-gray-500">System Admin</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-800 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-gray-800">Network Assistant</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Online
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 bg-gray-50">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' ? 'bg-indigo-600' : 'bg-indigo-900'
                }`}>
                  {message.type === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                </div>
                <div className={`flex-1 ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                  <div className={`inline-block max-w-[80%] ${
                    message.type === 'user' ? 'bg-indigo-600 text-white' : 'bg-white shadow-md'
                  } rounded-2xl px-4 py-3`}>
                    <p className={`text-sm leading-relaxed ${message.type === 'user' ? 'text-white' : 'text-gray-800'}`}>
                      {message.content}
                    </p>
                    <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-indigo-200' : 'text-gray-500'}`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-indigo-900 rounded-lg flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white shadow-md rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t px-4 py-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-3 items-end">
              <textarea
                ref={textareaRef}
                value={inputMessage}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                className="flex-1 resize-none px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                placeholder="Ask about network configurations, troubleshooting, or best practices..."
                rows={1}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Press Enter to send, Shift+Enter for new line</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;