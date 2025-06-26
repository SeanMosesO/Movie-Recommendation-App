// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const userCtrl = require('../controllers/userController');

router.get('/me', auth, userCtrl.getProfile);
router.put('/favorites', auth, userCtrl.toggleFavorite);
router.post('/watchlist', auth, userCtrl.createWatchlist);
router.put('/watchlist/:id', auth, userCtrl.addToWatchlist);
router.post('/reviews', auth, userCtrl.addReview);

module.exports = router;

// routes/authRoutes.js 