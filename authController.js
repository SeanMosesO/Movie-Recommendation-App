// controllers/authController.js
const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.userId).select('-password');
  res.json(user);
};

exports.toggleFavorite = async (req, res) => {
  const { movieId } = req.body;
  const user = await User.findById(req.userId);
  if (user.favorites.includes(movieId)) {
    user.favorites.pull(movieId);
  } else {
    user.favorites.push(movieId);
  }
  await user.save();
  res.json(user.favorites);
};

exports.createWatchlist = async (req, res) => {
  const { name } = req.body;
  const user = await User.findById(req.userId);
  user.watchlists.push({ name, movies: [] });
  await user.save();
  res.json(user.watchlists);
};

exports.addToWatchlist = async (req, res) => {
  const { movieId } = req.body;
  const watchlist = await User.findOneAndUpdate(
    { _id: req.userId, 'watchlists._id': req.params.id },
    { $addToSet: { 'watchlists.$.movies': movieId } },
    { new: true }
  );
  res.json(watchlist);
};

exports.addReview = async (req, res) => {
  const { movieId, rating, comment } = req.body;
  const user = await User.findById(req.userId);
  user.reviews.push({ movieId, rating, comment });
  await user.save();
  res.json(user.reviews);
};

