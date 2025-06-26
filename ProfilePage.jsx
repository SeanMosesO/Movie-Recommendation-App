import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/user/me', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setProfile(res.data));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>{profile.username}'s Profile</h1>
      <p>Email: {profile.email}</p>
      <h2>Favorites</h2>
      <ul>{profile.favorites.map(id => <li key={id}>{id}</li>)}</ul>
      {/* Extend to show full movie details using TMDb API */}
    </div>
  );
}
