// Application constants
export const APP_NAME = 'OTAP';
export const APP_DESCRIPTION = 'Network Engineers RAG System';

// Authentication
export const AUTH_CREDENTIALS = {
  username: 'root',
  password: 'Jio@75034'
};

// Animation durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  loginFade: 3000,
  transitionDelay: 2000,
  messageDelay: 1500,
  sidebarSlide: 300,
};

// API endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    validate: '/api/auth/validate',
  },
  chat: {
    send: '/api/chat',
    history: '/api/chat/history',
    new: '/api/chat/new',
  },
};

// Local storage keys
export const STORAGE_KEYS = {
  authToken: 'otap_auth_token',
  userId: 'otap_user_id',
  theme: 'otap_theme',
};

// Message types
export const MESSAGE_TYPES = {
  USER: 'user',
  ASSISTANT: 'assistant',
  SYSTEM: 'system',
  ERROR: 'error',
};

// Theme colors
export const THEME_COLORS = {
  primary: '#312e81', // Indigo-900
  secondary: '#4f46e5', // Indigo-600
  success: '#10b981', // Green-500
  error: '#ef4444', // Red-500
  warning: '#f59e0b', // Amber-500
};