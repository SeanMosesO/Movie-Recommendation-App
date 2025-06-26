import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query }
  });
  return res.data.results;
};

export const discoverMovies = async (filters = {}) => {
  const res = await axios.get(`${BASE_URL}/discover/movie`, {
    params: { api_key: API_KEY, ...filters }
  });
  return res.data.results;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY }
  });
  return res.data;
};
