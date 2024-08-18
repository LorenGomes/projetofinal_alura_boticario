const Categoria = require('../models/categoria.model');

async function getAllCategoria(req, res) {

  try {
    const categorias = await Categoria.find({});
    res.send(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }


}


module.exports = {
  getAllCategoria: getAllCategoria,

};
