import apiClient from './index';

export const chatAPI = {
  sendMessage: async (message, history = []) => {
    const response = await apiClient.post('/api/chat', {
      message,
      history,
    });
    return response.data;
  },

  getChatHistory: async (chatId = null) => {
    const endpoint = chatId ? `/api/chat/history/${chatId}` : '/api/chat/history';
    const response = await apiClient.get(endpoint);
    return response.data;
  },

  createNewChat: async () => {
    const response = await apiClient.post('/api/chat/new');
    return response.data;
  },

  deleteChat: async (chatId) => {
    const response = await apiClient.delete(`/api/chat/${chatId}`);
    return response.data;
  },
};