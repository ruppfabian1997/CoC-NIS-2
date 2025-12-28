import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDashboardData, removeToken } from '../api';

function Dashboard() {
  const [data, setData] = useState<string>('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData()
      .then((data) => setData(JSON.stringify(data)))
      .catch(() => {
        setError('Fehler beim Laden der Dashboard-Daten');
      });
  }, []);

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: 700, margin: 'auto' }}>
      <h2>Dashboard</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <pre>{data}</pre>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
