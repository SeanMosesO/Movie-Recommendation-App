// models/User.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: String,
  rating: Number,
  comment: String,
  date: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  favorites: [String], // Array of TMDb movie IDs
  watchlists: [{
    name: String,
    movies: [String]
  }],
  reviews: [reviewSchema]
});

module.exports = mongoose.model('User', userSchema);
