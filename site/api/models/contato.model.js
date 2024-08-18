const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String, 
  assunto: String,
  mensagem: String,
});

const Contato = mongoose.model('Contato', contatoSchema );

module.exports = Contato;