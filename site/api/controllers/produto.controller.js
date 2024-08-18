const Produto = require('../models/produto.model');

async function getAllProduto(req, res) {

  try {
    const produtos = await Produto.find({});
    res.send(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }

}


module.exports = {
  getAllProduto: getAllProduto,

};
