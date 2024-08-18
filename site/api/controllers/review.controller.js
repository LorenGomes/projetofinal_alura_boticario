const Review = require('../models/review.model');

async function getAllReview(req, res) {

  try {
    const reviews = await Review.find({});
    res.send(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

}


module.exports = {
  getAllReview: getAllReview,

};
