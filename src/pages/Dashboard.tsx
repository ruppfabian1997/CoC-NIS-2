import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../api';

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const data = await api.getProfile();
        if (mounted) setProfile(data);
      } catch (err: any) {
        setError(err?.data?.message || err?.message || 'Failed to fetch profile');
      } finally { if (mounted) setLoading(false); }
    }
    load();
    return () => { mounted = false; };
  }, []);

  function handleLogout() {
    api.clearToken();
    navigate('/login');
  }

  return (
    <div style={{ maxWidth: 720, margin: '40px auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </header>
      {loading && <p>Loading profile…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {profile && (
        <div>
          <p>Welcome, {profile.username || profile.email || 'User'}!</p>
          <pre style={{ background: '#f6f6f6', padding: 12 }}>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
