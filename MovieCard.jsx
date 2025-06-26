import React from 'react';

const MovieCard = ({ movie, onSave, showSaveButton = true }) => {
  const { id, title, poster_path, vote_average } = movie;
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform">
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">⭐ {vote_average}</p>

        {showSaveButton && (
          <button
            onClick={() => onSave(movie)}
            className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            Save to Watchlist
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
