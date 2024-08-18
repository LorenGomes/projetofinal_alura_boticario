const express = require('express');

const contatoController = require('../controllers/contato.controller');

const router = express.Router();

router.post('/', contatoController.addContato); 

module.exports = router;