const express = require('express');

const categoriaController = require('../controllers/categoria.controller');

const router = express.Router();

router.get('/', categoriaController.getAllCategoria); 

module.exports = router;