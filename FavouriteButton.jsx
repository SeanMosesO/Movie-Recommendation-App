import axios from 'axios';

export default function FavoriteButton({ movieId, isFavorite, onToggle }) {
  const toggleFavorite = async () => {
    const token = localStorage.getItem('token');
    await axios.put('/api/user/favorites', { movieId }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    onToggle(); // refresh state
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? '❤️ Remove' : '🤍 Add to Favorites'}
    </button>
  );
}
// This component allows users to toggle a movie as a favorite.
// It uses the `axios` library to send a PUT request to the server with the movie