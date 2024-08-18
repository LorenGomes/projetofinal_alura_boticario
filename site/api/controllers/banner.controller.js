const Banner = require('../models/banner.model');

async function getAllBanner(req, res) {

  try {
    const banners = await Banner.find({});
    res.send(banners);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }


}


module.exports = {
  getAllBanner: getAllBanner,

};
