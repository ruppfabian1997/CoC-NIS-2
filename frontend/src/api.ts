import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Backend läuft auf Port 3001

export function getToken() {
  return localStorage.getItem('token');
}

export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export function removeToken() {
  localStorage.removeItem('token');
}

export async function loginUser(email: string, password: string) {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
}

export async function registerUser(email: string, password: string) {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
}

export async function fetchDashboardData() {
  const token = getToken();
  const response = await axios.get(`${API_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
