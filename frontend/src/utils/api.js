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

export default api;

