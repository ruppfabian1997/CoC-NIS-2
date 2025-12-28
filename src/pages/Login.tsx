import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as api from '../api';

export default function Login() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.login({ emailOrUsername, password });
      if (res?.token) api.setToken(res.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.data?.message || err?.message || 'Login failed');
    } finally { setLoading(false); }
  }

  return (
    <div style={{ maxWidth: 480, margin: '40px auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email or Username</label>
          <input value={emailOrUsername} onChange={e => setEmailOrUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input value={password} type="password" onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>{loading ? 'Logging in…' : 'Login'}</button>
      </form>
      <p>No account? <Link to="/register">Register</Link></p>
    </div>
  );
}
