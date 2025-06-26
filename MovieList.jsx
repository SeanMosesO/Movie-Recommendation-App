import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies = [], onSave }) => {
  if (movies.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSave={onSave} />
      ))}
    </div>
  );
};

export default MovieList;
// MovieList.jsx    