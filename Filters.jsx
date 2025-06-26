import { useState } from 'react';

export default function Filters({ onFilter }) {
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      ...(genre && { with_genres: genre }),
      ...(year && { primary_release_year: year }),
      ...(rating && { 'vote_average.gte': rating }),
    };
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 border rounded-md">
      <div>
        <label>Genre: </label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">All</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          {/* Add more genres from TMDb */}
        </select>
      </div>

      <div>
        <label>Year: </label>
        <input
          type="number"
          placeholder="e.g. 2023"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div>
        <label>Min Rating: </label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="10"
          placeholder="e.g. 7.5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
        Apply Filters
      </button>
    </form>
  );
}
