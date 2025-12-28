// Lightweight API helper with token management
export const API_BASE = (import.meta && (import.meta as any).env && (import.meta as any).env.VITE_API_BASE_URL) || 'http://localhost:3000';

async function request(path: string, options: RequestInit = {}) {
  const url = `${API_BASE}${path}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(url, { ...options, headers });
  const text = await res.text();
  let data: any = null;
  try { data = text ? JSON.parse(text) : null; } catch (e) { data = text; }
  if (!res.ok) {
    const err = new Error(data?.message || res.statusText || 'Request failed');
    (err as any).status = res.status;
    (err as any).data = data;
    throw err;
  }
  return data;
}

export function setToken(token: string) { localStorage.setItem('token', token); }
export function getToken(): string | null { return localStorage.getItem('token'); }
export function clearToken() { localStorage.removeItem('token'); }

export async function register(payload: { email?: string; username?: string; password: string }) {
  return request('/auth/register', { method: 'POST', body: JSON.stringify(payload) });
}

export async function login(payload: { emailOrUsername: string; password: string }) {
  return request('/auth/login', { method: 'POST', body: JSON.stringify(payload) });
}

export async function getProfile() {
  return request('/auth/me', { method: 'GET' });
}
