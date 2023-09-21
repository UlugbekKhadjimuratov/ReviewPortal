const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

// Define API routes related to reviews
router.get('/reviews', reviewsController.fetchReviews);
// write down other routes here, such as POST for creating reviews, PUT for updating, DELETE for deleting, etc.

module.exports = router;
