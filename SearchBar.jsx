// components/SearchBar.jsx
import { useState } from 'react';
import { fetchMovies } from '../utils/api';

export default function SearchBar({ onResults }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const results = await fetchMovies(query);
    onResults(results);
  };

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
// components/SearchBar.jsx
// This component allows users to input a search query and fetch movie results from the TMDB API