
import axios from 'axios';
const LOCALHOST='https://e-commerce-main-server.vercel.app'

export const API_BASE_URL = "http://localhost:5454";

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
