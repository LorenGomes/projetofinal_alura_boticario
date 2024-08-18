const express = require('express');

const reviewController = require('../controllers/review.controller');

const router = express.Router();

router.get('/', reviewController.getAllReview); 

module.exports = router;