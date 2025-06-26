import { useState } from 'react';
import axios from 'axios';

export default function RatingForm({ movieId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitReview = async () => {
    const token = localStorage.getItem('token');
    await axios.post('/api/user/reviews', { movieId, rating, comment }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Review submitted!');
  };

  return (
    <div>
      <input type="number" max="10" min="0" value={rating} onChange={(e) => setRating(e.target.value)} />
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={submitReview}>Submit</button>
    </div>
  );
}
