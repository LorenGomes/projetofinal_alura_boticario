const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  desconto: Number,
  nome: String,
  valor: Number,
  imagem: String   
});

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;