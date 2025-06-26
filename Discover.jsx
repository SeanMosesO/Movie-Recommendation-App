import { useEffect, useState } from 'react';
import { discoverMovies } from '../services/tmdb';
import MovieCard from '../components/MovieCard';

export default function Discover() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await discoverMovies({ sort_by: 'popularity.desc' });
      setMovies(res.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-xl mb-4">Discover Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
