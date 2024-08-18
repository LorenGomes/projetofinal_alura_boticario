const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  imagem: String,
  nome: String,
  url: String
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;