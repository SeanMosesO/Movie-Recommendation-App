// utils/api.js
import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query }
  });

export const discoverMovies = (filters) =>
  axios.get(`${BASE_URL}/discover/movie`, {
    params: { api_key: API_KEY, ...filters }
  });

export const getMovieDetails = (id) =>
  axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY, append_to_response: 'credits,videos' }
  });

export const getRecommendations = (id) =>
  axios.get(`${BASE_URL}/movie/${id}/recommendations`, {
    params: { api_key: API_KEY }
  });
