const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  cliente: String,
  review: String 
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;