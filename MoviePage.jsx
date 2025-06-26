import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

const MoviePage = () => {
  const { id } = useParams(); // gets `:id` from the URL

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <MovieDetail movieId={id} />
    </div>
  );
};

export default MoviePage;
// MoviePage.jsx