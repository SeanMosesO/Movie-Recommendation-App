import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetail = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: { api_key: API_KEY, append_to_response: 'videos,credits' },
        });
        setMovie(res.data);

        const trailer = res.data.videos.results.find(
          (v) => v.type === 'Trailer' && v.site === 'YouTube'
        );
        setTrailerKey(trailer?.key || null);
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p className="text-center mt-8">Loading movie details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-64 rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-sm text-gray-500 mb-4">⭐ {movie.vote_average} | {movie.release_date}</p>
          <p className="mb-4 text-gray-700">{movie.overview}</p>

          <div className="mb-4">
            <strong>Genres:</strong>{' '}
            {movie.genres.map((genre) => genre.name).join(', ')}
          </div>

          {trailerKey && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Trailer</h2>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="YouTube trailer"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
