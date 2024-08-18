const mongoose = require("mongoose");
const BannerModel = require("../models/banner.model");
const ProdutoModel = require("../models/produto.model");
const CategoriaModel = require("../models/categoria.model");
const ReviewModel = require("../models/review.model");
require('dotenv').config();

async function seedInitialInfos() {

  const {
    DOCKER_MONGO_HOSTNAME,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  } = process.env;
  var url = "";
  if (DOCKER_MONGO_HOSTNAME != null) {
    url = `mongodb://${DOCKER_MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
  } else {
    url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
  }
 

  const existingBanner = await BannerModel.findOne({});

  if (!existingBanner) {


    const banners = [{
      imagem: 'images/promocoes/promocoes1.jpg',
      conteudo: ''
    },
    {
      imagem: 'images/promocoes/promocoes2.jpg',
      conteudo: ''

    },
    {
      imagem: 'images/promocoes/promocoes3.jpg',
      conteudo: ''
    },
    {
      imagem: 'images/promocoes/promocoes4.jpg',
      conteudo: ''
    },
    {
      imagem: 'images/promocoes/promocoes5.jpg',
      conteudo: ''
    },

    ];

    await BannerModel.insertMany(banners)
      .then(() => console.log("Done"))
      .catch((err) => console.error(err))

  } else {
    console.log("Infos already exists");
  }


  const existingProdutos = await ProdutoModel.findOne({});

  if (!existingProdutos) {


    const produtos = [{
      desconto: 10,
      nome: 'Kit Malbec',
      valor: 200,
      imagem: 'images/cabelo/cabelo1-1.jpg'
    },
    {
      desconto: 0,
      nome: 'Nativa SPA',
      valor: 100,
      imagem: 'images/cabelo/cabelo5.jpg'
    },
    {
      desconto: 0,
      nome: 'Kit Cuide-se Bem',
      valor: 230,
      imagem: 'images/cabelo/cabelo7-1.jpg'
    },
    {
      desconto: 20,
      nome: 'Make B.',
      valor: 130,
      imagem: 'images/make/make15.jpg'
    }
      ,
    {
      desconto: 0,
      nome: 'Make B. Glycolic',
      valor: 200,
      imagem: 'images/make/make17.jpg'
    }

    ];

    await ProdutoModel.insertMany(produtos)
      .then(() => console.log("Done"))
      .catch((err) => console.error(err))

  } else {
    console.log("Infos already exists");
  }

  const existingCategorias = await CategoriaModel.findOne({});

  if (!existingCategorias) {

    const categorias = [{
      nome: 'Cabelo',
      url: 'cabelo.html',
      imagem: 'images/cabelo/cabelo12.jpg'
    },
    {
      nome: 'Make',
      url: 'make.html',
      imagem: 'images/make/make7.jpg'
    }
      ,
    {
      nome: 'Perfumes',
      url: 'perfumes.html',
      imagem: 'images/perfumes/perfumes16.jpg'
    }
    ];

    await CategoriaModel.insertMany(categorias)
      .then(() => console.log("Done"))
      .catch((err) => console.error(err))

  } else {
    console.log("Infos already exists");
  }

  const existingReviews = await ReviewModel.findOne({});

  if (!existingReviews) {

    const reviews = [{
      cliente: 'João Carlos Matos',
      review: 'Excelente Loja! Produtos de qualidade e entrega super rápida',

    },
    {
      cliente: 'Maria Aparecida Rodrigues',
      review: 'Excelente Atendimento. Os melhores produtos de perfumaria.',
    }
      ,
    {
      cliente: 'Luana Rocha',
      review: 'Excelentes Produtos. Alto rendimennto e durabilidade.',
    }
    ];

    await ReviewModel.insertMany(reviews)
      .then(() => console.log("Done"))
      .catch((err) => console.error(err))

  } else {
    console.log("Infos already exists");
  }

}

module.exports = {
  seedInitialInfos: seedInitialInfos
};
