import apiClient from './index';

export const authAPI = {
  login: async (username, password) => {
    const response = await apiClient.post('/api/auth/login', {
      username,
      password,
    });
    return response.data;
  },

  logout: async () => {
    const response = await apiClient.post('/api/auth/logout');
    return response.data;
  },

  validateToken: async () => {
    const response = await apiClient.get('/api/auth/validate');
    return response.data;
  },
};