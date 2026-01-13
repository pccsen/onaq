import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitContact = async (data) => {
  const response = await api.post('/contacts', data);
  return response.data;
};

export const submitFeedback = async (data) => {
  const response = await api.post('/feedback', data);
  return response.data;
};

export const getDemoData = async (businessType) => {
  const response = await api.get(`/demo/${businessType}`);
  return response.data;
};

// Orders API
export const getOrders = async (params = {}) => {
  const response = await api.get('/orders', { params });
  return response.data;
};

export const getOrder = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

export const createOrder = async (data) => {
  const response = await api.post('/orders', data);
  return response.data;
};

export const updateOrder = async (id, data) => {
  const response = await api.put(`/orders/${id}`, data);
  return response.data;
};

export const deleteOrder = async (id) => {
  const response = await api.delete(`/orders/${id}`);
  return response.data;
};

export const getOrderStats = async (params = {}) => {
  const response = await api.get('/orders/stats/summary', { params });
  return response.data;
};

// Clients API
export const getClients = async (params = {}) => {
  const response = await api.get('/clients', { params });
  return response.data;
};

export const getClient = async (id) => {
  const response = await api.get(`/clients/${id}`);
  return response.data;
};

export const getClientByPhone = async (phone) => {
  const response = await api.get(`/clients/phone/${phone}`);
  return response.data;
};

export const createClient = async (data) => {
  const response = await api.post('/clients', data);
  return response.data;
};

export const updateClient = async (id, data) => {
  const response = await api.put(`/clients/${id}`, data);
  return response.data;
};

export const deleteClient = async (id) => {
  const response = await api.delete(`/clients/${id}`);
  return response.data;
};

export const getClientStats = async (params = {}) => {
  const response = await api.get('/clients/stats/summary', { params });
  return response.data;
};

// Analytics API
export const getAnalytics = async (params = {}) => {
  const response = await api.get('/analytics', { params });
  return response.data;
};

export default api;

