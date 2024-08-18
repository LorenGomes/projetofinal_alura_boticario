const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  imagem: String,
  conteudo: String
});

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;