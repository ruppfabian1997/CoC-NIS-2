import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as api from '../api';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.register({ username, email, password });
      // assuming API returns { token }
      if (res?.token) api.setToken(res.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.data?.message || err?.message || 'Registration failed');
    } finally { setLoading(false); }
  }

  return (
    <div style={{ maxWidth: 480, margin: '40px auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Email</label>
          <input value={email} type="email" onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input value={password} type="password" onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>{loading ? 'Registering…' : 'Register'}</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
